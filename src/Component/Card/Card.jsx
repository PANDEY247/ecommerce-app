import './Card.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/product/${item.id}`} className="card-link">
        <div className="image-container">
          <img src={item.img} alt="" className="mainImg" />
        </div>
        <div className="card-content">
          <h3 className="title">{item.title}</h3>
          <p className="price">Price: ${item.price}</p>
          {item.isNew && <span className="new-tag">New</span>}
          <span className="old-price">Old Price: ${item.oldPrice}</span>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
    oldPrice: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;
