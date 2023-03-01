import React from 'react';
import CartButton from '../UI/cartbutton';
import classes from './header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>Shoes Shop</h1>
      <CartButton viewCart={props.viewCart} />
    </header>
  );
};
export default Header;
