import React from 'react';
import MainItemList from './MainItemList';
import ItemListFilters from './ItemListFilters';

const DashboardPage = () => (
  <div>
    <ItemListFilters />
    <MainItemList />
  </div>
);

export default DashboardPage;
