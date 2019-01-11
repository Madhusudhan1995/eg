import { CONTACTUS_URL } from "../constants/url-constants";
import {handleContactUsRequest} from "../helpers/contactUsHelper";

export const getConactUsData = token => async (dispatch) => {
    handleContactUsRequest(dispatch, token, CONTACTUS_URL);
}
