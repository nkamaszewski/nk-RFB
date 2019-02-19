import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };
  render() {
    const {
      addToOrder,
      details: { image, name, price, desc, status }
    } = this.props;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={addToOrder} disabled={!isAvailable}>
          {isAvailable ? 'Add to Order' : 'Sold out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
