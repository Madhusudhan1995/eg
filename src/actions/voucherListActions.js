import { VOUCHER_LIST_URL } from "../constants/url-constants";
import { handleVoucherListDataRequest } from "../helpers/voucherlisthelper";

export const getVoucherListData = token => async (dispatch) => {
    handleVoucherListDataRequest(dispatch, token, VOUCHER_LIST_URL);
}
