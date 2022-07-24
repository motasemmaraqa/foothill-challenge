import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import axios from 'axios';

import { getProducts, toggleForm } from '../store';

import ProductCard from './ProductCard';

import classes from './ProductsList.module.css';

function ProductsList(props) {
  const isAdding = useSelector((st) => st.isAdding);
  const feedbackVisible = useSelector((st) => st.isNotification);
  const products = useSelector((st) => st.products);
  const handelFormOpen = () => {
    dispatch(toggleForm());
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0) {
      axios
        .get('https://62d6874451e6e8f06f0c0fb0.mockapi.io/products')
        .then((res) => {
          dispatch(getProducts(res.data));
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [dispatch, products.length]);
  return (
    <>
      <div
        className={`${classes.feedback} ${
          feedbackVisible ? classes.feedbackShow : classes.feedbackHide
        }`}
      >
        {isAdding ? 'Item added' : 'Item removed'}
      </div>

      <div className={classes.productContainer}>
        <div className={classes.headerSecondary}>
          <span className={classes.title}>Product list</span>
          <button onClick={handelFormOpen} className={classes.btn}>
            Create new product
          </button>
        </div>
        <div className={classes.products}>
          {products.map((el) => (
            <ProductCard items={props.items} key={el.id} {...el} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
