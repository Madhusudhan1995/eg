/**
* @author Sharanagouda K <Sharanagouda.k@photoninfotech.net>
* @version 1.0.2
* @summary LoyaltyCards Screen for the application.
* @description The screen would be able to view the added loyalty  cards in the wallet
* The screen uses react and third party npm modules and also few custom components.
*/

/**
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component..
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import Text, View, Image, TouchableOpacity,StyleSheet,FlatList,DeviceEventEmitter, 
* from "react-native" for creating our view.
* @import Icon from "react-native-elements" to use font icons in this screen whereever required.
*/
import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity,  FlatList, SafeAreaView} from "react-native";
import {Icon} from "react-native-elements";

/**
 * @import {navigateTo from "helpers" file. "helpers" file has
 * reusable functions written in it.
 * @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
 * It deletes the back history
 * user goes to the LoyaltyCards screen and it updates on the client side as the app has been installed so that we
 * make sure user does not see the onboarding screen every time it launches the app.
 */
import {navigateTo} from "../helpers";
import ConstantsList from "../constants/lagunage_constant";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";

/**
* @class LoyaltyCards
* @extends Component
* @summary Represents LoyaltyCards class.
* @description This is a LoyaltyCards class. It extands react Component class for using the functions comes along with it.
*/
class LoyaltyCards extends Component {

    /**
    * @constructor It is initializing the state with default properties.
    * entries: String property for default Images.
    */
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {key: 1, card: require("../assets/images/card1.png"), default: "yes"},
                {key: 2, card: require("../assets/images/card2.png")},
                {key: 3, card: require("../assets/images/card3.png")}
            ]
        };
    }

    /**
    * @function navigateToloyaltyCardDetails: It gets called when user presses the back buttom
    * It updates the state and Navigate to loyaltyCardDetails Screen.
    */
   navigateToloyaltyCardDetails = (aIndex, imgSrc) => {
        navigateTo("loyaltyCardDetails", {aIndex, imgSrc});
    };

    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are fetching "FlatList" from the props and passing it to "onPress" event of then
    * submit button. "FlatList" submits the form after checking the validation.
    */
    render() {
        return (
            <SafeAreaView style={screenstyles.settingSafeView}>
                <View style={screenstyles.settingContainer}>
                    <View style={screenstyles.creditcardcontentView}>
                        <Text style={screenstyles.creditcardcontentText}>
                            {ConstantsList.CreditAndDebitCardList.CardText}
                        </Text>
                    </View>
                    <View style={screenstyles.loyaltyCardsView}>
                        <Text style={screenstyles.loyaltyCardText}>{ConstantsList.LoyaltyCards.LoyaltyCards} </Text>
                        <Icon raised name="plus" type="font-awesome" iconStyle={screenstyles.addCardIconManual} containerStyle={screenstyles.addCardManualIconPlus} size={10} onPress={() => navigateTo('scanCard',{comingFrom: "loyaltyCards"})} />
                    </View>
                    <View style={screenstyles.atmCardRow}>
                    <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.entries}
                            keyExtractor={(item, index) => index.toString()}
                            ref={(ref) => {
                                this.flatListRef = ref;
                        }}
                            ItemSeparatorComponent={() => <View style={screenstyles.loyaltyCarditemSeperator} />}
                            renderItem={({item, index}) => {
                            return (
                                <TouchableOpacity onPress={() => this.navigateToloyaltyCardDetails(item.key, item.card)}>
                                    <View style={screenstyles.creditcardrenderItem}>
                                        <View style={screenstyles.creditcardcardView}>
                                                <Image style={screenstyles.creditcardatmcardImage} source={item.card} />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }} />

                    </View>
                </View>
            </SafeAreaView>

        );
    }
}

/**
* Converting redux state to props for the LoyaltyCards component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = () => ({});

/**
* Converting functions to props for the LoyaltyCards component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods
*/
const mapDispatchToProps = () => ({});

/** 
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(LoyaltyCards);
