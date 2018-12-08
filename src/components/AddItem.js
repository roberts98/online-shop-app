import React from 'react';
import { connect } from 'react-redux';
import { startAddItem } from '../actions/items';
import ItemForm from './ItemForm';

const AddItemPage = (props) => (
  <div className="container">
    <h1 className="text-primary">Add new item</h1>
    <ItemForm
      onSubmit={(item) => {
        props.dispatch(startAddItem(item));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddItemPage);
