/**
* @author machavarapuadin <machavarapuadin@photoninfotech.net>
* @version 1.0.2
* @summary ScanCard Screen for the application.
* @description The screen would be able to scan the card and add it to the list.
* to scan card in the application. Once scan is completed user would navigate respective screen,
* suppose scan in not sucessfully, it's through message "Please add card manually"
* user can click on Add Manually link and Navigate to respective card add manual screen to Add Card Details Manually
* The screen uses react and third party npm modules and also few custom components.
*/

/**
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import Text, View, Image, StyleSheet, Alert, Platform, TouchableOpacity,
* SafeAreaView from "react-native" for creating our view.
* @import Icon from "react-native-elements" to use font icons in this screen whereever required.
* @import CardIOModule, CardIOView, CardIOUtilities from 'react-native-awesome-card-io' to Scaan the card Details
*/
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Text, View, Image, Alert, Platform, TouchableOpacity, SafeAreaView } from 'react-native';
import { Icon } from "react-native-elements";
import { CardIOModule, CardIOView, CardIOUtilities } from 'react-native-awesome-card-io';

/**
* @ Toolbar for building our screen.
* @description Toolbar: renders Toolbar field in the screen.
* @import {navigateTo,navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* navigateBack(): It simply naviagates the user to the back screen.
* user goes to the ScanCard screen and it updates on the client side as the app has been installed so that we
* make sure user does not see the onboarding screen every time it launches the app.
*/
import { Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";
import ConstantsList from "../constants/lagunage_constant";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";
import Config from 'react-native-config';

/**
* @class ScanCard
* @extends Component
* @summary Represents ScanCard class.
* @description This is a ScanCard class. It extands react Component class for using the functions comes along with it.
*/
class ScanCard extends Component {

    /**
    * @function componentWillMount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    * @function Platform.OS === 'ios' It returns a boolean value and updates the redux store
    * appInstalled property. This property helps to show the iOS Device.
    */
    componentWillMount() {
        if (Platform.OS === 'ios') {
            CardIOUtilities.preload();
        }
    }

    /**
    * @function onSubmit: Its called when user tries to another screen without scanning the card.
    * @params {object} form input values.
    * @function Alert.alert: It makes the the alert message
    * the server for Card Scanning.
    * @params {object} form input values.
    */
    onSubmit = values => {
        Alert.alert(' "Please scan the card to add to the wallet" ');
    }

    /**
    * @function scanCard: Its called  to get the Scanning Card details of the user.
    * It takes CardIOModule as params and fetches the data.
    * @.catch {string} CardIOModule: which goes to scan the user card.
    */

    scanCard = async () => {

        try {
          const card = await CardIOModule.scanCard()
        //   var cardDetailsObject = {
        //     cardNumber : card.cardNumber,
        //     cardType : card.cardType,
        //     cvv : card.cvv,
        //     expiryMonth : card.expiryMonth,
        //     expiryYear : card.expiryYear
        //   }
         // console.log("cardDetailsObject ",cardDetailsObject);         
           console.log(card)
          if (this.props.comingFrom === "creditDebitScreen") {
             navigateTo("cardAddManual")
        } else if (this.props.comingFrom === "loyaltyCards"){
             navigateTo("loyaltyCardAddManually")
        }else{
            navigateTo("goFuelCardAddManually")
        }
        } catch (err) {
          console.log(err)
          Alert.alert(
            "Scan",
            "Could not scan the card. Please add the card manually",
            [
                {
                    text: "Cancel",
                    onPress: () => { },// console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Yes",
                    onPress: () => {
                        if (this.props.comingFrom === "creditDebitScreen") {
                            navigateTo("cardAddManual")
                        } else if (this.props.comingFrom === "loyaltyCards"){
                            navigateTo("loyaltyCardAddManually")
                        }else{
                            navigateTo("goFuelCardAddManually")
                        }
                    }
                }
            ],
            { cancelable: false }
        );
        }
    }
   /**
    *      <TouchableOpacity onPress={this.scanCard.bind(this)}>
          <Text>Scan card!</Text>
        </TouchableOpacity>
    */
    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are fetching data from the props and passing it to "onPress" event of then
    */
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={screenstyles.scaningcardparentview}>
                    <View style={screenstyles.scaningcardimage}>
                        <View style={screenstyles.scaningcardcloseicon}>
                            <TouchableOpacity
                                onPress={navigateBack}>
                                <Icon name="cancel" size={30} />
                            </TouchableOpacity>

                        </View>

                        <View style={screenstyles.scaningview}>
                        <TouchableOpacity onPress={this.scanCard.bind(this)}>
                             <Text style={{alignSelf:'center', fontSize : 16, color : "white"}}>Scan card</Text>
                             </TouchableOpacity>
                        </View>

                    </View>
                    <View style={screenstyles.scaningparentviewcamera}>
                      <TouchableOpacity onPress={this.scanCard}>
                        <View style={screenstyles.scanimage}>
                            <Image source={require('./../assets/images/Scancard.png')} style={screenstyles.scaningviewcamera} />
                        </View>
                        </TouchableOpacity>
                        <View style={screenstyles.scaningcardaddtextviewparent}>
                            <Text style={screenstyles.scaningtextalign}>
                                <Text style={screenstyles.scaningcardaddtextchild}>{ConstantsList.ScanCard.AddCard}</Text>{"\n"}
                                <Text style={screenstyles.scaningcardpositiontextchild}>{ConstantsList.ScanCard.PositionText}</Text>
                            </Text>
                        </View>
                        <View style={screenstyles.scaningaddbuttonparentview}>

                            <TouchableOpacity onPress={() => {
                                if (this.props.comingFrom === "creditDebitScreen") {
                                    navigateTo("cardAddManual")
                                } else if (this.props.comingFrom === "loyaltyCards"){
                                    navigateTo("loyaltyCardAddManually")
                                }else{
                                    navigateTo("goFuelCardAddManually")
                                }
                            }}>
                                <Text style={screenstyles.scaningcarddetailstext}>
                                    <Text>{ConstantsList.ScanCard.CardDetails} </Text>
                                    <Text style={{ color: "rgb(15,113,184)", fontSize: 17 }}>{ConstantsList.ScanCard.Manually}</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

/**
* Converting redux state to props for the ScanCard component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({});

/**
* Converting functions to props for the ScanCard component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({});

/**
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(ScanCard);
