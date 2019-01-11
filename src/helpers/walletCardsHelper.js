import api from "../services/appService";
import {WALLET_CARDS} from "../constants/action-types";

import {persist} from "../../App";
import {setLoader} from "../actions";

export const handleWalletCardsRequest = async (dispatch, token, url) => {
    try {
        const headers = {
            Authorization: token
        };
        persist.store.dispatch(setLoader(true));
        const response = await api(url, "GET", {}, headers);
        persist.store.dispatch(setLoader(false));
        console.log(response.json());
        console.log(response.status);
        if(response && response.status === 200) {
            const walletCards = await response.json();
            if(walletCards && walletCards.status === "SUCCESS") {
                  dispatch({
                      type: WALLET_CARDS,
                      payload: walletCards.responseData,
                  });
            } else {
                throw new Error("Unable to fetch wallet cards");
            }
        } else {
              throw new Error("Unable to fetch wallet cards");
        }
    } catch (e) {
        persist.store.dispatch(setLoader(false));
        console.log(e.message);
    }
}

