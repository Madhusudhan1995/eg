/**
* @author Aman Shekhar <aman.s@photoninfotech.net>
* @version 1.0.2
* @summary Custom DatePicker component for iOS.
* @description A custom component of DatePicker for iOS is being made. This component will be getting used wherever the DatePicker is required instead of creating a new one again and again.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity creating our view.
* @import Icon from "react-native-elements"" to use font icons in this screen whereever required.
*/

import React, { Component } from 'react';
import { View, Text, TextInput, DatePickerIOS, TouchableOpacity, Modal } from 'react-native';
import { Icon } from "react-native-elements";


/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "../../styles";

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
    openDatePicker: () => {}
}

/**
* @class DatePicker
* @extends Component
* @summary Represents Custom DatePicker.
* @description This is a Custom Component for DatePicker. It extends react Component class for using the functions comes along with it.
*/

class DatePicker extends Component {

    /**
    * @constructor It is initializing the state with few properties.
    * openDatePicker: It is handling the date picker. 
    * mapElement: 
    */
    constructor(props) {
        super(props);
        this.state = {
          chosenDate: new Date(),
          isDatePickerOpen: false
        }
        this.mapElement = this.mapElement.bind(this);
        this.renderDatePicker = this.renderDatePicker.bind(this);
        this.setDateValue = this.setDateValue.bind(this);
        this.datePickerDoneBtnTapped = this.datePickerDoneBtnTapped.bind(this);
        this.openDatePicker = this.openDatePicker.bind(this);
    }

    mapElement(node) {
        this.datePicker = node;
    }

    renderDatePicker() {
        return (
          <Modal
              animationType="fade"
              transparent={true}
              visible={this.state.isDatePickerOpen}
              onRequestClose={() => {

              }}>
              <View style={{height:230,backgroundColor:'white',position:'absolute', bottom:0,left:0,right:0,zIndex:1}}>
                  <View style={{left:0,right:0,height:40,flexDirection:'row',backgroundColor:"rgb(225, 224, 224)",justifyContent:'center',padding:10}}>
                      <View style={{flex:1}}></View>
                      <View style={{flex:3}}>
                          <Text style={{alignSelf:'center',fontSize:17}}>Select DOB</Text>
                      </View>
                      <View style={{flex:1}}>
                          <TouchableOpacity onPress={this.datePickerDoneBtnTapped}>
                               <Text style={{alignSelf:'flex-end',color:'rgb(0, 122, 255)',fontSize:15}}>Done</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
                   <DatePickerIOS
                      date={this.state.chosenDate}
                      mode="date"
                      onDateChange={this.setDateValue} />
              </View>
          </Modal>
        )
    }

    /**
    * @function setDateValue: This method is setting the Date, it is taking one parameter 
    * i.e the date which is selected
    */

    setDateValue(value) {
        this.setState({
          chosenDate: value
        })
    }

    /**
    * @function datePickerDoneBtnTapped: This method is invoking when the user is hitting the Done button on a Date Picker
    */

    datePickerDoneBtnTapped() {
      const date = new Date(this.state.chosenDate);
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      this.props.onChangeDate(`${day}/${month+1}/${year}`);
      this.setState({
        isDatePickerOpen: false
      })
    }

    /**
    * @function datePickerDoneBtnTapped: This method is invoking the Date Picker to open.
    */

    openDatePicker() {
        this.setState({
          isDatePickerOpen: true
        })
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={[styles.textInputContainer, this.props.style]}>
                <TouchableOpacity onPress={this.openDatePicker}>
                    <View>
                        <Text style={styles.textInputLabel}>{this.props.label}</Text>
                        <TextInput
                            underlineColorAndroid="rgba(0,0,0,0)"
                            placeholderTextColor="rgba(51, 51, 51, 0.6)"
                            selectionColor= "rgb(51, 51, 51)"
                            style={styles.textInputBox}
                            ref= {this.mapElement}
                            returnKeyType={this.props.returnKeyType}
                            placeholder={this.props.placeholder}
                            secureTextEntry={this.props.secureTextEntry}
                            keyboardType= {this.props.keyboardType}
                            maxLength= {this.props.maxLength}
                            value= {this.props.value}
                            onChangeText= {this.props.onChangeText} />
                        <View style={styles.dateOverlay} />
                    </View>
                </TouchableOpacity>
                {this.state.isDatePickerOpen && this.renderDatePicker()}
            </View>
        );
    }
}

DatePicker.defaultProps = defaultProps;

export default DatePicker;
