import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import itemsReducer from '../reducers/items';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      items: itemsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
