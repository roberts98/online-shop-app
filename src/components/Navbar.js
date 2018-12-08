import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="container">
    <div className="dashboard-navbar">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/dashboard/orders/bought" className="nav-link">Orders</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/sellings/sold" className="nav-link">Sellings</Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-link">Account</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;