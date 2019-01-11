/**
* @author Mujeeb <mohamadmujeeb.urahaman@photoninfotech.net>
* @version 1.0.0
* @summary Implented OnBoarding pages
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
import React, {Component} from 'react';
import {View, StatusBar, SafeAreaView, DeviceEventEmitter} from 'react-native';
import { ViewPagerItems, } from "../components";
import { navigateTo } from "../helpers";
import ScreenStyles from '../styles/screenStyles';
import Swiper from 'react-native-swiper';

const images = {
    main_image1: require('../assets/images/Onboard_EG_Station.png'),
    main_image2: require('../assets/images/Onboard_EG_Club.png'),
    main_image3: require('../assets/images/Onboard_EG_Voucher.png'),
    main_image4: require('../assets/images/Onboard_EG_Wallet.png'),
    main_image_default: require('../assets/images/onboarding_logo_main.png'),
};

/**
* @class OnBoardingScreen
* @extends Component
* @summary Represents Onboarding class.
* @description The screen show's onboarding screens in swiper in the application.
*/
class OnBoardingScreen extends Component {

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
            page_0_title: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
            page_0_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            page_1_title: "Vouchers",
            page_1_desc: "This app is all about you – need a coffee? Are you hungry? Join the EG Club and take advantage of all our exclusive vouchers.",
            page_2_title: "Find Nearest Stations",
            page_2_desc: "Find the nearest stations to you – and while you’re at it save a few to your preferred list.",
            page_3_title: "Join the EG Club",
            page_3_desc: "Access the Euro Garages benefits, vouchers & deals to boost your membership status with every transaction.",
            page_4_title: "Ditch Your Wallet",
            page_4_desc: "Use EG Pay to pay for your gas and add your rewards cards all in one place.",
          };
      }

    /**
    * @function render
    * React render method for rendering the native elements
    */
    render() {
        return (
            <SafeAreaView style={[ScreenStyles.homeContainer]}>
            <View style={[ScreenStyles.homeContainer]}>
                <Swiper loop={false} paginationStyle={ScreenStyles.onboardingDotStyle}>
                    <View style={ScreenStyles.onboardingSlideStyle}>
                        <ViewPagerItems
                            title= {this.state.page_3_title}
                            desc = {this.state.page_3_desc}
                            offset = {2}
                            imgSrc = {images.main_image2}/>
                    </View>
                    <View style={ScreenStyles.onboardingSlideStyle}>
                        <ViewPagerItems
                                title= {this.state.page_2_title}
                                desc = {this.state.page_2_desc}
                                offset = {1}
                                imgSrc = {images.main_image1}/>
                    </View>
                    <View style={ScreenStyles.onboardingSlideStyle}>
                        <ViewPagerItems
                            title= {this.state.page_1_title}
                            desc = {this.state.page_1_desc}
                            offset = {3}
                            imgSrc = {images.main_image3}/>
                    </View>
                    <View style={ScreenStyles.onboardingSlideStyle}>
                        <ViewPagerItems
                            title= {this.state.page_4_title}
                            desc = {this.state.page_4_desc}
                            offset = {4}
                            imgSrc = {images.main_image4}/>
                    </View>
                </Swiper>
            </View>
            </SafeAreaView>
        );
    }

    /**
    * @function componentDidMount
    * componentDidMount method called when components are mounted.
    * StatusBar.setHidden(true) -> statusbar will be hided.
    */
    componentDidMount() {
        StatusBar.setHidden(true);
    }

    /**
    * @function componentWillMount
    * componentWillMount method called when components are mounted.
    * Added listener to listen callback's from other components
    */
    componentWillMount() {
        DeviceEventEmitter.addListener('closeIconClicked', (data) => {
            navigateTo("home");
       });
    }

    /**
    * @function componentWillUnmount
    * componentWillUnmount method called when components are un-mounted.
    * Removed listener
    */
    componentWillUnmount() {
        DeviceEventEmitter.removeListener('closeIconClicked', (data) => {
            //Listener will be removed
       });
    }
}

export default OnBoardingScreen;
