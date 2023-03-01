import classes from './cartbutton.module.css';
import cartImage from '../../assets/cart.png';
import CartContext from '../../store/cart-context';
import React, { useContext } from 'react';
const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.viewCart}>
      <span className={classes.icon}>
        <img src={cartImage} width='40px' alt='img' />
      </span>
      <span className={classes.carttitle}>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default CartButton;
