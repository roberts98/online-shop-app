import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/items';
import AddItemForm from './AddItemForm';
import getItem from '../selectors/items';

const AddItemPage = (props) => (
  <div>
    <AddItemForm
      onSubmit={(item) => {
        props.dispatch(addItem(item));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddItemPage);
