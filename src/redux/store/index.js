import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers";

// let middleware = [thunk, checkTokenExpiration];
let middleware = [thunk];

const handleUser = (store) => {
    const userState = store.getState().auth?.user
    console.log('user data .....', userState);
};

const reduxStore = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
    )
);


reduxStore.subscribe(() => handleUser(reduxStore));

export default reduxStore;
