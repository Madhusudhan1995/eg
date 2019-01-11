import { WALLET_ADDCARD_URL} from "../constants/url-constants";
import {walletAddCardRequest} from "../helpers/walletHelper";

export const postWalletAddcard = (token, payload) => async (dispatch) => {

    walletAddCardRequest(dispatch, token, payload, WALLET_ADDCARD_URL);
}