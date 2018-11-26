export const addItem = ({ name, description, price, createdAt, location }) => ({
  type: 'ADD_ITEM',
  item: {
    name,
    description,
    price,
    createdAt,
    location
  }
});