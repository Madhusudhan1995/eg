/**
* @author Sharanagouda K <Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary Go fuel Card Screen for the application.
* @description The screen shows user would be able to view the added GO fuel card
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
* @ Toolbar for building our screen.
* @description Toolbar: renders Toolbar field in the screen.
* @import {navigateTo,navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* navigateBack(): It simply naviagates the user to the back screen.
* user goes to the GoFuelCard screen and it updates on the client side as the app has been installed so that we
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
* @class GoFuelCard
* @extends Component
* @summary Represents GoFuelCard class.
* @description This is a GoFuelCard class. It extands react Component class for using the functions comes along with it.
*/
class GoFuelCard extends Component {

    /**
    * @constructor It is initializing the state with default properties.
    * entries: String property for default Images.
    */
   constructor(props) {
        super(props);
        this.state = {
            cardIndex: -1,
            entries: [
                {key: 1, card: require("../assets/images/Go_Fuel_Card_Latest.png"), default: "yes"},
            ]

        };

    }

        /**
        * @function componentWillMount: React lifecycle function. It gets called before render() and first
        * time when component loads.
        * @function this.getCardListData(): It returns a boolean value and updates the redux store
        * appInstalled property. This property helps to show retrive toggleswitch data.
        */
       componentWillMount() {
            DeviceEventEmitter.addListener("goFuelCardtoggleSwitchClicked", (data) => {
                this.getCardListData();
            });
       }

        /**
    * @function componentDidMount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    * @function this.getCardListData(): It returns a boolean value and updates the redux store
    * appInstalled property. This property helps to show retrive data.
    */
    componentDidMount() {
        this.getCardListData();
    }

    /**
    * @function componentWillUnmount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    * @function this.getCardListData(): It returns a boolean value and updates the redux store
    * appInstalled property. This property helps to show retrive toggleSwitchClicked data.
    */
    componentWillUnmount() {
        DeviceEventEmitter.removeListener("goFuelCardtoggleSwitchClicked", (data) => {
        });
    }

    /**
    * @function getCardListData: Its called by to get user card Details.
    * It takes this.setState as params and fetches the data.
    * @params {string} this.setState:token string which goes to the get the card Details .
    */
   getCardListData = async () => {
    try {
        const indexVal = await AsyncStorage.getItem("goCardIndex");
        if (indexVal !== null) {
            this.setState({cardIndex: Number(indexVal)});
        } else {
            this.setState({cardIndex: -1});
        }
    } catch (error) { console.log("errpr"); }
}

    /**
    * @function onCardClick: It gets called when user presses the back buttom
    * It updates the state and Navigate to creditAndDebitDetails Screen.
    */
   onCardClick = (aIndex, imgSrc) => {
    navigateTo("goFuelCardDetails", {aIndex, imgSrc});
};


    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are fetching  data from the props and passing it to event of then
    */
    render() {
        return (
            <SafeAreaView style={screenstyles.settingSafeView}>
                <View style={screenstyles.settingContainer}>
                    <View style={screenstyles.GofuelcontentView}>
                        <Text style={screenstyles.creditcardcontentText}>
                            {ConstantsList.GoFuelCard.GofuelcardText}
                        </Text>
                    </View>
                    <View style={screenstyles.goFuelCardView}>
                    <Text style={screenstyles.loyaltyCardText}>{ConstantsList.GoFuelCard.GoFuelCardview} </Text>
                    <View style={screenstyles.goFuelCardFlatListView}>
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
                                                <Image style={screenstyles.goFuelCardImageWithDefault} source={item.card} />
                                                {this.state.cardIndex === (item.key) && (
                                                <View style={screenstyles.goFuelCardDefaultTextView}>
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
                </View>
            </SafeAreaView>
        );
    }
}

/**
* Converting redux state to props for the GoFuelCard component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({});

/**
* Converting functions to props for the GoFuelCard component
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
export default connect(mapStateToProps, mapDispatchToProps)(GoFuelCard);
