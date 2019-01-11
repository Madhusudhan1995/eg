/**
* @author Machavarapu Adinarayana <machavarapuadin@photoninfotech.net>
* @version 1.0.2
* @summary Adding PaymentSuccessfull for the application.
* @description The screen would be able to view transaction complete screen post successful payment
* The screen uses react and third party npm modules and also few custom components.
*/

/**
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, ScrollView, Image, TouchableOpacity
* from "react-native" for creating our view.
* @import compose from "redux" for removing the complexicity of higher order components used in the screen.
* @import Field, reduxForm from "redux-form" and getFormValuesfor composing the form and for getting the form value in
* and object. also it simplifies form validation.
*/
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView,DeviceEventEmitter } from 'react-native';
import { compose } from "redux";
import { reduxForm, getFormValues } from "redux-form";

/**
* @ Toolbar for building our screen.
* @description Toolbar: renders Toolbar field in the screen.
* @import {navigateTo} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* user goes to the FuelFilling screen and it updates on the client side as the app has been installed so that we
* make sure user does not see the onboarding screen every time it launches the app.
*/
import { Toolbar } from "../components";
import { navigateTo } from "../helpers";
import ConstantsList from "../constants/lagunage_constant";

/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "../styles/PaymentSuccessfullStyles";

/**
* @class PaymentSuccessfull
* @extends Component
* @summary Represents PaymentSuccessfull class.
* @description This is a PaymentSuccessfull class. It extands react Component class for using the functions comes along with it.
*/
class PaymentSuccessfull extends Component {

      /**
   * @function closeButtonTapped: Its called when user tap on close button.
   * It updates the state and navigate to respective home screen.
   */
      closeButtonTapped() {
            DeviceEventEmitter.emit("paymentSuccess");
            navigateTo('home')
      }
      /**
      * @function render: Its one of the main functions of react component. It renders the JSX on the screen
      * In render() we are fetching data from the props and passing it to "onPress" event of then
      */
      render() {
            return (
                  <SafeAreaView style={[styles.appContainer, styles.whiteBackground]}>
                        <View style={[styles.appContainer, styles.whiteBackground]}>
                              <ScrollView contentContainerStyle={{paddingLeft :0,paddingRight :0,paddingTop:0,paddingBottom :50}}>
                              <View style={[styles.appContainer, styles.whiteBackground]}>
                              <TouchableOpacity style={styles.PSCloseButton} onPress={this.closeButtonTapped}>
                                    <Image source={require('../assets/images//QRCodeScanning/CloseBtnLightGray.png')} style={styles.PSCloseImage} />
                              </TouchableOpacity>
                                    <View style={styles.PSContentView} >
                                          <Image source={require('../assets/images/QRCodeScanning/transcationSuccessIcon.png')} style={styles.PSSuccessLogo} />
                                          <Text style={styles.PSMoneyText}>{ConstantsList.PaymentSuccessfull.paymentSuccessText}</Text>
                                          <Text style={styles.PSPaymentText}>{ConstantsList.PaymentSuccessfull.paymentText}</Text>
                                          <Text style={styles.PSPaymentText1}>{ConstantsList.PaymentSuccessfull.paymentText1}</Text>

                                    </View >
                                    <View style={styles.PSContentSubview}>
                                          <Text style={styles.PSNormalBoldText}>{ConstantsList.PaymentSuccessfull.stationName}</Text>
                                          <Text style={styles.PSNormalText}>{ConstantsList.PaymentSuccessfull.cardEnding}</Text>
                                          <Text style={styles.PSMediumText}>{ConstantsList.PaymentSuccessfull.pumpNumber}</Text>
                                    </View>
                                    <View style={styles.PSflatlistSubView}>
                                          <View style={styles.PSflatListcontentView}>
                                                <Text style={styles.PSNormalBoldText}>{ConstantsList.PaymentSuccessfull.pscardNumber}</Text>
                                                <Text style={styles.PSflatListNormalTextColor}>{ConstantsList.PaymentSuccessfull.psvisaEnding}</Text>
                                          </View>
                                          <View style={styles.PSflatlistContainerSubview}>
                                                <Image source={require('../assets/images/creditcard.png')} style={styles.PSpumpImage} />
                                          </View>
                                    </View>
                                    <View style={styles.PSPriceView}>
                                          <View style={styles.PSPriceSubView}>
                                                <Text style={styles.PSPriceText}>{ConstantsList.PaymentSuccessfull.priceLabel}</Text>
                                                <Text style={styles.PSPriceText}>{ConstantsList.PaymentSuccessfull.taxLabel}</Text>
                                          </View>
                                          <View style={styles.PSPriceSubView1}>
                                                <Text style={styles.PSPriceText}>{ConstantsList.PaymentSuccessfull.psprice}</Text>
                                                <Text style={styles.PSPriceText}>{ConstantsList.PaymentSuccessfull.taxprice}</Text>
                                          </View>
                                    </View>
                                    <View style={styles.PSTotalView}>
                                          <Text style={styles.PSTotalTextInputStyles}>{ConstantsList.PaymentSuccessfull.totalLabel}</Text>
                                          <Text style={styles.PSTotalTextInputStyles}>{ConstantsList.PaymentSuccessfull.totalPriceLabel}</Text>
                                    </View>
                                    </View>
                              </ScrollView>
                        </View>
                  </SafeAreaView>
            );
      }
}

/**
* Converting redux state to props for the paymentSuccessfull component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({
      formValues: getFormValues("paymentSuccessfull")(state)
});

/**
* Converting functions to props for the paymentSuccessfull component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({});

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
      reduxForm({ form: "paymentSuccessfull" })
)(PaymentSuccessfull);

