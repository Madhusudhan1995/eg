import {redirectTo, navigateTo} from "./index";
import {AUTHENTICATE, AUTH_ERROR, LOGOUT, STORE_USER_DETAILS} from "../constants/action-types";
import api from "../services/appService";
import {Alert } from 'react-native';

import {persist} from "../../App";
import {setLoader} from "../actions";

export const handleRegisterUser = async (dispatch, payload, url) => {
    try {
        persist.store.dispatch(setLoader(true));
        const response = await api(url, "POST", payload);
       /* istanbul ignore if  */
        if (response.status === 200) {
            const user = await response.json();
            /* istanbul ignore if  */
            if (user) {
                persist.store.dispatch(setLoader(false));
                navigateTo("login");
                Alert.alert(
                    "",
                    "Thank you for signing up. You will receive an email shortly with a link to confirm your email address"
                );
            /* istanbul ignore else  */
            } else {
                throw new Error("Error. Please try again");
            }
            /* istanbul ignore else  */
        } else {
            throw new Error(JSON.parse(response._bodyInit).message);
        }
    } catch (e) {
        persist.store.dispatch(setLoader(false));
        Alert.alert(e.message);
        dispatch({
            type: AUTH_ERROR
        });
    }
}

export const authenticateUser = async (dispatch, payload, url) => {
    try {
        persist.store.dispatch(setLoader(true));
        const response = await api(url, "POST", payload);
        /* istanbul ignore if  */
        if (response.status === 200 && response.headers.get("authorization")) {
        //  console.log(response);
              const token = response.headers.get("authorization");
              persist.store.dispatch(setLoader(false));
              dispatch({
                  type: AUTHENTICATE,
                  token
              });
              redirectTo("app");
        /* istanbul ignore else  */
        } else {
            throw new Error("Please enter a valid email address or password");
        }
    } catch (e) {
        persist.store.dispatch(setLoader(false));
        Alert.alert(e.message);
        dispatch({
            type: AUTH_ERROR
        });
    }
}

export const handleUserLogout = (dispatch, payload, url) => {
    dispatch({
        type: LOGOUT
    });
    redirectTo("auth");
}

export const handleUserDetailsRequest = async (dispatch, token, USER_DETAILS_URL) => {
      try {
          const headers = {
              Authorization: token
          };
          persist.store.dispatch(setLoader(true));
          const response = await api(USER_DETAILS_URL, "GET", {}, headers);
          persist.store.dispatch(setLoader(false));
          if(response && response.status === 200) {
              const user = await response.json();
              if(user && user.status === "SUCCESS") {
                    dispatch({
                        type: STORE_USER_DETAILS,
                        payload: user.responseData
                    });
              } else {
                  throw new Error("Unable to fetch user details");
              }
          } else {
                throw new Error("Unable to fetch user details");
          }
      } catch (e) {
          persist.store.dispatch(setLoader(false));
      }
}

