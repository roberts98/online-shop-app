import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, setCategory } from '../actions/filters';

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
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ItemListFilters);