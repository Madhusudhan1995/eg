import { FAQ_DATA_URL} from "../constants/url-constants";
import {handleFaqDataRequest} from "../helpers/faqhelper";

export const getFaqData = token => async (dispatch) => {
    handleFaqDataRequest(dispatch, token, FAQ_DATA_URL);
}
