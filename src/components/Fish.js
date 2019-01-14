import React, { Component } from 'react';

import { formatPrice } from '../helpers';

class Fish extends Component {
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
