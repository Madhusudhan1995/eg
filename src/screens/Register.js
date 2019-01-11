/**
* @author kallayya <kallayya@photoninfotech.net>
* @version 1.0.2
* @summary Register Screen for the application.
* @description The screen asks user to enter their first and last name email , password and confirm password
* to register in the application. Their is a link for "Login",
* user can click on this link and login if they are already exist. The screen throws an alert when etered
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
* and object also it simplifies form validation.
* @import validator from "validator" for validating the form fields which requires complex regex
* i.e., emailid, dateformat etc.
* @import LoginButton, AccessToken, GraphRequest, GraphRequestManager, LoginManager from "react-native-fbsdk"
* for implemnting login with facebook.
*/
import React, { Component } from "react";
import { View, Text, ScrollView, Image, BackHandler, Alert, SafeAreaView, Platform, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import validator from "validator";
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
* @import {registerUser} from "../actions/authActions". loginUser(userObject): takes user details in an object
* and does a service call from redux actions.
* @import {onAppInstall} from "../actions/onBoardingActions". onAppInstall() function gets called for the first
* time when
* user goes to the login screen and it updates on the client side as the app has been installed so that we
* make sure user does not see the onboarding screen every time it launches the app.
*/
import { InputText, Button, LinkButton, Toolbar, Checkbox } from "../components";
import { navigateBack, navigateTo } from "../helpers";
import { registerUser } from "../actions/authActions";
import { onAppInstall } from "../actions/onBoardingActions";
import logo from "../assets/images/signup/Loginlogo.png";
import ConstantsList from "../constants/lagunage_constant";


/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";

/**
* @class Register
* @extends Component
* @summary Represents Register class.
* @description This is a Register class. It extands react Component class for using the functions comes along with it.
*/
class Register extends Component {

    /**
    * @constructor It is initializing the state with default properties.
    * isPasswordShown: Boolean property for hiding and showing password value.
    * isCmfPasswordShown: Boolean property for hiding and showing password value.
    * inActiveNewsletter: Boolean property for default checkbox checked for i agree EG terms and conditioin.
    * termsConditions: Boolean property for default checkbox checked for subscribe to Eg newsletter.
    */
    /* istanbul ignore next */
    constructor(props) {
        super(props);
        this.state = {
            isPasswordShown: false,
            isCmfPasswordShown: false,
            inActiveNewsletter: false,
            termsConditions: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleBackPress = this.handleBackPress.bind(this);
        this.handleBackNavigation = this.handleBackNavigation.bind(this);
        this.onIconPress = this.onIconPress.bind(this);
        this.onIconConfirmPress = this.onIconConfirmPress.bind(this);
        this.onActivateNewsletter = this.onActivateNewsletter.bind(this);
        this.acceptTermsConditions = this.acceptTermsConditions.bind(this);
        this.onLoginClick = this.onLoginClick.bind(this);
        this.renderTextInput = this.renderTextInput.bind(this);
        this.onTermAndConditionLink = this.onTermAndConditionLink.bind(this);
        this.onPrivacyAndPolicyLink = this.onPrivacyAndPolicyLink.bind(this);
    }

    /**
    * @function componentDidMount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    * @function this.props.onAppInstall(): It returns a boolean value and updates the redux store
    * appInstalled property. This property helps to show the onboarding screen first time when app installs.
    */
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
        // this.props.onAppInstall(true);
    }

    /**
    * @function componentWillMount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    */
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
    }

    /**
    * @function onShowPasswordIconPress: It gets called when user presses the eye icon to see the password
    * It updates the state "isPasswordShown" boolean property and toggles the password.
    */
    onIconPress() {
        this.setState({
            isPasswordShown: !this.state.isPasswordShown
        });
    }

    /**
    * @function onShowPasswordIconPress: It gets called when user presses the eye icon to see the password
    * It updates the state "isPasswordShown" boolean property and toggles the password.
    */
    onIconConfirmPress() {
        this.setState({
            isCmfPasswordShown: !this.state.isCmfPasswordShown
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
    * @function onActivateNewsletter: It gets called when user presses the un checkbox to get
    * It updates the state "onActivateNewsletter" boolean property and toggles the check.
    */
    onActivateNewsletter() {
        this.setState({
            inActiveNewsletter: !this.state.inActiveNewsletter
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
        values.tncAcceptance = true;
        delete values.confirmpassword;
        this.props.handleRegisterUser(values);
    }

    /**
    * @function onLoginClick: It gets called when user taps on Login link,
    * It updates the state "onActivateNewsletter" boolean property and toggles the check.
    */
    onLoginClick() {
        navigateTo("login");
    }

    /**
    * @function onTermAndConditionLink: It gets called when user taps on TermAndCondition,
    * It will navigate to Term and condition.
    */
    onTermAndConditionLink() {
        navigateTo("termsAndConditions");
    }

    /**
    * @function onLoginClick: It gets called when user taps on Login link,
    * It updates the state "onActivateNewsletter" boolean property and toggles the check.
    */
    onPrivacyAndPolicyLink() {
        navigateTo("privacyPolicy");
    }

    /**
    * @function handleBackNavigation: It gets called when user entered some text on fields ,
    * if user want to exit from the register screen then get alert to clear the all text  .
    */
    handleBackNavigation() {
        if (this.props.formValues && Object.keys(this.props.formValues).length > 0) {
            Alert.alert(
                "Alert",
                "“Please confirm, if you want to navigate away from this screen. Entered data will be lost.”",
                [
                    { text: "Close", onPress: () => { } }, // console.log('Cancel Pressed!') },
                    { text: "Confirm", onPress: () => navigateBack() }
                ],
                { cancelable: false }
            );
        } else {
            navigateBack();
        }
    }

    /**
    * @function acceptTermsConditions: It gets called when user unchecked the checkbox
    * It updates the state "acceptTermsConditions" boolean property and toggles the check.
    */
    acceptTermsConditions() {
        this.setState({
            termsConditions: !this.state.termsConditions
        });
    }

    /**
    * @function handleBackPress: It gets called when user tap on back navigation
    * It will navigate to back.
    */
    handleBackPress() {
        this.handleBackNavigation();
        return true;
    }

    /**
    * @function renderTextInput: Its called in the render function and returns a input component.
    * @params {object} It takes field object which has input properties which further gets passed
    * to the input component.
    * @return {Compoenent} It returns a presenter input component.
    */
    renderTextInput(field) {
        const { meta: { touched, error }, placeholder, keyboardType, onIconPress, isPassword, label, maxLength, secureTextEntry, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    isPassword={isPassword}
                    label={null}
                    maxLength={maxLength}
                    onIconPress={onIconPress}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    {...restInput} />
                {touched ? <Text style={screenstyles.errorTextColor}>{error}</Text> : null}
            </View>
        );
    }


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
                    extraHeight={Platform.select({ ios: 200, android: 200 })}>
                    <View style={[screenstyles.appContainer, screenstyles.whiteBackground]}>
                        <Toolbar
                            onClickLeftIcon={this.handleBackNavigation}
                            iconName="loginpage"
                        />

                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={screenstyles.loginLogoContainer}>
                                <Image source={logo} />
                            </View>
                            <Field
                                name="firstName"
                                label=""
                                placeholder="First Name"
                                component={this.renderTextInput}
                                keyboardType="default"
                                maxLength={30}
                            />
                            <Field
                                name="lastName"
                                label=""
                                placeholder="Last Name"
                                component={this.renderTextInput}
                                keyboardType="default"
                                maxLength={30}
                            />
                            <Field
                                name="email"
                                label=""
                                placeholder="Email Address"
                                component={this.renderTextInput}
                                keyboardType="email-address"
                            />
                            <Field
                                name="password"
                                label=""
                                onIconPress={this.onIconPress}
                                isPassword={true}
                                secureTextEntry={!this.state.isPasswordShown}
                                placeholder="Password"
                                component={this.renderTextInput} />
                            <Field
                                name="confirmpassword"
                                label=""
                                onIconPress={this.onIconConfirmPress}
                                isPassword={true}
                                secureTextEntry={!this.state.isCmfPasswordShown}
                                placeholder="Confirm Password"
                                component={this.renderTextInput}
                            />
                            <View style={screenstyles.checkboxStyle}>
                                <Checkbox
                                    iconColor="#797979"
                                    iconSize={15}
                                    onPress={this.acceptTermsConditions}
                                    checked={this.state.termsConditions}
                                    labelComponent={(
                                        <View>
                                            <View style={screenstyles.checkboxAgree}>
                                                <Text style={screenstyles.checkboxText}>{ConstantsList.Register.SigninText} </Text>
                                                <LinkButton
                                                    onPress={this.onTermAndConditionLink}
                                                    title="Terms & "
                                                    style={screenstyles.termFont}
                                                />
                                            </View>
                                            <View style={screenstyles.checkboxPrivacy}>
                                                <LinkButton
                                                    onPress={this.onTermAndConditionLink}
                                                    title="Conditions"
                                                    style={screenstyles.termFont}
                                                />
                                                <Text style={screenstyles.checkboxText}> {ConstantsList.Register.and} </Text>
                                                <LinkButton
                                                    onPress={this.onPrivacyAndPolicyLink}
                                                    title="Privacy Policy."
                                                    style={screenstyles.termFont} />
                                            </View>
                                        </View>
                                    )} />
                                <Checkbox
                                    iconColor="#797979"
                                    iconSize={15}
                                    onPress={this.onActivateNewsletter}
                                    checked={this.state.inActiveNewsletter}
                                    labelComponent={(
                                        <View style={screenstyles.subscribeStyle}>
                                            <Text style={screenstyles.checkboxText}>{ConstantsList.Register.Newsletter}</Text>
                                        </View>
                                    )} />
                            </View>
                            {this.state.termsConditions ? (
                                <Button
                                    title="Join Now"
                                    style={screenstyles.ForgotButton}
                                    textStyle={screenstyles.ForgotButtonText}
                                    onPress={handleSubmit(this.onSubmit)}
                                />
                            ) : (
                                    <Button
                                        title="Join Now"
                                        style={screenstyles.DisableLogin}
                                        textStyle={screenstyles.ForgotButtonText}
                                        disabled={true}
                                    />
                                )}
                            <View style={screenstyles.registerHaveAccountStyle}>
                                <Text style={screenstyles.checkboxText}>{ConstantsList.Register.Account} </Text>
                                <LinkButton onPress={this.onLoginClick} title="Login" style={screenstyles.termFont} />
                            </View>
                        </ScrollView>

                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

/**
* @function validate: Its called before form submit. Its validates the form value and returns an error object.
* if it finds any error, it stops the form submission and throws it.
* @params {object} values: It takes form vulues as object.
* Validator library is used for email validation instead of regex.
* @return {object} errors: It returns errors object. If no properties in the errors then it calls the onSubmit method
*/
const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = "Please enter a valid first name";
    } else if (!/^[a-zA-Z0-9]+$/.test(values.firstName.trim())) {
        errors.firstName = "Please enter a valid first name";
    }
    if (!values.lastName) {
        errors.lastName = "Please enter a valid last name";
    } else if (!/^[a-zA-Z0-9]+$/.test(values.lastName.trim())) {
        errors.lastName = "Please enter a valid last name";
    }
    if (!values.email) {
        errors.email = "Please enter a valid email";
    } else if (!validator.isEmail(values.email.trim())) {
        errors.email = "Please enter a valid email";
    }
    if (!values.password) {
        errors.password = "Please enter a valid password";
    } else if (/^[a-zA-Z0-9\d\s]+$/.test(values.password.trim())) {
        errors.password = "Use combination of alphanumeric & special characters";
    }

    if (!values.confirmpassword) {
        errors.confirmpassword = "Please enter a valid confirm password";
    } else if (values.confirmpassword !== values.password) {
        errors.confirmpassword = "Password and confirm password don't match";
    }
    return errors;
};

/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({
    formValues: getFormValues("register")(state)
});

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
    * @function onAppInstall: It takes a boolean value and updates the redux store.
    * @params {boolean} payload: It has a boolean value.
    */
    handleRegisterUser: payload => dispatch(registerUser(payload)),
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
        form: "register",
        validate
    })
)(Register);
