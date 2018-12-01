import React from 'react';
import { connect } from 'react-redux';
import { startAddItem } from '../actions/items';
import ItemForm from './ItemForm';

const AddItemPage = (props) => (
  <div>
    <ItemForm
      onSubmit={(item) => {
        props.dispatch(startAddItem(item));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddItemPage);
