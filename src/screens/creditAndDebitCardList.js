/**
* @author Sharanagouda K <Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary CreditAndDebitCardList Screen for the application.
* @description The screen shows to User would be able to view the added Debit & Credit cards in the wallet
* The screen uses react and third party npm modules and also few custom components.
*/

/**
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component..
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import Text, View, Image, TouchableOpacity,FlatList,DeviceEventEmitter,AsyncStorage
* from "react-native" for creating our view.
* @import Icon from "react-native-elements" to use font icons in this screen whereever required.
*/
import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity, FlatList, DeviceEventEmitter, AsyncStorage, SafeAreaView} from "react-native";
import {Icon} from "react-native-elements";

/**
 * @import {navigateTo from "helpers" file. "helpers" file has
 * reusable functions written in it.
 * @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
 * It deletes the back history
 * user goes to the CreditAndDebitCardList screen and it updates on the client side as the app has been installed so that we
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
* @class creditAndDebitCardList
* @extends Component
* @summary Represents creditAndDebitCardList class.
* @description This is a creditAndDebitCardList class. It extands react Component class for using the functions comes along with it.
*/
class CreditAndDebitCardList extends Component {

    /**
    * @constructor It is initializing the state with default properties.
    * entries: String property for default Images.
    */
    constructor(props) {
        super(props);
        this.state = {
            storedIndex: -1,
            entries: [
                {key: 1, card: require("../assets/images/atmCard3.png"), default: "yes"},
                {key: 2, card: require("../assets/images/atmCard.png")},
                {key: 3, card: require("../assets/images/atmCard3.png")}
            ]

        };

    }

    /**
    * @function componentWillMount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    * @function this._retrieveData(): It returns a boolean value and updates the redux store
    * appInstalled property. This property helps to show retrive toggleswitch data.
    */
    componentWillMount() {
        DeviceEventEmitter.addListener("toggleSwitchClicked", (data) => {
            this._retrieveData();
        });
    }

        /**
    * @function componentDidMount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    * @function this._retrieveData(): It returns a boolean value and updates the redux store
    * appInstalled property. This property helps to show retrive data.
    */
   componentDidMount() {
    this._retrieveData();
}

   /**
    * @function componentWillUnmount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    * @function this._retrieveData(): It returns a boolean value and updates the redux store
    * appInstalled property. This property helps to show retrive toggleSwitchClicked data.
    */
    componentWillUnmount() {
        DeviceEventEmitter.removeListener("toggleSwitchClicked", (data) => {
        });
    }

    /**
    * @function _retrieveData: Its called by to get user card Details.
    * It takes this.setState as params and fetches the data.
    * @params {string} this.setState:token string which goes to the get the card Details .
    */
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem("creditCardIndex");
            if (value !== null) {
                this.setState({storedIndex: Number(value)});
            } else {
                this.setState({storedIndex: -1});
            }
        } catch (error) { console.log("errpr"); }
    }

    /**
    * @function onCardClick: It gets called when user presses the back buttom
    * It updates the state and Navigate to creditAndDebitDetails Screen.
    */
    onCardClick = (aIndex, imgSrc) => {
        navigateTo("creditAndDebitDetails", {aIndex, imgSrc});
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
                        <Text style={screenstyles.loyaltyCardText}>{ConstantsList.CreditAndDebitCardList.CreditandDebit} </Text>
                        <Icon
                            raised
                            name="plus"
                            type="font-awesome"
                            iconStyle={screenstyles.addCardIconManual}
                            containerStyle={screenstyles.addCardManualIconPlus}
                            size={10}
                            onPress={() => navigateTo("scanCard", {comingFrom: "creditDebitScreen"})} />
                    </View>
                    <View style={screenstyles.atmCardRow}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.state.entries}
                            keyExtractor={(item, index) => index.toString()}
                            ref={(ref) => {
                                this.flatListRef = ref;
                        }}
                            ItemSeparatorComponent={() => <View style={screenstyles.creditcarditemSeperator} />}
                            renderItem={({item, index}) => {
                            return (
                                <TouchableOpacity onPress={() => this.onCardClick(item.key, item.card)}>
                                    <View style={screenstyles.creditcardrenderItem}>
                                        <View style={screenstyles.creditcardcardView}>
                                            <View style={{}}>
                                                <Image style={screenstyles.creditcardatmcardImageWithDefault} source={item.card} />
                                                {this.state.storedIndex === (item.key) && (
                                                <View style={screenstyles.creditcarddefaultTextView}>
                                                    <Icon name="check" color="#ffffff" size={16} />
                                                    <Text style={screenstyles.creditcarddefaultTextColor}> {ConstantsList.CreditAndDebitCardList.DefaultText}</Text>
                                                </View>
                                                  )}
                                            </View>
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
* Converting redux state to props for the CreditAndDebitCardList component
* @function mapStateToProps
* @params {object} state
* @returns {object} props
*/
const mapStateToProps = state => ({});

/**
* Converting redux state to props for the CreditAndDebitCardList component
* @function mapDispatchToProps
* @params {function} dispatch
* @returns {object} props
*/
const mapDispatchToProps = dispatch => ({});

/**
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(CreditAndDebitCardList);
