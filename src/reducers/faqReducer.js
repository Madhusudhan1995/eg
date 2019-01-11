import {FAQ_DATA} from "../constants/action-types";

const initialState = {
    faqData: {},
    isLoggedin: false,
    token: "",
    authError: ""
};

export default (state = initialState, action) => {

  switch (action.type) {

      case FAQ_DATA:
            return {
                ...state,
                faqData: action.payload
            };

      default:
        return state;
  }
};
