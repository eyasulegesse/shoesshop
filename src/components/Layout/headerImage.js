import headerImage from '../../assets/shoes.jpg';
import classes from './headerImage.module.css';
const HeaderImage = (props) => {
  return (
    <div className={classes.imageBackground}>
      <img src={headerImage} alt='headerimage' />
      <h1>We Have a quality Shoes</h1>
    </div>
  );
};

export default HeaderImage;
