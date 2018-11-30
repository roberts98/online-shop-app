import uuid from 'uuid';

export const addItem = ({ id = uuid(), name, description, price, createdAt, location }) => ({
  type: 'ADD_ITEM',
  item: {
    id,
    name,
    description,
    price,
    createdAt,
    location
  }
});

export const editItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates
});