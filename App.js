/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary Starting point of the application
*/

// import - npm modules
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import React, {Component} from "react";
import {Platform,NetInfo,Alert} from "react-native";
import SplashScreen from "react-native-splash-screen";
import PushNotification from "react-native-push-notification";

// import - custom classes
import Main from "./src/Main";
import store from "./src/config/store";

/**
* @returns {object}
*/
const persist = store();

/**
* Represents App.
* @class App
* @extends Component
*/
class App extends Component {
    constructor(props) {
        super(props);
    }

    /**
    * @function componentDidMount
    * React lifecycle method
    */
    componentDidMount() {
        this.netInfo();
        setTimeout(() => {
            /* istanbul ignore else */
            if (Platform.OS !== "ios") {
                SplashScreen.hide();
            }
        }, 2000);

        NetInfo.isConnected.addEventListener('connectionChange', this.handleFirstConnectivityChange);
    }

    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleFirstConnectivityChange);
    }
    netInfo = ()=>{
        var self = this;
        NetInfo.isConnected.fetch().then(isConnected => {
            if(isConnected){
                self.setState({internetConnected:true})
            }else{
                Alert.alert(
                    'No Internet Connection',
                    'Please connect to the internet and relaunch the app',
                    [
                      {text: 'Retry', onPress: () => this.netInfo()},
                    ],
                    { cancelable: false }
                  )
            }
            
          });
    }
    
    handleFirstConnectivityChange = (isConnected) => {
        if(!isConnected){
        Alert.alert(
            'No Internet Connection',
            'Please connect to the internet and relaunch the app',
            [
              {text: 'Retry', onPress: () => this.netInfo()},
            ],
            { cancelable: false }
          )
        }
    }

    render() {
        return (
            <Provider store={persist.store}>
                <PersistGate loading={null} persistor={persist.persistor}>
                    <Main />
                </PersistGate>
            </Provider>
        );
    }
}

export {App, persist};