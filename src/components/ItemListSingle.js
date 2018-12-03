import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ItemListSingle = ({ id, name, description, price, createdAt, photo, location }) => (
  <div>
    <Link to={`items/${id}`}><h2>{name}</h2></Link>
    <p><em>{price}</em> - {location}</p>
    <p>{moment(createdAt).fromNow()}</p>
    <img src={photo} alt="photo" />
    <p>{description}</p>
  </div>
);

export default ItemListSingle;