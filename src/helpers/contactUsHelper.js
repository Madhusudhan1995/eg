import api from "../services/appService";
import {CONTACTUS_DATA} from "../constants/action-types";

import {persist} from "../../App";
import {setLoader} from "../actions";

export const handleContactUsRequest = async (dispatch, token, url) => {
    try {
        const headers = {
            Authorization: token
        };
        persist.store.dispatch(setLoader(true));
        const response = await api(url, "GET", {}, headers);
        persist.store.dispatch(setLoader(false));
        if(response && response.status === 200) {
            const contactus = await response.json();
            if(contactus && contactus.status === "SUCCESS") {
                  dispatch({
                      type: CONTACTUS_DATA,
                      payload: contactus.responseData[0],
                  });
            } else {
                throw new Error("Unable to fetch contactus details");
            }
        } else {
              throw new Error("Unable to fetch contactus details");
        }
    } catch (e) {
        persist.store.dispatch(setLoader(false));
    }
}
