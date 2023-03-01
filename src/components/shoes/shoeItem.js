import React, { Fragment, useContext } from 'react';
import ShoesForm from './shoeForm';
import classes from './shoeItem.module.css';
import CartContext from '../../store/cart-context';
import Card from '../UI/card';

const ShoesItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      description: props.description,
      price: props.price,
    });
  };
  return (
    <Card>
      <li className={classes.listitem}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <p className={classes.price}>{price}</p>
          <ShoesForm onAddToCart={addCartHandler} />
        </div>
      </li>
    </Card>
  );
};
export default ShoesItem;
