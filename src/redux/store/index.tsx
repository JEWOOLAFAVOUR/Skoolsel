import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

// let middleware = [thunk, checkTokenExpiration];
let middleware = [thunk];

const handleSearch = store => {
  const userState = store.getState().mid?.searchFilter;
  console.log('user search.....', userState);
};

const handlePost = store => {
  const postData = store.getState().mid?.productPost;
  console.log('product post.....', postData);
};

const reduxStore = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);

reduxStore.subscribe(() => handleSearch(reduxStore));
reduxStore.subscribe(() => handlePost(reduxStore));

export default reduxStore;
