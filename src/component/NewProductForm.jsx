import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import axios from 'axios';

import { toggleForm, addProduct } from '../store';

import useInput from '../hooks/useInput';

import classes from './NewProductForm.module.css';

function NewProductForm() {
  const dispatch = useDispatch();
  const [name, setName, isNameValid] = useInput('');
  const [price, setPrice, isPriceValid] = useInput('');
  const [description, setDescription, isDescriptionValid] = useInput('');
  const [image, setImage, isImageValid] = useInput('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isFormValid =
    isImageValid && isDescriptionValid && isNameValid && isPriceValid;
  const onSubmit = async () => {
    if (!isFormValid) return setIsFormSubmitted(true);
    try {
      const reqBody = {
        image,
        name,
        price,
        description,
      };
      const response = await axios.post(
        'https://62d6874451e6e8f06f0c0fb0.mockapi.io/products',
        reqBody
      );
      dispatch(addProduct(response.data));
      dispatch(toggleForm());
    } catch (error) {
      console.log(error);
    }
  };

  const handelFormClose = () => {
    dispatch(toggleForm());
  };
  return (
    <div className={classes.formContainer} onClick={handelFormClose}>
      <div className={classes.relative}>
        <div
          className={classes.form}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={classes.inputContainer}>
            <label htmlFor="name" className={classes.inputLabel}>
              Product name
            </label>
            <input
              type="text"
              id="name"
              className={classes.inputField}
              onChange={setName}
              value={name}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="image" className={classes.inputLabel}>
              Image url
            </label>
            <input
              type="url"
              id="image"
              className={classes.inputField}
              onChange={setImage}
              value={image}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="price" className={classes.inputLabel}>
              Price
            </label>
            <input
              type="number"
              id="price"
              className={classes.inputField}
              onChange={setPrice}
              value={price}
            />
          </div>
          <div className={classes.inputContainer}>
            <label htmlFor="description" className={classes.inputLabel}>
              Description
            </label>
            <textarea
              type="text"
              id="description"
              cols="40"
              rows="5"
              //   className={classes.inputField}
              onChange={setDescription}
              value={description}
            />
          </div>
          {isFormSubmitted && !isFormValid && (
            <span className={classes.formFeedback}>
              Please inter all field.
            </span>
          )}
          <div className={classes.btnContainer}>
            <button onClick={onSubmit} className={classes.btn}>
              submit
            </button>
            <button
              onClick={handelFormClose}
              className={`${classes.btn} ${classes.btnCancel}`}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProductForm;
