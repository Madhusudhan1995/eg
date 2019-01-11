/**
* @author Megha<megha.h@photoninfotech.net>
* @version 1.0.3
* @summary PreferredStation screen for the application.
* @description The screen shows the PreferredStation
* first login to application. using credentials email and password,
* this screen will be in UserSetting screen when you tap on PreferredStation this screen opens
* The screen uses react npm modules and also few custom components.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import Text, View, TouchableOpacity, FlatList, Image, Dimensions from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
*/
import React, { Component } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Alert } from "react-native";
import { connect } from "react-redux";

/**
*  @import Swipeout from react native Swipeout and it is used for swipe left to view remove option and swipe right to hide remove option in preferred station
*  @import Swiper from react native Swiper and it is used for swipe the amenities in the carousel
* */
import Swipeout from "react-native-swipeout";
import Swiper from "react-native-swiper";
/**
* @import Toolbar for building our screen.
* @description  Toolbar is to Display on top screen and shows Title
* @import {navigateTo, navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* navigateBack(): It simply naviagates the user to the back screen.
*/
import { Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";

/**
* @import ConstantList object. This object have all the constant texts written for the screens.
* the constants have been defined in a file named "language_Constants" which is again importing
*/
import Constantlist from "../constants/lagunage_constant";
/**
* @import preferredStation object. This object have all the styles written for the preferred station screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import preferredStation from "../styles/preferredStation";
import screenstyles from "../styles/screenStyles";

/**
* @class PreferredStation
* @extends Component
* @summary Represents PreferredStation class.
* @description This is a PreferredStation class. It extands react Component class for using the functions comes along with it.
*/
class PreferredStation extends Component {
    /**
    * @constructor It is initializing the state with default properties.
    * distanceType: this is using for km as default value.
    * data object for passing the data to Flatlist to display the Preferred Stations on the screen
    */
    constructor(props) {
        super(props);
        this.state = {
            preferredStationData: Constantlist.preferredStation11.preferredStationFlatlist
        };
    }

    onSubmit = (values) => {
        Alert.alert(
            "",
            "Are you sure?",
            [
                { text: "Yes", onPress: () => navigateTo("login") },
                { text: "No" }
            ],
            {cancelable: false}
        );
    }

    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    */
    render() {
        const swipeoutBtns = [
            {
                component: (
                    <View
                        style={preferredStation.swipeoutButton}>
                    <TouchableOpacity onPress={this.onSubmit}>
                        <Image source={require("../assets/images/settings/Trash.png")} />
                        <Text style={preferredStation.removeText}>Remove</Text>
                    </TouchableOpacity>
                    </View>
                ),
                backgroundColor: "#fafafa ",
                underlayColor: "#fafafa ",
                onPress: () => {
                    console.log("Delete Item");
                }
            }
        ];
        return (
            <View style={preferredStation.mainView}>
                <Toolbar
                    style={[preferredStation.noBorderToolbar]}
                    onClickLeftIcon={navigateBack}
                    iconName="loginpage"
                    title="Preferred Stations" />
                    
                <View style={preferredStation.subView}>
                    <View style={preferredStation.headerTextView}>
                        <Text style={preferredStation.mainHeaderText}> Stay up-to-date & sign up to our </Text>
                        <Text style={preferredStation.subHeaderText}>newsletter.</Text>
                    </View>
                    <Swipeout right={swipeoutBtns} autoClose="true" backgroundColor="transparent">
                        <View>
                            <FlatList
                                vertical
                                showsVerticalScrollIndicator={false}
                                data={this.state.preferredStationData}
                                ItemSeparatorComponent={() => <View style={preferredStation.flatlistSeperator} />}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => navigateTo("storeDetails", item)}>
                                        <View style={preferredStation.mainFlatlistView}>
                                            <View style={preferredStation.shellView}>
                                                <View style={preferredStation.shellSubView}>
                                                    <View style={preferredStation.shellTextView}>
                                                        <Text style={preferredStation.shellItem}>{item.name}</Text>
                                                    </View>
                                                    <View style={preferredStation.directionsMainView}>
                                                        <View style={preferredStation.directionsSubView}>
                                                            <Text style={preferredStation.directionsText}>Directions</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={preferredStation.directionsDistance}>0.16 KM</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={preferredStation.itemFlatlistView}>
                                                    <Text style={preferredStation.itemAddressView}>{item.address}</Text>
                                                    <View style={preferredStation.itemOpenMainView}>
                                                        <Text style={preferredStation.itemOpen}>{item.open}</Text>
                                                        <Text style={preferredStation.itemTime}>{item.Time}</Text>
                                                    </View>
                                                    <View style={preferredStation.itemMainFuelView}>
                                                        <Text style={preferredStation.itemFuel}>{item.fuel}</Text>
                                                        <Text style={preferredStation.itemType}>{item.Type}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={preferredStation.amentiesView}>
                                                <View style={preferredStation.dotsMainView}>
                                                    <View style={preferredStation.dotView}>
                                                    </View>
                                                    <View style={preferredStation.dotsView}>
                                                    </View>
                                                </View>
                                                <View style={preferredStation.amentiesMainView}>
                                                    <View style={preferredStation.amentiesSwiperSubView}>
                                                        <View style={preferredStation.amentiesFirstSwiperMainView} />
                                                        <View style={preferredStation.amentiesFirstSwiperSubView}>
                                                            <View>
                                                                <Image style={preferredStation.amentiesImage} source={require("../assets/images/home-Restroom-android.png")} />
                                                                <Text style={preferredStation.amentiesText}>{Constantlist.storeDetails.restRoom}</Text>
                                                            </View>
                                                            <View>
                                                                <Image style={preferredStation.amentiesImage} source={require("../assets/images/home-restaurant-android.png")} />
                                                                <Text style={preferredStation.amentiesText}>{Constantlist.storeDetails.restaurant}</Text>
                                                            </View>
                                                            <View>
                                                                <Image style={preferredStation.amentiesImage} source={require("../assets/images/home-carwash-android.png")} />
                                                                <Text style={preferredStation.amentiesText}>{Constantlist.storeDetails.carWash}</Text>
                                                            </View>
                                                            <View>
                                                                <Image style={preferredStation.amentiesImageView} source={require("../assets/images/home-24-7-android.png")} />
                                                                <Text style={preferredStation.amentiesTextView}>{Constantlist.storeDetails.storeOpens}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </Swipeout>
                    <Swipeout right={swipeoutBtns} autoClose="true" backgroundColor="transparent">
                        <View>
                            <FlatList
                                vertical
                                showsVerticalScrollIndicator={false}
                                data={this.state.preferredStationData}
                                ItemSeparatorComponent={() => <View style={preferredStation.flatlistSeperator} />}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => navigateTo("storeDetails", item)}>
                                        <View  style={preferredStation.mainFlatlistSubView}>
                                            <View style={preferredStation.shellView}>
                                                <View style={preferredStation.shellSubView}>
                                                    <View style={preferredStation.shellTextView}>
                                                        <Text style={preferredStation.shellItem}>{item.name}</Text>
                                                    </View>
                                                    <View style={preferredStation.directionsMainView}>
                                                        <View style={preferredStation.directionsSubView}>
                                                            <Text style={preferredStation.directionsText}>Directions</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={preferredStation.directionsDistance}>0.16 KM</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={preferredStation.itemFlatlistView}>
                                                    <Text style={preferredStation.itemAddressView}>{item.address}</Text>
                                                    <View style={preferredStation.itemOpenMainView}>
                                                        <Text style={preferredStation.itemOpen}>{item.open}</Text>
                                                        <Text style={preferredStation.itemTime}>{item.Time}</Text>
                                                    </View>
                                                    <View style={preferredStation.itemMainFuelView}>
                                                        <Text style={preferredStation.itemFuel}>{item.fuel}</Text>
                                                        <Text style={preferredStation.itemType}>{item.Type}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={preferredStation.amentiesView}>
                                                <View style={preferredStation.dotsMainView}>
                                                    <View style={preferredStation.dotView}>
                                                    </View>
                                                    <View style={preferredStation.dotsView}>
                                                    </View>
                                                </View>
                                                <View style={preferredStation.amentiesMainView}>
                                                    <View style={preferredStation.amentiesSwiperSubView}>
                                                        <View style={preferredStation.amentiesFirstSwiperMainView} />
                                                        <View style={preferredStation.amentiesFirstSwiperSubView}>
                                                            <View>
                                                                <Image style={preferredStation.amentiesImage} source={require("../assets/images/home-Restroom-android.png")} />
                                                                <Text style={preferredStation.amentiesText}>{Constantlist.storeDetails.restRoom}</Text>
                                                            </View>
                                                            <View>
                                                                <Image style={preferredStation.amentiesImage} source={require("../assets/images/home-restaurant-android.png")} />
                                                                <Text style={preferredStation.amentiesText}>{Constantlist.storeDetails.restaurant}</Text>
                                                            </View>
                                                            <View>
                                                                <Image style={preferredStation.amentiesImage} source={require("../assets/images/home-carwash-android.png")} />
                                                                <Text style={preferredStation.amentiesText}>{Constantlist.storeDetails.carWash}</Text>
                                                            </View>
                                                            <View>
                                                                <Image style={preferredStation.amentiesImageView} source={require("../assets/images/home-24-7-android.png")} />
                                                                <Text style={preferredStation.amentiesTextView}>{Constantlist.storeDetails.storeOpens}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </Swipeout>
                </View>
            </View>
        );
    }
}

/**
* Converting redux state to props for the Preferred Station component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({});

/**
* Converting functions to props for the Preferred Station component
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
export default connect(mapStateToProps, mapDispatchToProps)(PreferredStation);