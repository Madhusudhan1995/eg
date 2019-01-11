/**
 * @author Vineet Mishra <vineet.m@photoninfotech.net>
 * @version 1.0.0
 */

// import - npm modules
import React, { Component } from "react";
import {
  Text,
  View,
  Platform
} from "react-native";
import { Icon } from "react-native-elements";
import { LinkButton } from "../index";

// import - Styles
import componentstyles from "../../styles/componentStyles";

const defaultProps = {
  style: {},
  iconName: "",
  rightIconName: "",
  rightButtonName: ""
};

/**
 * Represents Toolbar.
 * @class Toolbar
 * @extends Component
 */
class Toolbar extends Component<{}> {
  constructor(props) {
    super(props);
    this.getTypedIcon = this.getTypedIcon.bind(this);
    this.getSizeIcon = this.getSizeIcon.bind(this);
    this.getColorIcon = this.getColorIcon.bind(this);
  }

  getTypedIcon(iconName) {
    switch (iconName) {
      case "back-arrow":
        if (Platform.OS === "ios") {
          return "chevron-left";
        } else {
          return "arrow-left";
        }
      case "plus":
        return "plus";
      case "loginpage":
        return "arrow-left";
      default:
        return "chevron-left";
    }
  }

  getSizeIcon() {
    return Platform.OS === "ios" ? 24 : 24;
  }

  getColorIcon() {
    return "rgb(51, 51, 51)";
  }

  /**
   * @function render
   * React render method for rendering the native elements
   */

  render() {
    return (
      <View style={[componentstyles.toolbarContainer, this.props.style]}>
        {this.props.iconName.length > 0 && (
          <View style={componentstyles.toolbarIconCont}>
            <Icon
              name={this.getTypedIcon(this.props.iconName)}
              size={this.getSizeIcon()}
              color={this.getColorIcon()}
              type="material-community"
              onPress={this.props.onClickLeftIcon}
              iconStyle={componentstyles.leftIconContainer}
            />
          </View>
        )}
        <View style={componentstyles.toolbarUtils}>
          <Text style={componentstyles.appTitle}>{this.props.title}</Text>
        </View>
        {this.props.rightIconName.length > 0 && (
          <View style={componentstyles.toolbarRightIconCont}>
            <Icon
              name={this.getTypedIcon(this.props.rightIconName)}
              size={this.getSizeIcon()}
              color={this.getColorIcon()}
              type="material-community"
              onPress={this.props.onClickRightIcon}
              iconStyle={componentstyles.leftIconContainer}
            />
          </View>
        )}
        {this.props.rightButtonName.length > 0 && (
          <View style={componentstyles.toolbarRightButtonCont}>
            <LinkButton
              onPress={this.props.onRightButtonPress}
              title={this.props.rightButtonName}
              color="rgb(51, 51, 51)"
            />
          </View>
        )}
      </View>
    );
  }
}

Toolbar.defaultProps = defaultProps;

export default Toolbar;
