import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, hideNotification } from '../store';
import classes from './CartItem.module.css';
function CartItem(props) {
  const dispatch = useDispatch();
  const onRemoveHandler = () => {
    dispatch(removeFromCart({ id: props.id }));
    setTimeout(() => {
      dispatch(hideNotification());
    }, 2000);
  };
  return (
    <div className={classes.container}>
      <img src={props.image} alt={props.name} className={classes.img} />
      <h4 className={classes.title}>{props.name}</h4>
      <div className={classes.price}>Price: {props.price}$</div>
      <div className={classes.btn_container}>
        <button className={classes.btn} onClick={onRemoveHandler}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
