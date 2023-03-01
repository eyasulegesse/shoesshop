import { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addCart: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
