import {GET_STATIONS} from "../constants/action-types";

const initialState = {
    allStations: {
    },
};

export default (state = initialState, action) => {

  switch (action.type) {

      case GET_STATIONS:
            return {
                ...state,
                allStations: action.payload
            };

      default:
        return state;
  }
};
//
