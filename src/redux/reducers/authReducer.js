import { UPDATE_ONBOARDING_STATUS, UPDATE_USER_LOGIN, UPDATE_USER_ACCESS_TOKEN, LOGOUT_USER, UPDATE_USER_REFRESH_TOKEN, UPDATE_LOGGED_IN_STATUS, UPDATE_USER_PROFILE, UPDATE_GREETING } from "../constants/constants";
import { UPDATE_USER_BIO, UPDATE_USER_LEVEL_BIO_GENDER } from "../constants/constants";

const initialState = {
    isOnboardingDisabled: false,
    isLoggedIn: false,
    user: {},
    accessToken: "",
}



const authReducer = (state = initialState, action) => {
    const { status, type, isLoggedIn, user, accessToken, refreshToken } = action;

    switch (type) {
        case UPDATE_ONBOARDING_STATUS:
            return {
                ...state, isOnboardingDisabled: status
            };

        case UPDATE_USER_LOGIN:
            return {
                ...state, user, isLoggedIn
            };
        case UPDATE_LOGGED_IN_STATUS:
            return {
                ...state, isLoggedIn
            };

        case UPDATE_USER_ACCESS_TOKEN:
            return {
                ...state, accessToken
            };
        case LOGOUT_USER:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                accessToken: "",
            };
        default:
            return state;
    }
}

export default authReducer;