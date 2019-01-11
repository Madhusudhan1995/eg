import {WEATHER_DATA} from "../constants/action-types";
import api from "../services/appService";

import {persist} from "../../App";
import {setLoader} from "../actions";


export const handleHomeDataRequest = async (dispatch, token, url, latitude, longitude) => {
    try {
        const headers = {
            Authorization: token
        };
        let fullUrl = url + "/" + latitude + "/" + longitude;
        persist.store.dispatch(setLoader(true));
        const response = await api(fullUrl, "GET", {}, headers);
        persist.store.dispatch(setLoader(false));
        if(response && response.status === 200) {
            const weather = await response.json();
            if(weather && weather.status === "SUCCESS") {
                  dispatch({
                      type: WEATHER_DATA,
                      payload: weather.responseData,
                  });
            } else {
                throw new Error("Unable to fetch Weather details");
            }
        } else {
              throw new Error("Unable to fetch Weather details");
        }
    } catch (e) {
        persist.store.dispatch(setLoader(false));
        console.log(e.message);
    }
}
