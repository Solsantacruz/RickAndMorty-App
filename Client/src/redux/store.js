// import {createStore, applyMiddleware} from "redux";
// import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension";
// import rootReducer from "./reducer";

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );




// import { createStore } from "redux";
// import rootReducer from './reducer';

// const store = createStore(
//     rootReducer,
// );


// export default store;

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware),
);

export default store;