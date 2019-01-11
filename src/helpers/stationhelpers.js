import {GET_STATIONS} from "../constants/action-types";
import api from "../services/appService";
import {persist} from "../../App";
import {setLoader} from "../actions";

export const handleGettingStations = async (dispatch, url)=>{
    try{
        persist.store.dispatch(setLoader(true));
        const response = await api(url,"GET");
        persist.store.dispatch(setLoader(false));
        if(response && response.status === 200){
            const stations = await response.json();
            if(stations && stations.status === "SUCCESS"){
                dispatch({
                    type: GET_STATIONS,
                    payload : stations.responseData
                });
            }
            else {
                throw new Error("Unable to fetch stations");
            } 
        }else {
            throw new Error("Unable to fetch stations");
        }
        }catch (e){
            persist.store.dispatch(setLoader(false));
        }
    }