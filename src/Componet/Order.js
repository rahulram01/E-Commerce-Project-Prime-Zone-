import React from 'react';
import moment from 'moment';
import CheckoutProduct from './CheckOutProduct';
import CurrencyFormat from 'react-currency-format';
import '../CSS/Order.css';

function Order({order}) {
  const calculateTotalAmount = (items) => {
    return items.reduce((total, item) => total + item.price, 0);
  };

  const formattedTimestamp = moment(
      order.data.timestamp?.seconds * 1000, // Convert to milliseconds
  ).format('MMMM Do YYYY, h:mma');

  return (
    <div className="order">
      <h2>Your Order</h2>
      <h8 className="order__timestamp">
        {moment(order.data.timestamp).format('MMMM Do YYYY, h:mma')}
      </h8>
      <p className="order__id">
        <small>Order Id : {order.id}</small>
      </p>
      <div className="order__items">
        {order.data.items.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
      </div>
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={calculateTotalAmount(order.data.items)} // Calculate the total amount
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;
