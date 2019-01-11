/**
* @author Aman Shekhar <aman.s@photoninfotech.net>
* @version 1.0.2
* @summary Custom Checkbox component.
* @description A custom Checkbox component is being made. This component will be getting used wherever the Checkbox is required instead of creating a new one again and again.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity from 'react-native' for creating our view.
* @import Icon from "react-native-elements" to use font icons in this screen whereever required.
*/

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from "react-native-elements";

/**
* @import componentstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import componentstyles from "../../styles/componentStyles";

/**
* It is initializing the state with default Props properties.
* label: Represents the title of the CHeckBox.
* checked: It will check, whether the Checkbox is checked or not. 
*/

const defaultProps = {
    label: "Subscribe the Newsletter",
    checked: false
}


/**
* @class Checkbox
* @extends Component
* @summary Represents Custom Checkbox.
* @description This is a Custom Component for Checkbox. It extends react Component class for using the functions comes along with it.
*/

class Checkbox extends Component {
   
    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are making a view for the custom CheckBox.
    */

    render() {
        return (
            <View style={[componentstyles.checkboxContainer, this.props.style]}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Icon
                        name={this.props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
                        type="material-community"
                        color={this.props.iconColor}
                        size={this.props.iconSize}
                    />
                </TouchableOpacity>
                {this.props.labelComponent}
            </View>
        );
    }
}

Checkbox.defaultProps = defaultProps;

export default Checkbox;
