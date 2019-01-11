/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.2
* @summary Login Screen for the application.
* @description The screen asks user to enter their email and password
* to login in the application. Their is a link for "forgot passord?",
* user can click on this link and change their password. The screen throws an alert when etered
* wrong credentials. The screen uses react and third party npm modules and also few custom components.
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
import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Platform, SafeAreaView, Modal, DeviceEventEmitter } from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import validator from "validator";
import { AccessToken, GraphRequest, LoginManager } from "react-native-fbsdk";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
import { InputText, Button, LinkButton, ListPicker, Toolbar, LunguagePickerAndroid } from "../components";
import { navigateTo, redirectTo, navigateBack } from "../helpers";
import logo from "../assets/images/signup/Loginlogo.png";
import { loginUser } from "../actions/authActions";
import { onAppInstall } from "../actions/onBoardingActions";
import ConstantsList from "../constants/lagunage_constant";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";

const defaultProps = {
    comingFrom: ""
};

/**
* @class Login
* @extends Component
* @summary Represents Login class.
* @description This is a Login class. It extands react Component class for using the functions comes along with it.
*/
class Login extends Component {

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
            isPasswordShown: false,
            pickerViewHideIOS: false,
            modalVisible: false,
            language: "English (EN)",
            pickerValue: "",
            name: "",
            pic: "",
            showLunagePickerAndroid: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.getFacebookProfileDetails = this.getFacebookProfileDetails.bind(this);
        this.onShowPasswordIconPress = this.onShowPasswordIconPress.bind(this);
        this.onChange = this.onChange.bind(this);
        this.renderTextInput = this.renderTextInput.bind(this);
        this.pickerDoneBtnTapped = this.pickerDoneBtnTapped.bind(this);
        this.handlePickerValue = this.handlePickerValue.bind(this);
        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
        this._segmentPicker = this._segmentPicker.bind(this);
        this.languageButtonTapped = this.languageButtonTapped.bind(this);
        this.handleJoinNow = this.handleJoinNow.bind(this);
    }

    /**
    * @function onShowPasswordIconPress: It gets called when user presses the eye icon to see the password
    * It updates the state "isPasswordShown" boolean property and toggles the password.
    */
    onShowPasswordIconPress() {
        this.setState({
            isPasswordShown: !this.state.isPasswordShown
        });
    }

    /**
    * @function onChange: Its a generic function for input fields.
    * It gets called when user changes the value in input field.
    * It updates the state property with given key and value.
    * @params {string} key and value
    */
    onChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    /**
    * @function onSubmit: Its called when user fills the form and all the validation gets passed.
    * @params {object} form input values.
    * @function this.props.handleLoginUser: It takes the values as params and makes the async call
    * the server for user login.
    * @params {object} form input values.
    */
    onSubmit(values) {
        this.props.handleLoginUser(values);
        // redirectTo("app");
    }

    /**
    * @function getFacebookProfileDetails: Its called by "handleFacebookLogin" to get the details of the user.
    * It takes accesstoken as params and fetches the data.
    * @params {string} accessToken: token string which goes to the facebook and authenticates the user.
    */
    getFacebookProfileDetails(accessToken) {
        const infoRequest = new GraphRequest(
            "/me",
            {
                accessToken,
                parameters: {
                    fields: {
                        string: "email ,name , first_name, middle_name, last_name, picture,id"
                    }
                }
                // redirectTo("app");
            }
        );
    }


    /**
    * @function renderTextInput: Its called in the render function and returns a input component.
    * @params {object} It takes field object which has input properties which further gets passed
    * to the input component.
    * @return {Compoenent} It returns a presenter input component.
    */
    renderTextInput(field) {
        const { meta: { touched, error }, placeholder, isPassword, onIconPress, keyboardType, label, secureTextEntry, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    label={null}
                    onIconPress={onIconPress}
                    secureTextEntry={secureTextEntry}
                    isPassword={isPassword}
                    placeholder={placeholder}
                    {...restInput} />
                {touched ? <Text style={screenstyles.errorTextColor}>{error}</Text> : null}
            </View>
        );
    }

    /**
    * @function pickerDoneBtnTapped: Its called when user taps the done button after selecting the language.
    * It updates the state "language" and "pickerViewHideIOS" properties.
    */
    pickerDoneBtnTapped() {
        this.setState({
            language: this.state.pickerValue,
            pickerViewHideIOS: false
        });
    }

    /**
    * @function handlePickerValue: Its called when user taps the done button after selecting the language.
    * It updates the state "pickerValue" property with the param value.
    * @params {string} It takes value string selected from the language picker popup.
    */
    handlePickerValue(value) {
        this.setState({ pickerValue: value });
    }

    /**
    * @function handleFacebookLogin: Its called when user taps on the "login with facebook" button.
    * This function makes a call to the facebook authentication service with logInWithReadPermissions().
    * @function logInWithReadPermissions: It makes a service call to facebook and returns public_profile
    * and user email if auth succeeds.
    * @params {object} It takes an array of properties needs to be fetched from facebook.
    */
    handleFacebookLogin() {
        LoginManager.logInWithReadPermissions(["public_profile", "email"]).then(
            function (result) {
                if (result.isCancelled) {
                    return false;
                }
                AccessToken.getCurrentAccessToken().then(
                    (data) => {
                        const accessToken = data.accessToken;
                        redirectTo("app");
                        this.getFacebookProfileDetails(accessToken);
                    }
                );
            },
            (error) => {
                // console.log('Login fail with error: ' + error)
            }
        );
    }

    /**
    * @function _segmentPicker: Its called in the render() and returns JSX for the picker component.
    * It returns only if the platform is IOS
    */
    _segmentPicker() {
        if (Platform.OS === "ios" && this.state.pickerViewHideIOS) {
            return (
                <View style={screenstyles.iosPickerHeaderView}>
                    <View style={screenstyles.iosPickerSubView}>
                        <View style={screenstyles.iosPickerLanguageView}>
                            <Text style={screenstyles.iosPickerTextView}>{ConstantsList.Login.Language}</Text>
                        </View>
                        <View style={screenstyles.iosPickerButtonView}>
                            <TouchableOpacity onPress={this.pickerDoneBtnTapped}>
                                <Text style={screenstyles.iosPickerButtonTextView}>{ConstantsList.Login.Done}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ListPicker onChangePickerValue={this.handlePickerValue} />
                </View>
            );
        }
    }

    /**
    * @function languageButtonTapped: Its called when user taps on the language selector link.
    * It updates the state "pickerViewHideIOS" to true and shows the language list in a popup.
    */
    languageButtonTapped() {
        this.setState({ pickerViewHideIOS: true });
    }

    /**
    * @function handleJoinNow: Its called when user taps on the Join now link.
    * It checks the prop from which screen user comes on the login screen and handles then
    * the navigation according to it.
    */
    handleJoinNow() {
        if (this.props.comingFrom === "prehome") {
            navigateTo("register");
        } else {
            navigateBack();
        }
    }
    showAndroidLaunguePicker() {
        return (
            <View style={[this.state.modalVisible ? { backgroundColor: 'rgba(52, 52, 52, 0.2)', justifyContent: 'center', alignItems: 'center' } : '']}>
                <Modal // modal start
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    overFullScreen='fullScreen'
                    onRequestClose={() => { }}>
                    <LunguagePickerAndroid />
                </Modal>
            </View>
        )
    }
    /**
 * @function setModalVisible
 * setModalVisible method for rendering the Vocher Details screen
 */
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    componentWillMount() {
        DeviceEventEmitter.addListener('okClicked', (lunaguagename) => {
            this.setState({ modalVisible: false, language: lunaguagename });
        });
    }
    /**
 
     /**
     * @function render: Its one of the main functions of react component. It renders the JSX on the screen
     * In render() we are fetching "handleSubmit" from the props and passing it to "onPress" event of then
     * submit button. "handleSubmit" submits the form after checking the validation.
     */
    render() {
        const { handleSubmit } = this.props;
        return (
            <SafeAreaView style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
                <KeyboardAwareScrollView
                    enableOnAndroid
                    enableAutomaticScroll
                    keyboardOpeningTime={0}
                    extraHeight={Platform.select({ios: 200, android: 200})}>
                    {this.showAndroidLaunguePicker()}
                        <Toolbar
                            onClickLeftIcon={navigateBack}
                            iconName="loginpage"
                            />
                         <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
                            <View style={{ flex: 8 }}>
                                <View style={screenstyles.loginFormCont}>
                                    <View style={[screenstyles.loginLogoContainer,screenstyles.loginLogoSpace]}>
                                        <Image source={logo} />
                                    </View>
                                    <View>
                                        <Field
                                            style={{ marginTop: 0 }}
                                            name="email"
                                            label="Email"
                                            keyboardType="email-address"
                                            placeholder="Email Address"
                                            component={this.renderTextInput} />
                                        <Field
                                            name="password"
                                            label="Password"
                                            component={this.renderTextInput}
                                            placeholder="Password"
                                            onIconPress={this.onShowPasswordIconPress}
                                            isPassword={true}
                                            secureTextEntry={!this.state.isPasswordShown} />
                                        <View style={screenstyles.loginHelperCont}>
                                            <View style={screenstyles.languagePickerView}>
                                                {Platform.OS !== "ios" ? (
                                                    <TouchableOpacity onPress={() => { this.setModalVisible(true) }}>
                                                        <Text style={screenstyles.languagePickerTitle}>{this.state.language}</Text>
                                                    </TouchableOpacity>
                                                )
                                                    : (
                                                        <TouchableOpacity onPress={this.languageButtonTapped}>
                                                            <Text style={screenstyles.languagePickerTitle}>{this.state.language}</Text>
                                                        </TouchableOpacity>
                                                    )
                                                }
                                            </View>
                                            <View style={screenstyles.forgotPasswordView}>
                                                <LinkButton
                                                    onPress={() => navigateTo("forgotPassword")}
                                                    title="Forgot Password"
                                                    style={screenstyles.forgotTextLink} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ justifyContent: "flex-end" }}>
                                <View>
                                <Button
                                    title="Login"
                                    style={screenstyles.ForgotButton}
                                    textStyle={screenstyles.ForgotButtonText}
                                    backgroundColor="rgb(15, 113, 184)"
                                    onPress={handleSubmit(this.onSubmit)} />
                                </View>
                                <View style={screenstyles.loginButtonMargin}>
                                <Button
                                    title="Continue with Facebook"
                                    style={screenstyles.facebookButton}
                                    textStyle={screenstyles.facebookButtonText}
                                    iconName="facebook"
                                    onPress={this.handleFacebookLogin} />
                                </View>    

                                <View style={screenstyles.loginFooterTextContainer}>
                                    <Text style={[screenstyles.fontSize15, screenstyles.colorBlack, { marginRight: 7 }]}>
                                        {ConstantsList.Login.Account}
                                    </Text>
                                    <LinkButton
                                        onPress={this.handleJoinNow}
                                        title="Join Now"
                                        style={screenstyles.loginJoinnow} />
                                </View>
                            </View>
                            {this._segmentPicker()}
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

Login.defaultProps = defaultProps;

/**
* @function validate: Its called before form submit. Its validates the form value and returns an error object.
* if it finds any error, it stops the form submission and throws it.
* @params {object} values: It takes form vulues as object.
* Validator library is used for email validation instead of regex.
* @return {object} errors: It returns errors object. If no properties in the errors then it calls the onSubmit method
*/
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!validator.isEmail(values.email)) {
        errors.email = "Please enter a valid email address";
    }
    if (!values.password) {
        errors.password = "Password is required";
    }
    return errors;
};

/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({});

/**
* Converting functions to props for the Login component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({
    /**
    * @function handleLoginUser: It takes user details object as params and dispatchs "loginUser" actions.
    * which further makes api call for login.
    * @params {object} payload: It has email and password for user login.
    * @function onAppInstall: It takes a boolean value and updates the redux store.
    * @params {boolean} payload: It has a boolean value.
    */
    handleLoginUser: payload => dispatch(loginUser(payload)),
    onAppInstall: payload => dispatch(onAppInstall(payload))
});

/**
* @function compose: It takes higher order function as params in order and returns one HOC which again takes
* component and as param and returns an updated component.
* @params {function} connect, reduxForm
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
* @function reduxForm: It takes an object as params which has the form name and "validate" function as
* properties. It internally creates a reducer and validates the form.
*/
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({
        form: "Login",
        validate
    })
)(Login);
