import {CONTACTUS_DATA} from "../constants/action-types";

const initialState = {
    contactusData: {},
    isLoggedin: false,
    token: "",
    authError: ""
};

export default (state = initialState, action) => {

  switch (action.type) {

      case CONTACTUS_DATA:
            return {
                ...state,
                contactusData: action.payload
            };

      default:
        return state;
  }
};
