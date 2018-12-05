import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

const OrdersPage = () => (
  <div className="container">
    <div className="sidebar">
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
          <ul className="list-group">
            <Link to="/dashboard/orders/bought">
              <li className="list-group-item active">Bought</li>
            </Link>
            <Link to="/dashboard/orders/favourite">
              <li className="list-group-item">Favourite</li>
            </Link>
          </ul>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
          <ShoppingCart />
        </div>
      </div>
    </div>
  </div>
);

export default OrdersPage;