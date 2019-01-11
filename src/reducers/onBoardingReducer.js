import {APP_INSTALLED} from "../constants/action-types";

const initialState = {
  isAppInstalled: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case APP_INSTALLED:
        return {
            ...state,
            isAppInstalled: action.payload
        }

    default:
        return state;
  }
};
