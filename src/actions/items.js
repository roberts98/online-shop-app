import uuid from 'uuid';

export const addItem = ({ id = uuid(), name, description, category, price, createdAt, photo, location, isBought = false }) => ({
  type: 'ADD_ITEM',
  item: {
    id,
    name,
    category,
    description,
    price,
    createdAt,
    photo,
    location,
    isBought
  }
});

export const editItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates
});

export const buyItem = (id) => ({
  type: 'BUY_ITEM',
  id
});