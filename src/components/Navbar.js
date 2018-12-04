import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="container">
    <Link to="/create">Add new item </Link>
    <Link to="/cart">Go to cart</Link>
    <Link to="/my-items">My items</Link>
  </div>
);

export default Navbar;