import { WEATHER_DATA_URL} from "../constants/url-constants";
import {handleHomeDataRequest} from "../helpers/homeHelpers";

export const getHomeData = (token, latitude, longitude) => async (dispatch) => {
    handleHomeDataRequest(dispatch, token, WEATHER_DATA_URL, latitude, longitude);
}
