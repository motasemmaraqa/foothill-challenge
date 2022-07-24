import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart, hideNotification } from '../store';

import classes from './ProductCard.module.css';

function ProductCard(props) {
  const dispatch = useDispatch();
  const items = useSelector((st) => st.cart);
  const isOnList = !!items.find((el) => el.id === props.id);
  const onClickHandler = () => {
    const cartObj = {
      name: props.name,
      id: props.id,
      image: props.image,
      description: props.description,
      price: props.price,
    };
    dispatch(addToCart(cartObj));
    setTimeout(() => {
      dispatch(hideNotification());
    }, 2000);
  };

  const onRemoveHandler = () => {
    dispatch(removeFromCart({ id: props.id }));
    setTimeout(() => {
      dispatch(hideNotification());
    }, 2000);
  };
  return (
    <div className={classes.card}>
      {isOnList && <i className={`fa-solid fa-heart ${classes.badge}`} />}
      <img src={props.image} alt={props.name} className={classes.img} />
      <h4 className={classes.title}>{props.name}</h4>
      <p className={classes.des}>{props.description}</p>
      <div className={classes.btn_container}>
        <button
          className={classes.btn}
          onClick={isOnList ? onRemoveHandler : onClickHandler}
        >
          {isOnList ? 'Remove' : 'add to cart'}
        </button>
        <span className={classes.price}>price: {props.price}$</span>
      </div>
    </div>
  );
}

export default ProductCard;
