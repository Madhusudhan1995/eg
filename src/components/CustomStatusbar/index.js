import {connect} from "react-redux";
import React, { Component } from "react";
import {StatusBar, Platform,StyleSheet, View} from "react-native";
import Globals from "../../constants/Globals";
import componentstyles from "../../styles/componentStyles";

let MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[componentstyles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

class CustomStatusbar extends Component {
  render() {
    let statusbarBackgroundColor = Globals.COLOR.STATUSBAR_WHITE;  
    let statusbarStyle = "dark-content";
    if(this.props.currentScene === "_home") {
        statusbarBackgroundColor = Globals.COLOR.STATUSBAR_BLUE;
        statusbarStyle = "light-content";
    } 
    if(!this.props.isAppInstalled) {
      return null;
    } else {
        return (
          Platform.OS === 'ios' ? <MyStatusBar backgroundColor={statusbarBackgroundColor} barStyle={statusbarStyle} /> : <StatusBar backgroundColor={statusbarBackgroundColor} barStyle={statusbarStyle} />        
        );
    } 
  }
}
const mapStateToProps = state => ({
    currentScene: state.utility.currentScene,
    isAppInstalled: state.onboarding.isAppInstalled
});

export default connect(mapStateToProps, null)(CustomStatusbar);
   
