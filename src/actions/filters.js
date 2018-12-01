export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  category
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByPrice = () => ({
  type: 'SORT_BY_PRICE'
});