import Card from '../UI/card';
import ShoesItem from './shoeItem';
import classes from './shoesList.module.css';
const ShoesList = (props) => {
  return (
    <div className='container'>
      <h1>Shoes List</h1>
      <ul className={classes.list}>
        {props.items.map((item) => (
          <ShoesItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};
export default ShoesList;
