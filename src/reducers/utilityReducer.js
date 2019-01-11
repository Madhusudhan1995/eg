import {INIT, LOADER, SET_SCREEN_NAME} from "../constants/action-types";

var initialState = {
    loader: false,
    currentScene: "_home"
}

export default (state = initialState, action) => {

    switch (action.type) {

        case INIT:
            return initialState

        case LOADER:
            return {
                ...state,
                loader: action.payload
            }

        case SET_SCREEN_NAME:
            return {
                ...state,
                currentScene: action.payload
            }

        default:
            return state;
    }

}
