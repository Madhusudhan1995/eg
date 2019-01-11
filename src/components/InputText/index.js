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
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Icon } from "react-native-elements";

/**
* @import componentstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import componentstyles from "../../styles/componentStyles";

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    value: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    returnKeyType: "next",
    label: "Label",
    style: {},
    isPassword: false,
    onIconPress: () => {}
}
/**
* Represents ExpandCollapseView.
* @class ExpandCollapseView
* @extends Component
*/
class InputText extends Component {

    constructor(props) {
        super(props);
        this.mapElement = this.mapElement.bind(this);
    }

    mapElement(node) {
        this.props.mapElement(node);
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={[componentstyles.textInputContainer, this.props.style]}>
                <Text style={componentstyles.textInputLabel}>{this.props.label}</Text>
                <TextInput
                    style={componentstyles.textInputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="rgba(51, 51, 51, 0.6)"
                    selectionColor= "rgb(51, 51, 51)"
                    returnKeyType={this.props.returnKeyType}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType= {this.props.keyboardType}
                    maxLength= {this.props.maxLength}
                    value= {this.props.value}
                    onChangeText= {this.props.onChangeText} />
                {this.props.isPassword &&
                  <View style={componentstyles.passwordEyeIconCont}>
                      <TouchableOpacity onPress={this.props.onIconPress}>
                      <Image source={this.props.secureTextEntry ? require('../../assets/images/signup/Hidepassword.png') : require('../../assets/images/signup/Showpassword.png')} />
                       </TouchableOpacity>
                    </View>

                }
            </View>
        );
    }
}

InputText.defaultProps = defaultProps;

export default InputText;
