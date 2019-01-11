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
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
* Represents Phone.
* @class Phone
* @extends Component
*/
class Phone extends Component {
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
                <View style={{flexDirection: "row"}}>
                    <TextInput
                        style={[componentstyles.textInputBox, {width: "12%"}]}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholderTextColor="rgba(51, 51, 51, 0.6)"
                        selectionColor= "rgb(51, 51, 51)"
                        returnKeyType={this.props.returnKeyType}
                        secureTextEntry={this.props.secureTextEntry}
                        keyboardType= {this.props.keyboardType}
                        maxLength= {this.props.maxLength}
                        value="+31"
                        onChangeText= {this.props.onChangeText} />
                    <View style={{marginTop: 15, height: 25, borderRightWidth: 1, borderColor: "rgba(51, 51, 51, 0.6)"}}></View>
                    <TextInput
                        style={[componentstyles.textInputBox, {width: "88%", paddingLeft: 16}]}
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
                </View>
            </View>
        );
    }
}

Phone.defaultProps = defaultProps;

export default Phone;
