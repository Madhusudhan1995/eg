import {GET_STATIONS_URL} from "../constants/url-constants";
import {handleGettingStations} from "../helpers/stationhelpers";

export const handleGetStations = ()=> async (dispatch)=>{
    handleGettingStations(dispatch, GET_STATIONS_URL);
}
