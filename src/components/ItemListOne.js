import React from 'react';

const ItemListOne = ({ name, description, price, createdAt, location }) => (
  <div>
    <h2>{name}</h2>
    <p><em>{price}</em> - {location}</p>
    <p>{description}</p>
  </div>
);

export default ItemListOne;