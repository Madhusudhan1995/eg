import {FAQ_DATA} from "../constants/action-types";
import api from "../services/appService";

import {persist} from "../../App";
import {setLoader} from "../actions";

export const handleFaqDataRequest = async (dispatch, token, url) => {
      try {
          const headers = {
              Authorization: token
          };
          persist.store.dispatch(setLoader(true));
          const response = await api(url, "GET", {}, headers);
          persist.store.dispatch(setLoader(false));
          if(response && response.status === 200) {
              const faq = await response.json();
              if(faq && faq.status === "SUCCESS") {
                    dispatch({
                        type: FAQ_DATA,
                        payload: faq.responseData,
                    });
              } else {
                  throw new Error("Unable to fetch faq details");
              }
          } else {
                throw new Error("Unable to fetch faq details");
          }
      } catch (e) {
          persist.store.dispatch(setLoader(false));
          console.log(e.message);
      }
}
