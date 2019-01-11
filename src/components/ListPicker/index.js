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
*/

import React, { Component } from 'react';
import { View, Picker } from 'react-native';

/**
* @import componentstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import componentstyles from "../../styles/componentStyles";


/**
* Represents ListPicker.
* @class ListPicker
* @extends Component
*/
class ListPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pickerValue: 'English (EN)'
        };
    }

    onChange = (value) => {
        this.setState({
            pickerValue: value
        });
        this.props.onChangePickerValue(value);
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={componentstyles.listPickerContainer}>
                <Picker
                    selectedValue={this.state.pickerValue}
                    style={componentstyles.listPickerStyle}
                    onValueChange={this.onChange}>
                    <Picker.Item label="English (EN)" value="English" />
                    <Picker.Item label="Dutch (DU)" value="Dutch" />
                    <Picker.Item label="French (FR)" value="French" />
                </Picker>
            </View>
        );
    }
}

export default ListPicker;
