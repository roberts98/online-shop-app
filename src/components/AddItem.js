import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/items';
import ItemForm from './ItemForm';

const AddItemPage = (props) => (
  <div>
    <ItemForm
      onSubmit={(item) => {
        props.dispatch(addItem(item));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddItemPage);
