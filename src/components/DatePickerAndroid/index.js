/**
* @author Aman Shekhar <aman.s@photoninfotech.net>
* @version 1.0.2
* @summary Custom DatePicker component for Android.
* @description A custom component of DatePicker for Android is being made. This component will be getting used wherever the DatePicker is required instead of creating a new one again and again.
*/


/**
* @import React component from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity from 'react-native' for creating our view.
* @import Icon from "react-native-elements" to use font icons in this screen whereever required.
*/

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, DatePickerAndroid, TouchableWithoutFeedback } from 'react-native';
import { Icon } from "react-native-elements";

/**
* @import componentstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import componentstyles from "../../styles/componentStyles";


/**
* It is initializing the state with default Props properties.
* mapElement: 
* onSubmitEditing: Submitting the selected Date.
* value:  The Value of the Date.
* placeholder: It will show the placeholder for the DatePicker
* maxLength: Max length is defined as 200
* keyboardType: 
* secureTextEntry: 
* returnKeyType: 
* label: Defines the label of the DatePicker of Android.
* style: 
* openDatePicker: 
*/

const defaultProps = {
    mapElement: (n) => { },
    onSubmitEditing: () => { },
    value: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    returnKeyType: "next",
    label: "Label",
    style: {},
    openDatePicker: () => { }
}


/**
* @class DatePicker
* @extends Component
* @summary Represents Custom DatePicker.
* @description This is a Custom Component for DatePicker. It extends react Component class for using the functions comes along with it.
*/

class DatePicker extends Component {

    /**
    * @constructor It is initializing the state with default properties.
    * openDatePicker: It is handling the date picker. 
    * mapElement: 
    */
    constructor(props) {
        super(props);
        this.openDatePicker = this.openDatePicker.bind(this);
        this.mapElement = this.mapElement.bind(this);
    }

    mapElement(node) {
        this.datePicker = node;
    }

    async openDatePicker() {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(this.props.value)
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                this.props.onChangeDate(`${day}/${month + 1}/${year}`);
                this.datePicker.blur();
            } else if (action === DatePickerAndroid.dismissedAction) {
                this.datePicker.blur();
            }
        } catch ({ code, message }) {
        }
    }

    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are making a view for the custom CardItem.
    */

    render() {
        return (
            <View style={[componentstyles.textInputContainer, this.props.style]}>
                <TouchableWithoutFeedback onPress={this.openDatePicker}>
                    <View>
                        <Text style={componentstyles.textInputLabel}>{this.props.label}</Text>
                        <TextInput
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="rgba(51, 51, 51, 0.6)"
                            selectionColor="rgb(51, 51, 51)"
                            style={componentstyles.textInputBox}
                            ref={this.mapElement}
                            returnKeyType={this.props.returnKeyType}
                            placeholder={this.props.placeholder}
                            secureTextEntry={this.props.secureTextEntry}
                            keyboardType={this.props.keyboardType}
                            maxLength={this.props.maxLength}
                            value={this.props.value}
                            onChangeText={this.props.onChangeText} />
                        <View style={componentstyles.dateOverlay} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

DatePicker.defaultProps = defaultProps;

export default DatePicker;
