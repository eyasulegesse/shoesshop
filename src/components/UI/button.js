import classes from './button.module.css';

const Button = (props) => {
  if (props.saveButton) {
    return (
      <button className={classes.saveButton} onClick={props.onClick}>
        {props.children}
      </button>
    );
  } else if (props.AddToCartButton) {
    return (
      <button className={classes.addToCartbutton}>{props.children}</button>
    );
  } else if (props.closeButton) {
    return (
      <button className={classes.addToCartbutton} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
};

export default Button;
