import {WEATHER_DATA} from "../constants/action-types";

const initialState = {
    weatherData: {
    },
    isLoggedin: false,
    token: "",
    authError: ""
};

export default (state = initialState, action) => {

  switch (action.type) {

      case WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload
            };

      default:
        return state;
  }
};
