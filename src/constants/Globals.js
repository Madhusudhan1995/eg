/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/
/**
* Constants class for global values through app.
*/
import {Alert, Platform, PermissionsAndroid, DeviceEventEmitter} from "react-native";
import { navigateTo} from "../helpers";

export default {
    TEXT: {
        LOGIN: 'Join Now',
        REGISTER: 'Register',
    },
    EVENT: {
        STATUSBAR_COLOR_CHANGE: 'statusBarColorChange',
        ON_LOCATION_CHANGED: 'onLocationChanged',
    },
    COLOR: {
      TRANSPARENT: '#00000000',
      ORANGE: '#C50',
      DARKBLUE: '#0F3274',
      LIGHTBLUE: '#6EA8DA',
      DARKGRAY: '#999',
      STATUSBAR_BLUE : '#0f71b8',
      STATUSBAR_WHITE : '#FFFFFF',
    },
  };

   /**
            * @function deleteCreditCardFunction
            * this function is for deleting the card
    */

    // eslint-disable-next-line class-methods-use-this

    export const deleteCardFunction =(screenName) => {
      Alert.alert(
        "Remove Card!",
        "Please confirm if you want to delete the card. If you remove the card, the card cannot be used for payments via mobile",
        [
          {
            text: "Cancel",
            onPress: () => {},
            style: "cancel"
          },
          {
            text: "Confirm",
            onPress: () => {
              navigateTo(screenName);
            }
       
          }
        ],
        {cancelable: false}
      );
  
  };
  
  /**
      * @function navigateToManualEntry: It gets called when user presses the icon 
      * It will navigate through the respected screen.
      */
     // eslint-disable-next-line class-methods-use-this
    export const navigateToManualEntry =(screenName) => {
      navigateTo(screenName);
   }
   
  export const deleteCrdeitCardFunction =() => {
    deleteCardFunction("creditDebitCards");
  }

  export const deleteGoFuelCardFunction =() => {
    deleteCardFunction("goFuelCard");
  }

  export const navigateToGoFuleCardManualEntry =() => {
    navigateToManualEntry("goFuelCardAddManually");
 }

 export const navigateToCreditCardManualEntry =() => {
    navigateToManualEntry("cardAddManual");
}

export const closeGeoLocation = () => {
  navigator.geolocation.clearWatch(this.watchID);
}

export const onRegionChange = (region, lastLat, lastLong) => {
  DeviceEventEmitter.emit('onLocationChanged', {region, lastLat, lastLong});
}

export const getCurrentLocation = () => {
  this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      onRegionChange(region, region.latitude, region.longitude);
    }, (error)=>console.log(error));
 }

export const checkLocationPermission = async () => {
  try {
      closeGeoLocation();
      if(Platform.OS !== 'ios') {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
      }
      else {
          alert("Please grant location permission to access EG")
      }
  } else {
      getCurrentLocation();
  }
  }
  catch (err) {
      console.log(err)
  }
 }

export const removeOnLocationChangedListener = () => {
  DeviceEventEmitter.removeListener('onLocationChanged', (data) => {
      //Listener will be removed
 });
}

