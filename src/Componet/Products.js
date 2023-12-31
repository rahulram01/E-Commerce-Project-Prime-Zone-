import React from 'react';
import '../CSS/Product.css';
import {useStateValue} from '../StateProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
        </div>
      </div>

      <img className="product__img" src={image} alt="" />

      <button
        type="button"
        className="btn btn-warning  btn-sm"
        onClick={addToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
