/**
* @author Sharanagouda K <Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary LoyaltyCardDetails Screen for the application.
* @description The screen would be able to view the details of the loyalty card.
* The screen uses react and third party npm modules and also few custom components.
*/

/**
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import Text, View, Image,Dimensions,Alert,TouchableOpacity,StyleSheet,SectionList, ScrollView, Platform
* from "react-native" for creating our view.
*/
import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, View, Image, Alert, TouchableOpacity, SectionList,Platform, ScrollView } from "react-native";

/**
* @import Toolbar for building our screen.
* Toolbar: renders Toolbarn in the screen.
* @import {navigateTo,navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* navigateBack(): It simply naviagates the user to the back screen.
* user goes to the LoyaltyCardDetails screen and it updates on the client side as the app has been installed so that we
* make sure user does not see the onboarding screen every time it launches the app.
*/
import { Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";
import ConstantsList from "../constants/lagunage_constant";


/**
* @import screenstyles object. This object have all the styles written for the screens
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";
import styles from "../styles/creditAndDebitCardStyles";

/**
* @class LoyaltyCardDetails
* @extends Component
* @summary Represents LoyaltyCardDetails class.
* @description This is a LoyaltyCardDetails class. It extands react Component class for using the functions comes along with it.
*/
class LoyaltyCardDetails extends Component {

    /**
    * @constructor It is initializing the state with default properties.
    * data: String property for default Details.
    */
    constructor(props) {
        super(props);
        this.state = {
            aIndex: props.aIndex,
            imgSrc: props.imgSrc,
            data: [
                {
                    title: "CARD DETAILS",
                    data: [
                        { key: 1, name: "1244 4856 8784 9898" }
                    ]
                },
                {
                    title: "BAR CODE",
                    data: [
                        { key: 1, name: "barcode" }
                    ]
                }
            ]
        };
        this.navigateToManualEntry = this.navigateToManualEntry.bind(this);
        this.deleteLoyaltyCardFunction = this.deleteLoyaltyCardFunction.bind(this);
    }

    /**
                * @function deleteLoyaltyCardFunction
                * this function is for deleting the card
        */

        // eslint-disable-next-line class-methods-use-this
        deleteLoyaltyCardFunction() {
        Alert.alert(
        "Remove Card!",
        "Please confirm, if you want to remove the card from wallet",
        [
            {
            text: "Cancel",
            onPress: () => {},
            style: "cancel"
            },
            {
            text: "Confirm",
            onPress: () => {
                navigateTo("loyaltyCards");
            }
        
            }
        ],
        {cancelable: false}
        );

    };


    /**
    * @function navigateToManualEntry: It gets called when user presses the icon 
    * It will navigate through the respected screen.
    */
    // eslint-disable-next-line class-methods-use-this
    navigateToManualEntry() {
        navigateTo("loyaltyCardAddManually");
    }

      /**
        * @function _deleteButtonDesign: Based on platform Delete button design changes
        */
       _deleteButtonDesign() {
        if (Platform.OS === "ios") {
            return (
                <View style={styles.creditCardDeleteView}>
                    <View style={styles.creditCardIosDelete}>
                        <TouchableOpacity onPress={this.deleteLoyaltyCardFunction}>
                            <View>
                                <Text style={styles.creditCardIosDeleteText}>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.creditCardDeleteView}>
                <View style={styles.creditCardSubView}>
                    <TouchableOpacity onPress={this.deleteLoyaltyCardFunction}>
                        <View>
                            <Text style={styles.creditCardDetletTextView}>Delete</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );

    }
    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen.
    * In render() we are fetching "SectionList" from the props and passing it to "onPress" event of then
    * submit button. "SectionList" submits the form after checking the validation.
    */
    render() {
        return (
            <View style={[screenstyles.appContainer, styles.whiteBackground]}>
                <Toolbar
                    style={[screenstyles.noBorderToolbar]}
                    onClickLeftIcon={navigateBack}
                    iconName="back-arrow"
                    title="LOYALTY CARDS " />
                <ScrollView>
                    <View style={screenstyles.loyaltyCardImageView}>
                    <Image source={this.state.imgSrc != null ? this.state.imgSrc : require("../assets/images/scanKfcgiftcard.png")} style={screenstyles.loyaltyCardImage} />
                    </View>
                    <View style={[screenstyles.container]}>
                        <SectionList
                            sections={this.state.data}
                            renderSectionHeader={({ section }) => {
                                return (
                                    <View style={screenstyles.titleContainer}>
                                        <Text style={screenstyles.title}>
                                            {section.title}
                                        </Text>
                                    </View>
                                );
                            }}
                            renderItem={({ item }) => {
                                if (item.name === "barcode") {
                                    return (
                                        <View style={screenstyles.loyatlyCardDetailsContainer}>
                                            <Image source={require("../assets/images/barcode.png")} style={screenstyles.loyaltyBarCodeImage} />
                                        </View>
                                    );
                                }
                                if (item.name !== "barcode") {
                                    return (
                                        <View style={screenstyles.loyatlyCardDetailsContainer}>
                                            <View style={screenstyles.settingTitleView}>
                                                <Text style={screenstyles.item}>{item.name}</Text>
                                            </View>
                                            <TouchableOpacity onPress={this.navigateToManualEntry}>
                                                <View style={screenstyles.rightIconView}>
                                                    <Image source={require("../assets/images/settings/ArrowRight.png")} style={screenstyles.settingIcons} />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    );
                                }
                            }}
                        />
                    </View>
                    {this._deleteButtonDesign()}
                </ScrollView>
            </View>
        );
    }
}

/**
* Converting redux state to props for the LoyaltyCardDetails component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({});

/**
* Converting functions to props for the LoyaltyCardDetails component
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
export default connect(mapStateToProps, mapDispatchToProps)(LoyaltyCardDetails);
