import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from '../reducers';

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const middlewares = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(rootReducer,
  /* preloadedState, */
  composeEnhancers(
  applyMiddleware(...middlewares),
));

export default store;
