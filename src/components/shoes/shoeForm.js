import React, { useRef } from 'react';
import classes from './shoesForm.module.css';
import Button from '../UI/button';
import Input from '../UI/input';
const ShoesForm = (props) => {
  const amoutRefValue = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amoutRefValue.current.value;
    const enteredAmountNumber = +enteredAmount;
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        ref={amoutRefValue}
        input={{
          id: 'amount',
          type: 'number',
          max: '5',
          min: '1',
          defaultValue: '0',
        }}
      />
      <Button AddToCartButton>
        <span>+</span>Add to Cart
      </Button>
    </form>
  );
};
export default ShoesForm;
