import { Provider } from 'react-redux';
import { createStore, compose, combineReducers } from 'redux';

import reducer from './reducer';

const composeEnhancers = process.env.NODE_ENV === 'development' ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) : compose;
/* eslint-enable */
const rootReducer = combineReducers({
  app: reducer
});
const store = createStore(rootReducer, composeEnhancers());

export {
  Provider,
  store
};