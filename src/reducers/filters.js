const defaultState = {
  text: '',
  category: 'all'
};

const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.category
      }
    default:
      return state;
  };
};

export default filtersReducer;