/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.2
* @summary Main Screen for the application.
* @description This is the Main Screen of the application.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import StatusBar, View from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import AccessToken, GraphRequest, GraphRequestManager, LoginManager from react-native-fbsdk, for Facebook
*/

import { connect } from "react-redux";
import React, { Component } from "react";
import {View, BackHandler} from "react-native";
import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk';
import { Actions } from 'react-native-router-flux';

/**
* @import Routes, Loader from components.
*/
import { Routes, Loader, CustomStatusbar } from "./components";

/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "./styles";

/**
* @class Main
* @extends Component
* @summary Represents Main class.
* @description This is a Main class. It extends react Component class for using the functions comes along with it.
*/
class Main extends Component {

  constructor(props) {
      super(props);
      this.state = {
          currentScene: ""
      }
  }

  /**
   * @function componentDidMount,
   */
  componentDidMount() {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        const infoRequest = new GraphRequest(
          '/me',
          {
            accessToken: data.accessToken || "",
            parameters: {
              fields: {
                string: 'email,name,first_name,middle_name,last_name,picture,id'
              }
            }
          },
          this.responseInfoCallback
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start();
      });

      // BackHandler.addEventListener('hardwareBackPress', function() {

      // });
  }

  infoRequestNew(accessToken) {
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken: accessToken,
        parameters: {
          fields: {
            string: 'email,name,first_name,middle_name,last_name,picture,id'
          }
        }
      },
      this.responseInfoCallback
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  /**
  * @function render: Its one of the main functions of react component. It renders the JSX on the screen
  * In render() we are showing the Status Bar with backgroundColor as white.
  */
  render() {
    return (
      <View style={styles.appContainer}>
        <CustomStatusbar />
        <Routes isLoggedin={this.props.isLoggedin} isAppInstalled={this.props.isAppInstalled} />
        <Loader />
      </View>
    );
  }
}

/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/

const mapStateToProps = state => ({
  isLoggedin: state.auth.isLoggedin,
  isAppInstalled: state.onboarding.isAppInstalled
});

/**
* Converting functions to props for the Login component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = () => ({});

/**
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(Main);
