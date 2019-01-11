/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
* @summary View pager items for the application.
* @description The screen show's onboarding screens in swiper in the application. Their is a link for "JOIN NOW",
* user can click on this link and navigate to registration.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity, Image, Alert, ScrollView, Platform, KeyboardAvoidingView,
* SafeAreaView from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import compose from "redux" for removing the complexicity of higher order components used in the screen.
* @import Field, reduxForm from "redux-form" for composing the form and for getting the form value in
* and object. also it simplifies form validation.
* @import validator from "validator" for validating the form fields which requires complex regex
* i.e., emailid, dateformat etc.
* @import LoginButton, AccessToken, GraphRequest, GraphRequestManager, LoginManager from "react-native-fbsdk"
* for implemnting login with facebook.
* @import Icon from "react-native-vector-icons/FontAwesome" to use font icons in this screen whereever required.
*@import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view' tomove the view up when keyboard open.
*/
import React, { Component } from 'react';
import {Text,View,TouchableOpacity, Image, Dimensions} from 'react-native';
import { navigateTo } from "../../helpers";
/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import componentstyles from "../../styles/componentStyles";
import ScreenStyles from '../../styles/screenStyles';
// import - Global resources
import GLOBALS from '../../constants/Globals';
/**
* Represents ViewPagerItems.
* @class ViewPagerItems
* @extends Component
*/

// Get device width, height in variable's
var windowWidth = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

/**
* @class ViewPagerItems
* @extends Component
* @summary Represents Onboarding view items class.
* @description The screen show's onboarding screens items in swiper in the application.
*/
class ViewPagerItems extends Component {

    /**
    * @constructor It is initializing the state with default properties.
    * isPasswordShown: Boolean property for hiding and showing password value.
    * pickerViewHideIOS: Boolean property for showing and hiding language picker popup.
    * language: String property for default language.
    * pickerValue: String property for storing the language picker value.
    * name: String property for storing the username comes after facebook login.
    * pic: String property for Storing the profile pic path comes after facebook login
    */
    constructor(props){
        super(props);
        this.state = {
            title       : props.title,
            desc        : props.desc,
            offset      : props.offset,
            imgSrc      : props.imgSrc,
        };
        this.onCloseClick = this.onCloseClick.bind(this);
    }

    /**
    * @function onCloseClick
    * This method calls when user clicks on icon close
    */
    onCloseClick() {
        navigateTo("prehome");
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */
    render() {
        return (
            <View style={componentstyles.viewPagerItemContainerStyle}>

                <View style={[componentstyles.viewPagerItemImageContainerStyle, {height: windowHeight * .64}]}>
                    <Image style={componentstyles.viewPagerItemImageViewStyle} resizeMode={'cover'} source={ this.state.imgSrc } />
                    <View style={componentstyles.viewPagerItemLogoConatinerStyle}>
                        <Image style={componentstyles.viewPagerItemLogoStyle} source={require('./../../assets/images/onboarding_logo_main.png')} />
                    </View>
                    <View style={componentstyles.viewPagerItemCloseIconConatinerStyle}>
                    <TouchableOpacity onPress={this.onCloseClick}>
                        <Image style={componentstyles.viewPagerCloseIcon} source={require('./../../assets/images/Onboarding_close.png')} />
                    </TouchableOpacity>
                    </View>
                </View>

                <View style={[componentstyles.viewPagerItemTextConatinerStyle ,{height: windowHeight * .36}]}>
                <Text style={componentstyles.viewpagerItemTextStyle}>{this.state.title}</Text>
                <Text style={componentstyles.viewpagerItemDescTextStyle}>{this.state.desc}</Text>
                <View style={[componentstyles.viewpagerLoginBtnStyle]}>
                    <View style={{padding : 0}}>
                        <TouchableOpacity onPress={() => navigateTo("register")}>
                            <Text style={ScreenStyles.viewPaferLoginTextFont}>{GLOBALS.TEXT.LOGIN}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>

            </View>
        );
    }
}

export default ViewPagerItems;
