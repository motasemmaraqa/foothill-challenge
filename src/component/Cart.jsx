import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import CartItem from './CartItem';
import classes from './Cart.module.css';

function Cart() {
  const CartItems = useSelector((st) => st.cart);
  const feedbackVisible = useSelector((st) => st.isNotification);
  return (
    <>
      <div
        className={`${classes.feedback} ${
          feedbackVisible ? classes.feedbackShow : classes.feedbackHide
        }`}
      >
        Item removed
      </div>
      <div className={classes.cart}>
        {CartItems.map((el) => (
          <CartItem key={el.id} {...el}></CartItem>
        ))}
      </div>
    </>
  );
}

export default Cart;
