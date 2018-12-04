import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ItemListSingle = ({ id, name, description, price, createdAt, photo, location }) => (
  <div className="item">
      <img src={photo} className="item__photo" alt="photo" />
    <Link className="item__title" to={`items/${id}`}>
      <h2>{name}</h2>
    </Link>
    <p><em>{price}</em> - {location}</p>
    <p>{moment(createdAt).fromNow()}</p>
    <p>{description}</p>
  </div>
);

export default ItemListSingle;