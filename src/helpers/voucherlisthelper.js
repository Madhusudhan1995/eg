import {VOUCHER_LIST_DATA} from "../constants/action-types";
import api from "../services/appService";

import {persist} from "../../App";
import {setLoader} from "../actions";

export const handleVoucherListDataRequest = async (dispatch, token, url) => {
      try {
          const headers = {
              Authorization: token
          };
          persist.store.dispatch(setLoader(true));
          const response = await api(url, "GET", {}, headers);
          persist.store.dispatch(setLoader(false));
          if(response && response.status === 200) {
              const voucherList = await response.json();
              if(voucherList && voucherList.status === "SUCCESS") {
                    dispatch({
                        type: VOUCHER_LIST_DATA,
                        payload: voucherList.responseData,
                    });
              } else {
                  throw new Error("Unable to fetch voucher list");
              }
          } else {
                throw new Error("Unable to fetch voucher list");
          }
      } catch (e) {
          persist.store.dispatch(setLoader(false));
          console.log(e.message);
      }
}
