import {LOADER, SET_SCREEN_NAME} from "../constants/action-types";
import { Actions } from 'react-native-router-flux';

export const setLoader = payload => ({type: LOADER, payload});

export const setCurrentScene = () => {
    return {
        type: SET_SCREEN_NAME,
        payload: Actions.currentScene
    }
}
