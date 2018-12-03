import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setCategory, sortByDateASC, sortByDateDESC, sortByPriceASC, sortByPriceDESC } from '../actions/filters';

const ItemListFilters = (props) => (
  <div>
    <input
      type="text"
      placeholder="search"
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    >
    </input>
    <select
      value={props.filters.category}
      onChange={(e) => {
        props.dispatch(setCategory(e.target.value));
      }}
    >
      <option value="all">All</option>
      <option value="clothes">Clothes</option>
      <option value="electronics">Electronics</option>
      <option value="others">Others</option>
    </select>

    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date-desc') {
          props.dispatch(sortByDateDESC());
        } else if (e.target.value === 'date-asc') {
          props.dispatch(sortByDateASC());
        } else if (e.target.value === 'price-desc') {
          props.dispatch(sortByPriceDESC());
        } else if (e.target.value === 'price-asc') {
          props.dispatch(sortByPriceASC());
        }
      }}
    >
      <option value="date-desc">Newest</option>
      <option value="date-asc">Oldest</option>
      <option value="price-desc">Highest price</option>
      <option value="price-asc">Lowest price</option>
    </select>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ItemListFilters);