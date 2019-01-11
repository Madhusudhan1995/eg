/**
* @author Machavarapu Adinarayana <machavarapuadin@photoninfotech.net>
* @version 1.0.2
* @summary Adding FuelFilling Scanning for the application.
* @description The screen would be able to view a static screen when fuelling is in process
 The screen uses react and third party npm modules and also few custom components.
*/

/**
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, Image, SafeAreaView, ImageBackground
* from "react-native" for creating our view.
* @import compose from "redux" for removing the complexicity of higher order components used in the screen.
* @import Field, reduxForm from "redux-form" and getFormValuesfor composing the form and for getting the form value in
* and object. also it simplifies form validation.
*/
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground } from 'react-native';
import { compose } from "redux";
import { reduxForm, getFormValues } from "redux-form";

/**
* @import {navigateTo} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* user goes to the FuelFilling screen and it updates on the client side as the app has been installed so that we
* make sure user does not see the onboarding screen every time it launches the app.
*/
import { navigateTo } from "../helpers";
import ConstantsList from "../constants/lagunage_constant";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "../styles/FuelFillingStyles";

/**
* @class FuelFilling
* @extends Component
* @summary Represents FuelFilling class.
* @description This is a FuelFilling class. It extands react Component class for using the functions comes along with it.
*/
class FuelFilling extends Component {

       /**
    * @constructor It is initializing the state with default properties.
    * cvvNumber: Number property for hiding and showing CVV value.
    */
    constructor(props) {
      super(props);
      this.state = {
           successImage: false,
      }
  }
      /**
      * @function componentDidMount: React lifecycle function. It gets called before render() and first
      * time when component loads.ç
      * @function setTimeout: It returns a time and updates the state
      * It will called after 5 seconds and updating the value of successImage key. 
      * * @function setTimeout: It returns a time and updates the state with
      * It will called after 10 seconds and navigating to respective . 
      */  
      componentDidMount() {
             setTimeout( () => {
                   this.setState({successImage : true})
             },5000);

              setTimeout( () => {
                    navigateTo('paymentSuccessfull');
              },10000);
      }
        /**
      * @function showThePaymentSuccessImage: when the method render called this will called based on 
      * @function setTimeout: It returns a time and updates the state with
      * It will called after 10 seconds and navigating to respective . 
      */  
     

       showThePaymentSuccessImage(){
             if (this.state.successImage){
             return(
            <ImageBackground style={styles.FFPumpLogoImage} source= {require('../assets/images/QRCodeScanning/transcationSuccessIcon.png')}>
             </ImageBackground>
             )
            }else{
                   return(
                       <ImageBackground style={styles.FFPumpLogoImage} source= {require('../assets/images/bgroundblueforpump.png')}>
                        <View style={styles.FFPumpLogoImageSubView1}>
                        <Text style={styles.FFPumpNumberText}>{ConstantsList.FuelFilling.pumpName}</Text>
                        </View>
                        <View style={styles.FFPumpLogoImageSubView2}>
                        <Text style={styles.FFPumpNumberTextBold}>{ConstantsList.FuelFilling.pumpNumber}</Text>
                        </View>
                        </ImageBackground>
                        )   
            }
       }
      /**
      * @function render: Its one of the main functions of react component. It renders the JSX on the screen
      * In render() we are fetching data from the props and passing it to "onPress" event of then
      */
      render() {
            return (
                  <SafeAreaView style={styles.FFappContainer}>
                        <View style={styles.FFappContainer}>
                              <View style={styles.FFstationView}>
                                    <View style={styles.FFstationSubView1}>
                                          <Image source={require('../assets/images/QRCodeScanning/mapLocationIcon.png')} style={styles.FFessoImage} />
                                    </View>
                                    <View style={styles.FFstationSubView2}>
                                          <Text style={styles.FFStationBoldText}>{ConstantsList.FuelFilling.stationLable}</Text>
                                          <Text style={styles.FFStationNormalText}>{ConstantsList.FuelFilling.stationName}</Text>
                                          <Text style={styles.FFStationNormalText1}>{ConstantsList.FuelFilling.stationAddress}</Text>
                                    </View>
                              </View>
                               <Text style={styles.FFStationMediumText}>{ConstantsList.FuelFilling.sampleText}</Text>
                              <View style={styles.FFContainerView} >
                                    <ImageBackground style={styles.FFPumpBgImage} source={require('../assets/images/Pumpboxbg.png')}>
                                         {this.showThePaymentSuccessImage()}
                                    </ImageBackground>
                              </View>
                        </View>
                  </SafeAreaView>
            );
      }
}

/**
* Converting redux state to props for the fuelFilling component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({
      formValues: getFormValues("fuelFilling")(state)
});

/**
* Converting functions to props for the fuelFilling component
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
      reduxForm({ form: "fuelFilling" })
)(FuelFilling);