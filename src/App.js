import './App.css';
import React, { useState } from 'react';
import Header from './components/Layout/header';
import HeaderImage from './components/Layout/headerImage';
import Shoes from './components/shoes/shoes';
import Modal from './components/UI/modal';
import CartProvider from './store/CartProvider';

function App() {
  const [isModalView, setIsModalView] = useState(false);
  const viewCartHandler = () => {
    setIsModalView(true);
  };
  const closeCartHandler = () => {
    setIsModalView(false);
  };
  return (
    <CartProvider>
      {isModalView && <Modal closeCart={closeCartHandler} />}

      <Header viewCart={viewCartHandler} closeCart={closeCartHandler} />
      <HeaderImage />

      <Shoes />
    </CartProvider>
  );
}

export default App;
