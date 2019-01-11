import {AUTHENTICATE, LOGOUT, AUTH_ERROR, STORE_USER_DETAILS} from "../constants/action-types";

const initialState = {
    user: {},
    isLoggedin: false,
    token: "",
    authError: ""
};

export default (state = initialState, action) => {

  switch (action.type) {

      case AUTHENTICATE:
          return {
              ...state,
              token: action.token,
              isLoggedin: true
          };

      case STORE_USER_DETAILS:
            return {
                ...state,
                user: action.payload
            }

      case LOGOUT:
          return {
              ...state,
              token: "",
              isLoggedin: false
          };

      case AUTH_ERROR:
          return {
            ...state
          };
      default:
        return state;
  }
};