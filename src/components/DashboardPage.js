import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';
import ItemListFilters from './ItemListFilters';

const DashboardPage = () => (
  <div>
    <Link to="/card">Go to Card</Link>
    <ItemListFilters />
    <ItemList />
  </div>
);

export default DashboardPage;
