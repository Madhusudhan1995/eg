
/**
* @author Megha <megha.h@photoninfotech.net>
* @version 1.0.2
* @summary Login Screen for the application.
* @description The screen asks user to enter their email
* to sent the link to reset password .
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
*@import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view' tomove the view up when keyboard open.
*/
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, Alert, BackHandler, Image , ScrollView, Platform, SafeAreaView} from "react-native";
import {compose} from "redux";
import {Field, reduxForm, getFormValues} from "redux-form";
import validator from "validator";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
/**
* @import InputText, Button, LinkButton, ListPicker, Toolbar for building our screen.
* @description InputText: renders input field in the screen.
* Button: renders custom button in the screen.
* LinkButton: renders link button in the screen.
* ListPicker: renders a list of object in a popup from where one can select a value.
* @import {navigateTo, redirectTo, navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* redirectTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* It deletes the back history
* and no animation happens while screen transition.
* navigateBack(): It simply naviagates the user to the back screen.
* @import logo from "../assets/images/signup/Loginlogo.png". Simply importing the logo image to show in the screen.
* @import {loginUser} from "../actions/authActions". loginUser(userObject): takes user details in an object
* and does a service call from redux actions.
* @import {onAppInstall} from "../actions/onBoardingActions". onAppInstall() function gets called for the first
* time when
* user goes to the login screen and it updates on the client side as the app has been installed so that we
* make sure user does not see the onboarding screen every time it launches the app.
*/
import {InputText, Button, Toolbar} from "../components";
import {navigateTo, navigateBack} from "../helpers";
import logo from "../assets/images/signup/Loginlogo.png";


/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";

/**
* @class ForgotPassword
* @extends Component
* @summary Represents Login class.
* @description This is a ForgotPassword class. It extands react Component class for using the functions comes along with it.
*/
class ForgotPassword extends Component {
    /**
    * @constructor It is initializing the state with default properties.
    * isPasswordShown: Boolean property for hiding and showing password value.
    * pickerViewHideIOS: Boolean property for showing and hiding language picker popup.
    * language: String property for default language.
    * pickerValue: String property for storing the language picker value.
    * name: String property for storing the username comes after facebook login.
    * pic: String property for Storing the profile pic path comes after facebook login
    */
    /* istanbul ignore next */
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }


    /**
    * @function componentDidMount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    * @function this.props.onAppInstall(): It returns a boolean value and updates the redux stores
    * appInstalled property. This property helps to show the onboarding screen first time when app installs.
    */
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    }


    /**
    * @function componentWillMount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    */
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
    }


    /**
    * @function onLoginClick: It gets called when user taps on Login link,
    * It updates the state "onActivateNewsletter" boolean property and toggles the check.
    */
    handleBackPress = () => {
        navigateBack();
        return true;
    }


    /**
    * @function onChange: Its a generic function for input fields.
    * It gets called when user changes the value in input field.
    * It updates the state property with given key and value.
    * @params {string} key and value
    */
    onChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    /**
    * @function onSubmit
    * React onSubmit method will render to login screen and alert will popup
    */
    onSubmit = (values) => {
        Alert.alert(
            "",
            "Password reset link has been sent to your mail id successfully",
            [
                {text: "OK", onPress: () => navigateTo("login")}

            ],
            {cancelable: false}
        );
    }

    /**
    * @function renderTextInput
    * React renderTextInput method will reuse the input components for forgotPassword screen
    */
    renderTextInput = (field) => {
        const {meta: {touched, error}, placeholder, keyboardType, label, input: {onChange, ...restInput}} = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    label={null}
                    placeholder={placeholder}
                    {...restInput} />
                <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */
    render() {
        const {email, handleSubmit} = this.props;
        return (
            <SafeAreaView style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
                <KeyboardAwareScrollView
                    enableOnAndroid
                    enableAutomaticScroll
                    keyboardOpeningTime={0}
                    extraHeight={Platform.select({ios: 200, android: 200})}>
                <Toolbar
                    onClickLeftIcon={navigateBack}
                    iconName="loginpage"
                />
      <ScrollView showsVerticalScrollIndicator={false}>
                <View style={screenstyles.forgotChildView}>
                    <View style={screenstyles.forgotLogo}>
                        <Image source={logo} />
                    </View>
                    <View>
                        <Text style={screenstyles.ForgotText}>
                        Enter your email address below to receive your password reset instructions.
                        </Text>
                   </View>
                   <View>
                    <Field
                        style={{marginTop: 0}}
                        label=""
                        name="email"
                        placeholder="Enter Email Address"
                        component={this.renderTextInput}
                        keyboardType="email-address"
                    />
                    </View>
               

                <View style={screenstyles.forgotbuttonView}>
                <Button
                        title="Request Password"
                        onPress={handleSubmit(this.onSubmit)}
                        style={screenstyles.ForgotButton}
                        textStyle={screenstyles.ForgotButtonTextStyle} />
                        </View>
            </View>
            </ScrollView>
            </KeyboardAwareScrollView>
            </SafeAreaView>
           
        );
    }
}

/**
* @function validate
* React validate method for error validation
*/
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Please enter a email address";
    } else if (!validator.isEmail(values.email)) {
        errors.email = "Please enter a valid email address";
    }
    return errors;
};

/**
* Converting redux state to props for the ForgotPassword component
* @function mapStateToProps
* @params {object} state
* @returns {object} props
*/
const mapStateToProps = state => ({
    formValues: getFormValues("forgotPassword")(state)
});

/**
* Converting redux state to props for the ForgotPassword component
* @function mapDispatchToProps
* @params {function} dispatch
* @returns {object} props
*/
const mapDispatchToProps = dispatch => ({});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "forgotPassword",
        validate
    })
)(ForgotPassword);

