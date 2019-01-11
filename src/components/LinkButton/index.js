/**
* @author Aman Shekhar <aman.s@photoninfotech.net>
* @version 1.0.2
* @summary Custom CardItem component.
* @description A custom buttopn component is being made so that it can be used everywhere..
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity creating our view.
* @import Icon from "react-native-vector-icons/FontAwesome" to use font icons in this screen whereever required.
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

/**
* @import componentstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import componentstyles from "../../styles/componentStyles";

const defaultProps = {
    title: "Button",
    onPress: () => {},
    color: "#333333",
    disabled: false,
    iconPath: "",
    containerStyle: {},
    iconStyle: {},
    style: {}
}
/**
* Represents ExpandCollapseView.
* @class ExpandCollapseView
* @extends Component
*/
class LinkButton extends Component {

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
          <TouchableOpacity style={this.props.containerStyle} onPress={this.props.onPress} disabled={this.props.disabled}>
              {this.props.iconPath.length !=0 && <Image source={this.props.iconPath} style={this.props.iconStyle} resizeMode="contain" />}
              <Text
                  style={[componentstyles.buttonTitle, {color: this.props.color}, this.props.style]}>
                  {this.props.title}
              </Text>
          </TouchableOpacity>
        );
    }
}

LinkButton.defaultProps = defaultProps;

export default LinkButton;
