import {WALLET_ADDCARD_DATA} from "../constants/action-types";
import api from "../services/appService";
import {Alert } from 'react-native';
import {persist} from "../../App";
import {setLoader} from "../actions";
import {redirectTo, navigateTo} from "./index";

export const walletAddCardRequest = async (dispatch, token, payload, url) => {
      try {
         
          persist.store.dispatch(setLoader(true));
          const headers = {Authorization: token}
          const response = await api(url, "POST", payload, headers);
          console.log("wallet add card ", response);
          persist.store.dispatch(setLoader(false));
          if (response.status === 200) {
              const user = await response.json();
              if (user) {
                  persist.store.dispatch(setLoader(false));
                  Alert.alert(
                      "",
                      "Your card added successfully."
                  );
                    navigateTo("wallet");
              } else {
                  throw new Error("Error. Please try again");
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
  