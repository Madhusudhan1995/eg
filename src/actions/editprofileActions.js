
import { EDITPROFILE_URL} from "../constants/url-constants";
import {updateEditProfileRequest} from "../helpers/editProfileHelper";

export const postEditProfile = (token, payload) => async (dispatch) => {

    updateEditProfileRequest(dispatch, token, payload, EDITPROFILE_URL);
}