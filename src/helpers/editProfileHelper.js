import {EDITPROFILE_DATA} from "../constants/action-types";
import api from "../services/appService";
import {Alert } from 'react-native';
import {persist} from "../../App";
import {setLoader} from "../actions";
import {redirectTo, navigateTo} from "./index";

export const updateEditProfileRequest = async (dispatch, token, payload, url) => {
      try {
         
          persist.store.dispatch(setLoader(true));
          const headers = {Authorization: token}
          const response = await api(url, "PUT", payload, headers);
          console.log("profile update ", response);
          persist.store.dispatch(setLoader(false));
          if (response.status === 200) {
              const user = await response.json();
              if (user) {
                  persist.store.dispatch(setLoader(false));
                  Alert.alert(
                      "",
                      "Changes to your profile has been successfully updated"
                  );
                    navigateTo("settings");
              } else {
                  throw new Error("Please enter a valid input for all the fields");
              }
          } else {
              //throw new Error("Your email is already registered with us. Please Login to continue");
          }
      } catch (e) {
          persist.store.dispatch(setLoader(false));
          Alert.alert(e.message);
          dispatch({
              type: AUTH_ERROR
          });
      }
  }


