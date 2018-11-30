import React from 'react';
import ItemList from './ItemList';
import ItemListFilters from './ItemListFilters';

const DashboardPage = () => (
  <div>
    <ItemListFilters />
    <ItemList />
  </div>
);

export default DashboardPage;
