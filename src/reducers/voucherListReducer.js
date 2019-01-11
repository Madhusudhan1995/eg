import {VOUCHER_LIST_DATA} from "../constants/action-types";

const initialState = {
    voucherListData: {},
    isLoggedin: false,
    token: "",
    authError: ""
};

export default (state = initialState, action) => {

  switch (action.type) {

      case VOUCHER_LIST_DATA:
            return {
                ...state,
                voucherListData: action.payload
            };

      default:
        return state;
  }
};
