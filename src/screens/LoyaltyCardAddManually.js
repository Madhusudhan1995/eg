/**
* @author Machavarapu Adinarayana machavarapuadin <machavarapuadin@photoninfotech.net>
* @version 1.0.2
* @summary LoyaltyCardAddManually screen for the application.
* @description The screen shows user would be able to add the Go Fuel Card card manually by keying the card details manually
* The screen uses react and third party npm modules and also few custom components.
*/

/**
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, Alert, ScrollView,Platform,TextInput,SafeAreaView
* from "react-native" for creating our view.
* @import compose from "redux" for removing the complexicity of higher order components used in the screen.
* @import Field, reduxForm from "redux-form" and getFormValues for composing the form and for getting the form value in
* and object. also it simplifies form validation.
* @import KeyboardAwareScrollView from "react-native-keyboard-aware-scroll-view" for React-native Keyboard.
*/
import { connect } from "react-redux";
import React, { Component } from "react";
import { View, Text, Alert, ScrollView, Platform, SafeAreaView, TouchableOpacity } from "react-native";
import { compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

/**
* @import Button, DatePickerAndroid,ScanInput Toolbar for building our screen.
* @description ScanInput: renders input field in the screen.
* Button: renders custom button in the screen.
* DatePickerAndroid:renders Date Picker For the screen.
* ScanInput: renders custom toolbars in the screen.
* @import {navigateTo, redirectTo, navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* redirectTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* It deletes the back history
* and no animation happens while screen transition.
* navigateBack(): It simply naviagates the user to the back screen.
* user goes to the GoFuelCardAddManually screen and it updates on the client side as the app has been installed so that we
* make sure user does not see the onboarding screen every time it launches the app.
*/
import { Toolbar, DatePickerAndroid, ScanInput } from "../components";
import { navigateBack, navigateTo } from "../helpers";
import ConstantsList from "../constants/lagunage_constant";
import validator from "validator";
import { postWalletAddcard } from "../actions/walletActions";
import { onAppInstall } from "../actions/onBoardingActions";
import { WALLET_ADDCARD_URL } from "../constants/url-constants";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";
import styles from "../styles/CardAddManualStyles";

/**
* @class LoyaltyCardAddManually
* @extends Component
* @summary Represents LoyaltyCardAddManually class.
* @description This is a GoFuelCardAddManually class. It extands react Component class for using the functions comes along with it.
*/
class LoyaltyCardAddManually extends Component {

      /**
      * @constructor It is initializing the state with default properties.
      * cvvNumber: Number property for hiding and showing CVV value.
      */
      constructor(props) {
            super(props);
            this.state = {
                  errors: false,
            }
            this.saveButtonTapped = this.saveButtonTapped.bind(this);
      }

      /**
      * @function componentWillReceiveProps: Its called when user fills Props validation gets passed.
      * @params {object} form input values set the state
      */
      componentWillReceiveProps(nextProps) {
            const that = this;
            if (nextProps.errors) {
                  that.setState({ errors: true });
            }
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
      * @function renderScanInput: Its called in the render function and returns a input component.
      * @params {object} It takes field object which has input properties which further gets passed
      * to the input component.
      * @return {Compoenent} It returns a presenter input component.
      */
      renderScanInput = (field) => {
            const { meta: { touched, error }, labelStyle, inputStyle, placeholder, label, style, secureTextEntry, maxLength, input: { onChange, ...restInput } } = field;
            return (
                  <View >
                        <ScanInput label={label}
                              labelStyle={labelStyle}
                              inputStyle={inputStyle}
                              placeholderTextColor="rgba(51, 51, 51, 0.6)"
                              selectionColor="rgb(51, 51, 51)"
                              returnKeyType={this.props.returnKeyType}
                              placeholder={placeholder}
                              secureTextEntry={secureTextEntry}
                              keyboardType={this.props.keyboardType}
                              maxLength={maxLength}
                              value={this.props.value}
                              onChangeText={onChange}
                              style={style}
                              {...restInput}
                        />
                        <Text style={[screenstyles.errorText, { marginLeft: "40%" }]}>{touched ? error : ""}</Text>
                  </View>
            );
      }

      /**
      * @function saveButtonTapped: When user tap on the save button will show alert with card added successfully
      * It once card details added it will GoFuelCard which is in wallet.
      */
      saveButtonTapped(values) {
            console.log("values :: ", values);
            var object = {
                  cardNo: values.cardNo,
                  expiry: "22/22",
                  cardHolderName: "",
                  type: "LOYALTY",
                  category: "LOYALTY",
                  defaultCard: false

            }
            console.log("object :: :: : :", object);
            this.props.walletAddCardRequest(this.props.token, object, WALLET_ADDCARD_URL);
            /* Alert.alert(
                   "Alert!",
                   "Loyalty Card Added Successfully",
                   [
                         {
                               text: "Ok",
                               onPress: () => {
                                     navigateTo("wallet");
                               }
                         }
                   ],
             );*/
      }

      /**
      * @function render: Its one of the main functions of react component. It renders the JSX on the screen
      * In render() we are fetching "handleSubmit" from the props and passing it to "onPress" event of then
      * submit button. "handleSubmit" submits the form after checking the validation.
      */
      render() {
            // destructored variable names
            const { handleSubmit, submitting, pristine } = this.props;
            return (
                  <SafeAreaView style={styles.appContainer}>
                        <KeyboardAwareScrollView enableOnAndroid
                              enableAutomaticScroll
                              keyboardOpeningTime={0}
                              extraHeight={Platform.select({ ios: 200, android: 200 })}>
                              <View style={styles.appContainer}>
                                    <Toolbar
                                          style={styles.noBorderForToolbar}
                                          onClickLeftIcon={navigateBack}
                                          iconName="loginpage"
                                    />
                                    <ScrollView>
                                          <View style={styles.cardDetailTextView}>
                                                <Text style={styles.cardDetailLargeText}>{ConstantsList.CardAddManual.CardDetails}</Text>
                                                <Text style={styles.cardDetailText}>{ConstantsList.CardAddManual.verifyDetails}</Text>
                                          </View>
                                          <View >
                                                <View style={[styles.filedHeight, styles.separatorTopandBottomColor]}>
                                                      <Field
                                                            name="cardNo"
                                                            label="Card Number"
                                                            placeholder="Required"
                                                            maxLength={19}
                                                            style={styles.fieldStyles}
                                                            labelStyle={styles.labelStyles}
                                                            inputStyle={styles.inputStyles}
                                                            component={this.renderScanInput}
                                                            keyboardType="numeric"
                                                            normalize={normalizePhone}

                                                      />
                                                </View>
                                          </View>
                                    </ScrollView>
                              </View>
                        </KeyboardAwareScrollView>
                        <View style={styles.saveBottomButtonView}>
                              <TouchableOpacity onPress={handleSubmit(this.saveButtonTapped)}>
                                    <View style={styles.saveButtonView} >
                                          <Text style={styles.saveButtonTextInputStyles}>Save</Text>
                                    </View>
                              </TouchableOpacity>

                              <View style={styles.enterManuallyView}>
                                    <View style={styles.enterManuallySubView}>
                                          <Text style={styles.entermanualtext}>{ConstantsList.CardAddManual.EnterCard}</Text>
                                    </View>
                                    <View style={styles.enterManuallySubView1}>
                                          <Text onPress={() => navigateTo("scanCard")} style={screenstyles.addtextcolor} >{ConstantsList.CardAddManual.Automatically}</Text>
                                    </View>
                              </View>
                        </View>
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
const validate = values => {
      const errors = {};

      if (!values.cardNo) {
            errors.cardNo = "required";
      } else if (values.cardNo.length < 19 || values.cardNo.length > 19) {
            errors.cardNo = "Please enter a valid card number";
      }


      return errors;
}

/**
* @function normalizePhone: Its called before form submit. Its validates the form CardNumber VAlidation.
* if it finds any error, it stops the form submission and throws it.
* @params {object} values: It takes form vulues as object.
* Validator library is used for Card Number validation instead of regex.
* @return {object} errors: It returns errors object. If no properties in the errors then it calls the onSubmit method
*/
const normalizePhone = (value, previousValue) => {
      if (!value) {
            return value;
      }
      const onlyNums = value.replace(/[^\d]/g, "");
      if (!previousValue || value.length > previousValue.length) {
            if (onlyNums.length === 4) {
                  return `${onlyNums} `;
            }
            if (onlyNums.length === 6) {
                  return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4)} `;
            }
      }
      if (onlyNums.length <= 4) {
            return onlyNums;
      }
      if (onlyNums.length <= 8) {
            return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4)}`;
      }
      return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(8, 12)} ${onlyNums.slice(12, 16)}`;
};

/**
* Converting redux state to props for the GoFuelCardAddManually component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({
      token: state.auth.token,
      formValues: getFormValues("loyaltyCardAddManually")(state)
});

/**
* Converting functions to props for the GoFuelCardAddManually component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = (dispatch) => ({
      walletAddCardRequest: (token, payload) => dispatch(postWalletAddcard(token, payload)),
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
      reduxForm({ form: "loyaltyCardAddManually", validate })
)(LoyaltyCardAddManually);