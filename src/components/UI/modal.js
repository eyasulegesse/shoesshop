import { useContext } from 'react';
import Button from './button';
import Card from './card';
import classes from './modal.module.css';
import CartContext from '../../store/cart-context';

const Modal = (props) => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items;
  return (
    <Card>
      <div className={classes.modal}>
        {items.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <div className={classes.content}>
              <span>Amount</span>
              <span>{item.amount}</span>
            </div>
            <div className={classes.content}>
              <span>Price</span>
              <span>{item.price}</span>
            </div>
          </div>
        ))}

        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{cartCtx.totalAmount}</span>
        </div>
        <div className={classes.action}>
          <Button saveButton onClick={props.closeCart}>
            Okay
          </Button>
          <Button closeButton onClick={props.closeCart}>
            Close
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Modal;
