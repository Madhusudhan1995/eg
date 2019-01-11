/**
 * @author Machavarapu Adinarayana machavarapuadin <machavarapuadin@photoninfotech.net>
 * @version 1.0.2
 * @summary CardAddManual screen for the application.
 * @description The screen shows user would be able to add the Credit/Debit card manually by keying the card details manually
 * The screen uses react and third party npm modules and also few custom components.
 */

/**
 * @import connect from "react-redux" for connecting react compoenent with redux which will convert
 * our component as container component.
 * @import React compoment from "react" for creating custom react component and to use lifecycle
 * hooks come along with react.
 * @import View,StyleSheet,Text, Alert, ScrollView,Platform,TextInput,SafeAreaView
 * from "react-native" for creating our view.
 * @import compose from "redux" for removing the complexicity of higher order components used in the screen.
 * @import Field, reduxForm from "redux-form" and getFormValues for composing the form and for getting the form value in
 * and object. also it simplifies form validation.
 * @import KeyboardAwareScrollView from "react-native-keyboard-aware-scroll-view" for React-native Keyboard.
 */
import { connect } from "react-redux";
import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Platform,
  TextInput,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import { compose } from "redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
import { Toolbar, ScanInput } from "../components";
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
 * @class CardAddManual
 * @extends Component
 * @summary Represents CardAddManual class.
 * @description This is a CardAddManual class. It extands react Component class for using the functions comes along with it.
 */
class CardAddManual extends Component {
  /**
   * @constructor It is initializing the state with default properties.
   * cvvNumber: Number property for hiding and showing CVV value.
   */
  constructor(props) {
    super(props);
    this.state = {
      cvvNumber: "",
      errors: false,
      defaultCardStatus: false,
      cardNumber: "djhgdsjfsdfgsadfj"
    };
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
  };

  /**
   * @function renderScanInput: Its called in the render function and returns a input component.
   * @params {object} It takes field object which has input properties which further gets passed
   * to the input component.
   * @return {Compoenent} It returns a presenter input component.
   */
  renderScanInput = field => {
    console.log("field::: ", field);
    const {
      meta: { touched, error },
      labelStyle,
      inputStyle,
      placeholder,
      label,
      style,
      secureTextEntry,
      maxLength,
      input: { onChange, ...restInput }
    } = field;
    return (
      <View>
        <ScanInput
          label={label}
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
        <Text style={[screenstyles.errorText, { marginLeft: "40%" }]}>
          {touched ? error : ""}
        </Text>
      </View>
    );
  };

  /**
   * @function saveButtonTapped: It gets called when user presses the icon to see the Alert
   * It updates the state and updated to respective navigation screen.
   */
  saveButtonTapped(values) {
    console.log("values :: ", values);
    var object = {
      cardNo: values.cardNo,
      expiry: values.month + "/" + values.year,
      cardHolderName: values.cardHolderName,
      type: "VISA",
      category: "CREDIT",
      defaultCard: this.state.defaultCardStatus
    };
    console.log("object :: :: : :", object);
    this.props.walletAddCardRequest(
      this.props.token,
      object,
      WALLET_ADDCARD_URL
    );
  }

  /**
   * @function renderMonthTextInput
   * React renderMonthTextInput method will reuse the input components for forgotPassword screen
   */
  renderMonthTextInput = field => {
    const {
      meta: { touched, error },
      maxLength,
      input: { onChange, ...restInput }
    } = field;
    return (
      <View>
        <TextInput
          onChangeText={onChange}
          style={{ width: "100%", height: 58, fontSize: 16, paddingLeft: 5 }}
          placeholderTextColor="rgba(51,51,51,0.3)"
          placeholder="MM"
          maxLength={maxLength}
          {...restInput}
        />
        <Text
          style={{
            color: "red",
            fontSize: 12,
            paddingHorizontal: 5,
            position: "absolute",
            bottom: 0
          }}
        >
          {touched ? error : ""}
        </Text>
      </View>
    );
  };
  renderYearTextInput = field => {
    const {
      meta: { touched, error },
      maxLength,
      input: { onChange, ...restInput }
    } = field;
    return (
      <View>
        <TextInput
          onChangeText={onChange}
          style={{ width: "100%", height: 58, fontSize: 16, paddingLeft: 5 }}
          placeholderTextColor="rgba(51,51,51,0.3)"
          placeholder="YY"
          maxLength={maxLength}
          {...restInput}
        />
        <Text
          style={{
            color: "red",
            fontSize: 12,
            paddingHorizontal: 5,
            position: "absolute",
            bottom: 0
          }}
        >
          {touched ? error : ""}
        </Text>
      </View>
    );
  };

  setDefaultButtonTapped = () => {
    console.log("setDefaultButtonTapped");
    if (this.state.defaultCardStatus) {
      this.setState({ defaultCardStatus: false });
    } else {
      this.setState({ defaultCardStatus: true });
    }
  };

  /**
   * @function render: Its one of the main functions of react component. It renders the JSX on the screen
   * In render() we are fetching "handleSubmit" from the props and passing it to "onPress" event of then
   * submit button. "handleSubmit" submits the form after checking the validation.
   */
  render() {
    const { handleSubmit } = this.props;
    return (
      <SafeAreaView style={styles.appContainer}>
        <KeyboardAwareScrollView
          enableOnAndroid
          enableAutomaticScroll
          keyboardOpeningTime={0}
          extraHeight={Platform.select({ ios: 200, android: 200 })}
        >
          <View style={styles.appContainer}>
            <Toolbar
              style={styles.noBorderForToolbar}
              onClickLeftIcon={navigateBack}
              iconName="loginpage"
            />
            <ScrollView
              contentContainerStyle={{
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 100
              }}
            >
              <View style={styles.cardDetailTextView}>
                <Text style={styles.cardDetailLargeText}>
                  {ConstantsList.CardAddManual.CardDetails}
                </Text>
                <Text style={styles.cardDetailText}>
                  {ConstantsList.CardAddManual.verifyDetails}
                </Text>
              </View>
              <View>
                <View
                  style={[
                    styles.filedHeight,
                    styles.separatorTopandBottomColor
                  ]}
                >
                  <Field
                    name="cardHolderName"
                    label="Name"
                    placeholder="Required"
                    maxLength={30}
                    style={styles.fieldStyles}
                    labelStyle={styles.labelStyles}
                    inputStyle={styles.inputStyles}
                    component={this.renderScanInput}
                  />
                </View>
                <View
                  style={[
                    styles.filedHeight,
                    styles.separatorBottomBoderColor,
                    styles.paddingBetweenView
                  ]}
                >
                  <Field
                    name="cardNo"
                    label="Card Number"
                    placeholder="Required"
                    maxLength={19}
                    style={styles.fieldStyles}
                    labelStyle={styles.labelStyles}
                    inputStyle={styles.inputStyles}
                    component={this.renderScanInput}
                    normalize={normalizePhone}
                  />
                </View>
                <View
                  style={[
                    styles.cardExpirayview,
                    styles.separatorTopandBottomColor,
                    styles.paddingBetweenView
                  ]}
                >
                  <View style={{ width: "42%", paddingLeft: 15 }}>
                    <Text style={{ color: "black", fontSize: 16 }}>
                      Expiration Date
                    </Text>
                  </View>
                  <View style={{ width: "58%", flexDirection: "row" }}>
                    <View style={{ flex: 1, backgroundColor: "white" }}>
                      <Field
                        label=""
                        name="month"
                        placeholder="MM"
                        style={{
                          height: 58,
                          alignItems: "center",
                          backgroundColor: "white",
                          paddingLeft: 5
                        }}
                        component={this.renderMonthTextInput}
                        keyboardType="number-pad"
                        maxLength={2}
                      />
                    </View>
                    <View style={{ flex: 1, backgroundColor: "white" }}>
                      <Field
                        label=""
                        name="year"
                        placeholder="YY"
                        style={{
                          height: 58,
                          alignItems: "center",
                          backgroundColor: "white",
                          paddingLeft: 5
                        }}
                        component={this.renderYearTextInput}
                        keyboardType="number-pad"
                        maxLength={4}
                      />
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.filedHeight, styles.separatorBottomBoderColor]}
                >
                  <Field
                    name="houseno"
                    label="House No"
                    placeholder="Required"
                    maxLength={30}
                    style={styles.fieldStyles}
                    labelStyle={styles.labelStyles}
                    inputStyle={styles.inputStyles}
                    component={this.renderScanInput}
                  />
                </View>
                <View
                  style={[styles.filedHeight, styles.separatorBottomBoderColor]}
                >
                  <Field
                    name="streetname"
                    label="Street Name"
                    placeholder="Required"
                    maxLength={30}
                    style={styles.fieldStyles}
                    labelStyle={styles.labelStyles}
                    inputStyle={styles.inputStyles}
                    component={this.renderScanInput}
                  />
                </View>
                <View
                  style={[styles.filedHeight, styles.separatorBottomBoderColor]}
                >
                  <Field
                    name="city"
                    label="City"
                    placeholder="Required"
                    maxLength={30}
                    style={styles.fieldStyles}
                    labelStyle={styles.labelStyles}
                    inputStyle={styles.inputStyles}
                    component={this.renderScanInput}
                  />
                </View>
                <View
                  style={[styles.filedHeight, styles.separatorBottomBoderColor]}
                >
                  <Field
                    name="state"
                    label="State/Province"
                    placeholder="Required"
                    maxLength={30}
                    style={styles.fieldStyles}
                    labelStyle={styles.labelStyles}
                    inputStyle={styles.inputStyles}
                    component={this.renderScanInput}
                  />
                </View>
                <View
                  style={[
                    styles.filedHeight,
                    styles.separatorBottomBoderColor,
                    styles.paddingBetweenView
                  ]}
                >
                  <Field
                    name="zipcode"
                    label="Zip Code"
                    placeholder="Required"
                    maxLength={8}
                    style={styles.fieldStyles}
                    labelStyle={styles.labelStyles}
                    inputStyle={styles.inputStyles}
                    component={this.renderScanInput}
                  />
                </View>
                <View style={styles.cardSettingsView}>
                  <Text style={styles.cardSettingTextStyles}>
                    {ConstantsList.CardAddManual.CardSettings}
                  </Text>
                </View>
                <View
                  style={[
                    styles.setDefaultCard,
                    styles.separatorTopandBottomColor
                  ]}
                >
                  <View style={styles.setSubDefaultCardViewText}>
                    <Text style={styles.setDefaultBoldText}>
                      {ConstantsList.CardAddManual.DefaultCard}
                    </Text>
                    <Text style={styles.setDefaultText}>
                      {ConstantsList.CardAddManual.SampleText}
                    </Text>
                  </View>
                  <View style={styles.setSubDefaultViewSwitch}>
                    <TouchableOpacity onPress={this.setDefaultButtonTapped}>
                      {this.state.defaultCardStatus ? (
                        <Image
                          source={require("../assets/images/Wallet/SwitchOn.png")}
                          resizeMode="contain"
                          style={styles.setDefaultImage}
                        />
                      ) : (
                        <Image
                          source={require("../assets/images/Wallet/SwitchOff.png")}
                          resizeMode="contain"
                          style={styles.setDefaultImage}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.saveBottomButtonView1}>
                  <View style={styles.saveButtonView}>
                    <TouchableOpacity
                      onPress={handleSubmit(this.saveButtonTapped)}
                    >
                      <Text style={styles.saveButtonTextInputStyles}>Save</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.enterManuallyView}>
                    <View style={styles.enterManuallySubView}>
                      <Text style={styles.entermanualtext}>
                        {ConstantsList.CardAddManual.EnterCard}
                      </Text>
                    </View>
                    <View style={styles.enterManuallySubView1}>
                      <Text
                        onPress={() => navigateTo("scanCard")}
                        style={screenstyles.addtextcolor}
                      >
                        {ConstantsList.CardAddManual.Automatically}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
/** 
<View style={{ height: 100, marginTop: 50, paddingLeft: 15, paddingRight: 15, marginBottom: 30 }}>
<View style={{ height: 60, backgroundColor: "rgb(36, 104, 154)", alignItems: "center", justifyContent: "center", borderRadius: 37.5 }} onPress={() => this.continueButtonTapped()}>
    <Text style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>Save</Text>
</View>
<View style={{ flexDirection: "row", marginTop: 15 }}>
    <View style={{ flex: 1, paddingRight: 5 }}>
        <Text style={styles.entermanualtext}>{ConstantsList.CardAddManual.EnterCard}</Text>
    </View>
    <View style={{ flex: 1, paddingLeft: 5 }}>
        <Text onPress={() => navigateTo("scanCard")} style={screenstyles.addtextcolor} >{ConstantsList.CardAddManual.Automatically}</Text>
    </View>
</View>
</View>
*/

/**
 * @function validate: Its called before form submit. Its validates the form value and returns an error object.
 * if it finds any error, it stops the form submission and throws it.
 * @params {object} values: It takes form vulues as object.
 * Validator library is used for email validation instead of regex.
 * @return {object} errors: It returns errors object. If no properties in the errors then it calls the onSubmit method
 */
const validate = values => {
  const errors = {};

  /**
   * Name field validations
   */
  if (!values.cardHolderName) {
    errors.cardHolderName = "required";
  } else if (values.cardHolderName.length < 4) {
    errors.cardHolderName = "Length should be grather than 4";
  } else if (values.cardHolderName.length > 30) {
    errors.cardHolderName = "Length should be less than 30";
  } else if (!/^[a-zA-Z ]+$/.test(values.cardHolderName.trim())) {
    errors.cardHolderName = "Please enter a valid name";
  }
  /**
   * Card Number filed Validation
   */
  if (!values.cardNo) {
    errors.cardNo = "required";
  } else if (values.cardNo.length < 19 || values.cardNo.length > 20) {
    errors.cardNo = "Please enter a valid card number";
  }

  if (!values.month) {
    errors.month = "required";
  } else if (values.month.length < 2 || values.month.length > 2) {
    errors.month = "Please enter a valid month";
  }

  if (!values.year) {
    errors.year = "required";
  } else if (values.year.length < 2 || values.year.length > 4) {
    errors.year = "Please enter a valid year";
  }

  if (!values.houseno) {
    errors.houseno = "required";
  } else if (values.houseno.length < 4) {
    errors.houseno = "Length should be grather than 4";
  } else if (values.houseno.length > 30) {
    errors.houseno = "Length should be less than 30";
  }

  /**
   * streetname field validations
   */
  if (!values.streetname) {
    errors.streetname = "required";
  } else if (values.streetname.length < 4) {
    errors.streetname = "Length should be grather than 4";
  } else if (values.streetname.length > 30) {
    errors.streetname = "Length should be less than 30";
  }

  /**
   * City field validations
   */
  if (!values.city) {
    errors.city = "required";
  } else if (values.city.length < 4) {
    errors.city = "Length should be grather than 4";
  } else if (values.city.length > 30) {
    errors.city = "Length should be less than 30";
  } else if (!/^[a-zA-Z ]+$/.test(values.city.trim())) {
    errors.city = "Please enter a valid city";
  }

  /**
   * State field validations
   */
  if (!values.state) {
    errors.state = "required";
  } else if (values.state.length < 4) {
    errors.state = "Length should be grather than 4";
  } else if (values.state.length > 30) {
    errors.state = "Length should be less than 30";
  } else if (!/^[a-zA-Z ]+$/.test(values.state.trim())) {
    errors.state = "Please enter a valid state";
  }

  /**
   * Zip code validations
   */
  if (!values.zipcode) {
    errors.zipcode = "required";
  } else if (!validator.isNumeric(values.zipcode.trim())) {
    errors.zipcode = "Please enter a valid zipcode";
  } else if (values.zipcode.length < 4) {
    errors.zipcode = "Length should be grather than 4";
  } else if (values.zipcode.length > 8) {
    errors.zipcode = "Length should be less than 8";
  }
  return errors;
};

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
  return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(
    8,
    12
  )} ${onlyNums.slice(12, 16)}`;
};

/**
 * Converting redux state to props for the CardAddManual component
 * @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
 * @params {object} state: redux state fetched from store
 * @returns {object} props: converted props which can be used in the above component.
 */
const mapStateToProps = state => ({
  token: state.auth.token,
  formValues: getFormValues("CardAddManual")(state)
  //initialValues: {cardNumber: this.props.scanCardDetails.cardNumber}
});

/**
 * Converting functions to props for the CardAddManual component
 * @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
 * with given payloads.
 * The methods are converted into props and passed to the Login Component for use
 * @params {function} dispatch: It dispatches action to the reducer
 * @returns {object} props: Its converted props and have methods.
 */
const mapDispatchToProps = dispatch => ({
  walletAddCardRequest: (token, payload) =>
    dispatch(postWalletAddcard(token, payload)),
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: "CardAddManual", validate })
)(CardAddManual);
