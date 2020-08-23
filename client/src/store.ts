import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger'

const initialState = {};

const middleware = [thunk];

const logger = createLogger({
    // ...options
});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware), applyMiddleware(logger)),
);

export default store;
