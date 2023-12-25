import {persistCombineReducers} from 'redux-persist';
import constants from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from './authReducer';
import midReducer from './midReducer';

const config = {
  key: constants.asyncStorageKey,
  storage: AsyncStorage,
  blacklist: ['mid'],
};

const appReducer = persistCombineReducers(config, {
  auth: authReducer,
  mid: midReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
