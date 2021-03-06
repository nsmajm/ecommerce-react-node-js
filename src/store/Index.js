import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { logger } from 'redux-logger'
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      logger    
    ),
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  ),
);

export default store;
