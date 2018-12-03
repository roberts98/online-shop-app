import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <Link to="/create">Add new item </Link>
    <Link to="/cart">Go to cart</Link>
  </div>
);

export default Navbar;