import React, { useReducer } from 'react';
import CartContext from './cart-context.js';

const deafaultValue = {
  totalAmount: 0,
  items: [],
};
const reducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedState = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedState,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === 'REMOVE') {
  }
  return deafaultValue;
};

const CartProvider = (props) => {
  const [cartState, cartDispatcher] = useReducer(reducer, deafaultValue);

  const addItemHandler = (item) => {
    cartDispatcher({ type: 'ADD', item: item });
  };
  const removeItemHandler = (id) => {
    dispatchEvent({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
