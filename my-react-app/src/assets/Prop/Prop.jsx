import PropTypes from 'prop-types';
import './Prop.css';

const Card = (props) => {
  return (
    <div className='card'>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Programmer: {props.isProgrammer ? 'Yes' : 'No'}</p>
    </div>
  );
};

Card.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isProgrammer: PropTypes.bool,
};

Card.defaultProps = {
  name: 'Guest',
  age: 0,
  isProgrammer: false,
};

export default Card;
