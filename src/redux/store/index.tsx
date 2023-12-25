import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from '../middleware/ApiCalls';

import rootReducer from '../reducers';
import {checkTokenExpiration} from '../reducers/midToken';

// let middleware = [thunk, checkTokenExpiration];
let middleware = [thunk];

const handleSearch = store => {
  const userState = store.getState().mid?.searchFilter;
  console.log('user search.....', userState);
};

const reduxStore = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);

reduxStore.subscribe(() => handleSearch(reduxStore));

export default reduxStore;
