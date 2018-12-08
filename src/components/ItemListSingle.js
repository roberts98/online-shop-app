import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ItemListSingle = ({ id, name, price, createdAt, photo, location, stateOfItem, typeOfSale }) => (
  <Link to={`/items/${id}`}>
    <div className="row pb-2 py-3 my-0 item">
      <div className="col-sm-3">
        <img src={photo} className="img-fluid" alt="photo" />
      </div>
      <div className="col-sm-6">
        <h5 className="text-dark mb-0">{name}</h5>
        <h6 className="text-seconday mt-0">Location - {location}, Condition - {stateOfItem}</h6>
        <h3 className="text-info">{price} PLN</h3>
        <h6 className="text-danger">{typeOfSale === 'buyNow' ? 'Buy Now' : 'Auction'}</h6>
      </div>
      <div className="col-sm-3 align-self-end justify-self-end">
        <p>{moment(createdAt).fromNow()}</p>
      </div>
    </div>
  </Link>
);

export default ItemListSingle;