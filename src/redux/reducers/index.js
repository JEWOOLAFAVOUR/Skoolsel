import { persistCombineReducers } from "redux-persist";
import constants from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authReducer from "./authReducer";
import quizReducer from "./quiReducer";

const config = {
    key: constants.asyncStorageKey,
    storage: AsyncStorage,
    blacklist: ['quiz']
}


const appReducer = persistCombineReducers(config, {
    auth: authReducer,
    quiz: quizReducer,
});


const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;