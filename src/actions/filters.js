export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  category
});

export const sortByDateDESC = () => ({
  type: 'SORT_BY_DATE_DESC'
});

export const sortByDateASC = () => ({
  type: 'SORT_BY_DATE_ASC'
});

export const sortByPriceDESC = () => ({
  type: 'SORT_BY_PRICE_DESC'
});

export const sortByPriceASC = () => ({
  type: 'SORT_BY_PRICE_ASC'
});