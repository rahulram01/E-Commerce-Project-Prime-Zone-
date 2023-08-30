import React, {useState, useEffect} from 'react';
import '../CSS/Payment.css';
import {useStateValue} from '../StateProvider';
import CheckoutProduct from './CheckOutProduct';
import {Link, useNavigate} from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../reducer';
import axios from '../axios';
import {db} from '../firebase';

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log('THE SECRET IS >>>', clientSecret);
  console.log('👱', user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: 'John Doe', // Replace with actual customer name
              address: {
                line1: '123 Example Street',
                city: 'City',
                state: 'State',
                postal_code: '12345',
                country: 'IN', // Country code for India
              },
            },
          },
          shipping: {
            name: 'John Doe', // Replace with actual customer name
            address: {
              line1: '123 Example Street',
              city: 'City',
              state: 'State',
              postal_code: '12345',
              country: 'US', // Replace with actual shipping country code
            },
          },
        })

        .then(async (response) => {
          console.log('Stripe Response:', response);

          if (response.error) {
            setError(response.error.message);
            setSucceeded(false);
            setProcessing(false);
          } else {
            try {
            // Store order details in Firebase
              const orderData = {
                userId: user?.uid,
                items: basket,
                amount: getBasketTotal(basket),
                timestamp: new Date().toISOString(),
              };

              const docRef = await db.collection('orders').add(orderData);
              console.log('Order ID:', docRef.id);

              setSucceeded(true);
              setError(null);
              setProcessing(false);

              // Clear the basket
              dispatch({
                type: 'EMPTY_BASKET',
              });

              // Navigate to the order confirmation page
              navigate('/orders');
            } catch (error) {
              setError('Error storing order details');
              setSucceeded(false);
              setProcessing(false);
            }
          }
        });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
