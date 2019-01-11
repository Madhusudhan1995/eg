import { WALLETS_CARD_URL } from "../constants/url-constants";
import {handleWalletCardsRequest} from "../helpers/contactUsHelper";

export const getWalletCards = token => async (dispatch) => {
    handleWalletCardsRequest(dispatch, token, WALLETS_CARD_URL);
}
