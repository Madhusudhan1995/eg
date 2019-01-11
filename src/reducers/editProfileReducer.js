import {EDITPROFILE_DATA} from "../constants/action-types";

const initialState = {
    editprofileData: {},
    isLoggedin: false,
    token: "",
    authError: ""
};

export default (state = initialState, action) => {

  switch (action.type) {

      case EDITPROFILE_DATA:
            return {
                ...state,
                editprofileData: action.payload
            };

      default:
        return state;
  }
};
