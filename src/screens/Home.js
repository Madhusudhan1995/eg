/**
* @author Vineet Mishra < vineet.m@photoninfotech.net>
* @version 1.0.2
 * @summary Home Screen for the application.
* @description This is the Home Screen.This Screen will open even if the User is not logged in.This Screen will be having the list of Vouchers, and user can browse the nearest
 * station.There is one more feature in this, user will be able to see the current weather.
* /

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity, Image, Alert, ScrollView, Platform, KeyboardAvoidingView,
* SafeAreaView from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* redirectTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* It deletes the back history
* and no animation happens while screen transition.
* navigateBack(): It simply naviagates the user to the back screen.
*/
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, TouchableOpacity, SafeAreaView, FlatList, StatusBar, Image, 
 Dimensions, ScrollView, ImageBackground, Platform, DeviceEventEmitter} from "react-native";
import {navigateTo} from "../helpers";
import Swiper from 'react-native-swiper';

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import Styles from '../styles/screenStyles';
import homeStyles from '../styles/homeStyles';

// Constantlist hardcoded text
import Constantlist from "./../constants/lagunage_constant";
import Globals, {checkLocationPermission, closeGeoLocation, removeOnLocationChangedListener} from "./../constants/Globals";
import {onAppInstall} from "../actions/onBoardingActions";
import {getHomeData} from "../actions/homeActions";

// setting the width dimensions of a Home component.
let deviceWidth = Dimensions.get('window').width

const SFProTextMedium = "SFProText-Medium";
const SFProTextRegular = "SFProText-Regular";
const SFProTextSemibold = "SFProText-Semibold";
const SFProTextbold = "SFProText-Bold";
const RobotoMedium = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";
const RobotoBold = "Roboto-Bold";

/**
* @class Home
* @extends Component
* @summary Represents Home class.
* @description This is a Home Screen class. It extends react Component class for using the functions comes along with it.
*/
class Home extends Component {

 /**
 * @constructor It is initializing the state with default properties.
 * lat: Current latitude.
 * lng: Current Longitude.
 * stationdata: List of nearest Stations.
 * brandsandvoucherdata: SList of Vouchers.
 * iconName: The name of the Icon.
 * textInputValue: The value which the user will input.
 */
 constructor(props) {
 super(props);
 this.state = {
 data: [],
 stationdata: Constantlist.home.homeData,
 brandsandvoucherdata: Constantlist.home.brandandvoucherdata,
 iconName: 'search',
 textInputValue: ''
 }
 }

 /**
 * @function componentDidMount
 * componentDidMount method called when components are mounted.
 * StatusBar.setHidden(true) -> statusbar will be hided.
 * @function this.props.onAppInstall(): It returns a boolean value and updates the redux store
 * appInstalled property. This property helps to show the onboarding screen first time when app installs.
 */
 componentDidMount() {
 StatusBar.setHidden(false);
 this.props.onAppInstall(true);
 checkLocationPermission();
 }

 /**
 * @function componentWillMount
 * componentWillMount method called when components are mounted.
 * Added listener to listen callback's from other components
 */
 componentWillMount() {
 DeviceEventEmitter.addListener(Globals.EVENT.ON_LOCATION_CHANGED, (data) => {
 this.props.handleHomeDataRequest('', data.lastLat, data.lastLong);
 });
}

/**
* @function componentWillUnmount
* componentWillUnmount method called when components are un-mounted.
* Removed listener
*/
componentWillUnmount() {
 removeOnLocationChangedListener();
 closeGeoLocation();
}
 /**
 * @function render: Its one of the main functions of react component. It renders the JSX on the screen
 * In render() we are fetching list of Voucher and Nearest Station.
 */
 render() {
 const {weatherData} = this.props;
 return (
 <ScrollView >
 <SafeAreaView style={Styles.homeContainer}>

 <View style={{ backgroundColor: '#0f71b8', flex: 1, flexDirection: 'column', height: 174 }}>
 <View style={{ flex: 1, alignSelf: 'center' }}>
 <Image style={{ height: 42, width: 62, marginTop: 20 }} source={require('../assets/images/home/Logo.png')} />
 </View>
 <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 30, justifyContent: 'space-between' }}>
 <View style={{ flex: 3, flexDirection: 'column', paddingLeft: 16 }}>
 <Text style={homeStyles.welcomeNote}>{weatherData.welcomeNote ? weatherData.welcomeNote + ",": 'Good Evening'}</Text>
 <View style={{ flex: 1, marginTop: 5 }}>
 <Text style={{ color: '#ffffff', fontSize: 12, fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular }}>Discover the best kept secret today</Text>
 <View style={{ flex: 1, marginTop: 5 }}>
 <TouchableOpacity onPress={() => navigateTo("register")}>
 <Text style={{ color: '#ffffff', fontSize: 12, fontWeight: 'bold' }}>Join Now</Text>
 </TouchableOpacity>
 </View>
 </View>
 </View>
 <View style={{ flex: 0.8, }}>
 <Image style={{ height: 53, width: 53 }} source={ weatherData.weatherIconUrl ? {uri : weatherData.weatherIconUrl} : 
 require('../assets/images/home/Weather.png')} />
 </View>
 </View>
 </View>




 <View style={{ borderLeftColor: '#ffffff', borderRightColor:'#ffffff', borderTopColor:'#ffffff', borderBottomColor:'rgb(239,239,239)', borderBottomWidth: 10, }}>
 <View style={{ flex: 1, flexDirection: 'column', paddingTop: 10, paddingBottom: 20, backgroundColor: '#ffffff',}}>
 <View style={{ flex: 1, flexDirection: 'row', margin:15 }}>
 <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 5}}>
 <Text style={{ color: "#000000", fontSize: 12, fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>Nearest Stations</Text>
 <View style={{ height: 2, width: Platform.OS === "ios" ? 100 : 93, backgroundColor: 'rgb(15, 113, 184)', marginTop:4}}>
 </View>
 </View>
 <TouchableOpacity onPress={() => navigateTo("storeLocator")}>
 <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 16, }}>
 <Image style={homeStyles.searchIcon} resizeMode='contain' source={require('../assets/images/home/Search.png')} />
 </View>
 </TouchableOpacity>
 </View>
 <View style={{ borderColor: 'rgba(121,121,121,0.57)', paddingLeft:10, paddingRight:10}}>
 <FlatList
 horizontal
 showsHorizontalScrollIndicator={false}
 data={this.state.stationdata}
 keyExtractor={(item, index) => index.toString()} ref={ref => {
 this.flatListRef = ref;
 }} ItemSeparatorComponent={() => <View style={Styles.itemSeperator} />}
 renderItem={({ item, index }) =>
 <View style={{ width: deviceWidth - 52, borderColor: 'rgba(121,121,121,0.57)', borderWidth: 1, borderRadius: 23, marginLeft:8, marginRight:8 }}>
 <View style={{ flex: 1, height: 250, }}>
 <View style={{ flexDirection: 'row', borderRadius: 25, height: 150, paddingLeft: 16, }}>
 <TouchableOpacity onPress={() => navigateTo("storeDetails",item)}>
 <View style={{ flex: 1, backgroundColor: 'white', }}>
 <Text style={{ color: 'rgb(51,51,51)', fontSize: 25, fontWeight: "bold", paddingTop: 10 }}>
 {item.name}
 </Text>
 <Text style={{ color: 'rgb(128,128,128)', fontSize: 15, fontWeight: 'bold', paddingTop: 5 }}>
 {item.address}
 </Text>
 <Text style={{ color: 'rgb(128,128,128)', fontSize: 15, fontWeight: 'bold' }}>
 {item.address1}
 </Text>
 <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 5 }}>
 <Text style={{ fontSize: 12, color: 'rgb(128,128,128)', }}>
 OPEN-
 </Text>
 <Text style={{ fontSize: 12, }}>
 {item.hours}
 </Text>
 </View>
 <View style={{flex:1,flexDirection:'row', paddingTop:5,}}>
 <Image style={{ height: 12, width: 12, marginTop: Platform.OS === 'ios' ? 1 : 3 }} source={require('../assets/images/home/FuelCard.png')}/>
 <Text style={{ fontSize: 12, marginLeft:5}}>
 {item.card}
 </Text>
 </View>
 </View>
 </TouchableOpacity>
 <View style={{flex:0.2}}>
 </View>
 <View style={{ flex:1.5, overflow: "hidden", }}>
 <ImageBackground style={{ height: "100%", width: "100%", borderTopRightRadius: Platform.OS === 'ios' ? 23 : 0 , overflow: 'hidden' }} imageStyle={{ borderTopRightRadius: 23, overflow: 'hidden' }} resizeMode='cover' source={require('../assets/images/Prefered-Staion-Android.png')} >
 
 { item.category == 'esso' ?
 <Image style={{ height: 40, width: 40, marginLeft:30,marginTop:40 }} source={require('../assets/images/home/EssoGoFuel.png')}/>
 :
 <Image style={{ height: 40, width: 40, marginLeft:30,marginTop:40 }} source={require('../assets/images/home/ShellGoFuel.png')}/>
 } 
 </ImageBackground>
 </View>
 </View>
 <Swiper paginationStyle={{flex:1, alignItems: 'center', justifyContent: 'center', height:130, }} > 
 <View style={{ flex: 1, height: 160, borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
 <View style={{ flex: 1, flexDirection: 'row', height: 20, borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }} />
 <View style={{ flex: 4, flexDirection: 'row', borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-Restroom-android.png')} />
 <Text style={{ fontSize: 13, }}>{Constantlist.storeDetails.restRoom}</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-restaurant-android.png')} />
 <Text style={{ fontSize: 13, }}>{Constantlist.storeDetails.restaurant}</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-carwash-android.png')} />
 <Text style={{ fontSize: 13, }}>{Constantlist.storeDetails.carWash}</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-24-7-android.png')} />
 <Text style={{ fontSize: 13, marginLeft: 10 }}>{Constantlist.storeDetails.storeOpens}</Text>
 </View>
 </View>
 </View>


 <View style={{ flex: 1, height: 160, borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
 <View style={{ flex: 1, flexDirection: 'row', height: 20, borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }} />
 <View style={{ flex: 4, flexDirection: 'row', borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/truckshop.png')} />
 <Text style={{ fontSize: 13, }}>Truck Stop</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/coffee.png')} />
 <Text style={{ fontSize: 13, }}>Coffee</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/freewifi.png')} />
 <Text style={{ fontSize: 13, }}>Free Wifi</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center'}} resizeMode='contain' source={require('../assets/images/parking.png')} />
 <Text style={{ fontSize: 13 }}>Parking</Text>
 </View>
 </View>
 </View>
 </Swiper>
 
 </View>
 </View>
 
 }
 />
 </View>
 {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent:'center',alignItems:'center', }}>
 <View style={{ flex: 1, flexDirection: 'row',paddingLeft:16 }}>
 <Image style={{ height: 12, width: 12 }} source={require('../assets/images/home/back-arrowR.png')} />
 <Text style={{ fontSize: 12, fontWeight:'500', }}> Previous Station</Text>
 </View>
 <View style={{ flex: 1, flexDirection: 'row', alignItems:'flex-end', justifyContent:'flex-end',paddingRight:25 }}>
 
 <Text style={{ fontSize: 12,fontWeight:'500'}}> Next Station</Text>
 <Image style={{ height: 12, width: 12 }} source={require('../assets/images/home/back-arrowF.png')} />
 </View>
 </View> */}
 </View>
 </View>

 {/* <View style={{ borderLeftColor: '#ffffff', borderRightColor: '#ffffff', borderTopColor: '#ffffff', borderBottomColor: 'rgb(239,239,239)', borderBottomWidth: 10, }}>
 <View style={{ paddingTop: 20, backgroundColor: '#ffffff', }}>
 <View style={{ flex: 1, flexDirection: 'row', marginBottom: 15 }}>
 <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 20 }}>
 <Text style={{ color: "#000000", fontSize: 12, fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>Nearest Stations</Text>
 <View style={{ height: 2, width: Platform.OS === "ios" ? 100 : 93, backgroundColor: 'rgb(15, 113, 184)', marginTop:4}}>
 </View>
 </View>

 <TouchableOpacity onPress={() => navigateTo("storeLocator")}>
 <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 16, }}>
 <Image style={homeStyles.searchIcon} resizeMode='contain' source={require('../assets/images/home/Search.png')} />
 </View>
 </TouchableOpacity>
 </View>
 </View>
 <View style={{ borderColor: 'rgba(121,121,121,0.57)', paddingLeft:10, paddingRight:10}}>
 <FlatList
 horizontal
 showsHorizontalScrollIndicator={false}
 data={this.state.showdata}
 keyExtractor={(item, index) => index.toString()} ref={ref => {
 this.flatListRef = ref;
 }} ItemSeparatorComponent={() => <View style={Styles.itemSeperator} />}
 renderItem={({ item, index }) =>
 <View style={{ width: deviceWidth - 52, borderColor: 'rgba(121,121,121,0.57)', borderWidth: 1, borderRadius: 23, marginLeft:8, marginRight:8 }}>
 <View style={{ flex: 1, height: 250, }}>
 <View style={{ flexDirection: 'row', borderRadius: 25, height: 150, paddingLeft: 16, }}>
 <TouchableOpacity onPress={() => navigateTo("storeDetails", item)}>
 <View style={{ flex: 1, backgroundColor: 'white', }}>
 <Text style={{ color: 'rgb(51,51,51)', fontSize: 22, fontWeight: "bold", paddingTop: 10 }}>
 {item.name}
 </Text>
 <Text style={{ color: 'rgb(128,128,128)', fontSize: 14, fontWeight: 'bold', paddingTop: 5 }}>
 {item.address}
 </Text>
 <Text style={{ color: 'rgb(128,128,128)', fontSize: 14, fontWeight: 'bold' }}>
 {item.address1}
 </Text>
 <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 5 }}>
 <Text style={{ fontSize: 10, color: 'rgb(128,128,128)', }}>
 OPEN-
 </Text>
 <Text style={{ fontSize: 10, }}>
 {item.hours}
 </Text>
 </View>
 <View style={{ flex: 1, flexDirection: 'row', paddingTop: 5, }}>
 <Image style={{ height: 12, width: 12, marginTop: Platform.OS === 'ios' ? 1 : 3 }} source={require('../assets/images/home/FuelCard.png')} />
 <Text style={{ fontSize: 10, marginLeft: 5 }}>
 {item.card}
 </Text>
 </View>
 </View>
 </TouchableOpacity>
 <View style={{ flex: 0.2 }}>
 </View>
 <View style={{ flex: 1.5, overflow: "hidden", }}>
 <ImageBackground style={{ height: "100%", width: "100%", borderTopRightRadius: Platform.OS === 'ios' ? 23 : 0, overflow: 'hidden' }} imageStyle={{ borderTopRightRadius: 23, overflow: 'hidden' }} resizeMode='cover' source={require('../assets/images/Prefered-Staion-Android.png')} >

 {item.category == 'esso' ?
 <Image style={{ height: 40, width: 40, marginLeft: 30, marginTop: 40 }} source={require('../assets/images/home/EssoGoFuel.png')} />
 :
 <Image style={{ height: 40, width: 40, marginLeft: 30, marginTop: 40 }} source={require('../assets/images/home/ShellGoFuel.png')} />
 }
 </ImageBackground>
 </View>
 </View>
 <Swiper paginationStyle={{ alignSelf: 'center', justifyContent: 'center', height: 130 }}>
 <View style={{ flex: 1, height: 160, borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
 <View style={{ flex: 1, flexDirection: 'row', height: 20, borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }} />
 <View style={{ flex: 4, flexDirection: 'row', borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-Restroom-android.png')} />
 <Text style={{ fontSize: 13, }}>{Constantlist.storeDetails.restRoom}</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-restaurant-android.png')} />
 <Text style={{ fontSize: 13, }}>{Constantlist.storeDetails.restaurant}</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-carwash-android.png')} />
 <Text style={{ fontSize: 13, }}>{Constantlist.storeDetails.carWash}</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-24-7-android.png')} />
 <Text style={{ fontSize: 13, marginLeft: 10 }}>{Constantlist.storeDetails.storeOpens}</Text>
 </View>
 </View>
 </View>


 <View style={{ flex: 1, height: 160, borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
 <View style={{ flex: 1, flexDirection: 'row', height: 20, borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }} />
 <View style={{ flex: 4, flexDirection: 'row', borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/truckshop.png')} />
 <Text style={{ fontSize: 13, }}>Truck Stop</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/coffee.png')} />
 <Text style={{ fontSize: 13, }}>Coffee</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/freewifi.png')} />
 <Text style={{ fontSize: 13, }}>Free Wifi</Text>
 </View>
 <View>
 <Image style={{ height: 35, width: 35, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/parking.png')} />
 <Text style={{ fontSize: 13 }}>Parking</Text>
 </View>
 </View>
 </View>
 </Swiper>
 </View>

 </View>
 }
 />
 </View>
 </View>
 */}


 <View style={{ borderLeftColor: '#ffffff', borderRightColor: '#ffffff', borderTopColor: '#ffffff', borderBottomColor: 'rgb(239,239,239)', borderBottomWidth: 10, }}>
 <View style={{ flex: 1, flexDirection: 'row', height: 225 }}>
 <View style={{ flex: 2, height: 225 }}>
 <ImageBackground style={{ height: 225, width: 370 }} source={require('../assets/images/home/Banner.png')} >
 <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 11 }}>
 <Text style={{ color: '#ffffff', fontSize: 24,fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular }}> Earn your</Text>
 <Text style={{ color: '#ffffff', fontSize: 24,fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular, paddingBottom: Platform.OS === 'ios' ? 10 : 10 }}> rewards today. </Text>
 <Text style={{ color: '#333333', fontSize: 12, fontFamily : Platform.OS === "ios" ? SFProTextbold : RobotoMedium }}> Access all Euro Garages loyalty</Text>
 <Text style={{ color: '#333333', fontSize: 12, fontFamily : Platform.OS === "ios" ? SFProTextbold : RobotoMedium }}> program benefits and vouchers</Text>
 </View>
 </ImageBackground>
 </View>
 <View style={{ flex: 1.6, height: 225, }}>
 <View style={{ flex: 2, justifyContent: 'flex-end', alignItems: 'center',paddingRight:20 }}>
 <Image style={{ height: 90, width: 123 }} source={require('../assets/images/home/Coupons.png')} />
 </View>
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight:17}}>
 <TouchableOpacity style={{
 height: 35,
 width: 95,
 borderRadius: 60,
 backgroundColor: '#0f71b8',
 justifyContent: 'center',
 alignItems: 'center'
 }} onPress={() => navigateTo("membershipDetails")}>

 <Text style={{ color: '#ffffff', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize:12 }}>Learn More</Text>
 </TouchableOpacity>
 </View>
 </View>
 </View>
 </View>
 <View style={{ borderLeftColor: '#ffffff', borderRightColor: '#ffffff', borderTopColor: '#ffffff', borderBottomColor: 'rgb(239,239,239)', }}>
 <View style={{ paddingTop: 20, backgroundColor: '#ffffff' }}>
 <View style={{ flex: 1, flexDirection: 'row' }}>
 <View style={{ paddingLeft: 16, paddingBottom: 15 }}>
 <Text style={{ fontSize: 18, color: 'black', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>Exclusive Vouchers for</Text>
 <Text style={{ fontSize: 18, color: 'black', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>New Members</Text>
 </View>
 <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 16 }}>
 <TouchableOpacity onPress={() => navigateTo("register", { comingFrom: "prehome" })}>
 <View style={{}}>
 <Text style={{ color: '#0f71b8', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,fontSize: 14 }}>More</Text>
 </View>
 </TouchableOpacity>
 </View>
 </View>
 <View style={{ flex: 1, height: 330,paddingLeft:10, paddingRight:10}}>
 <FlatList
 horizontal
 showsHorizontalScrollIndicator={false}
 data={this.state.brandsandvoucherdata}
 renderItem={({ item, index }) =>
 <View style={{ width: deviceWidth - 52, marginLeft: 8, marginRight:8, borderRadius:10}}>
 <View>
 <TouchableOpacity onPress={() => navigateTo("register", { comingFrom: "prehome" })}>
 <ImageBackground style={{ height: 195, borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: "hidden" }}
 imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: "hidden" }}
 resizeMode='cover' source={require("../assets/images/StarBucks.png")} >
 <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 120, paddingRight: 10 }}>
 <View style={{ backgroundColor: 'rgb(15,113,184)', height: 35, width: 95, borderRadius: 60, justifyContent: 'center', alignItems: 'center' }}>
 <Text style={{ color: '#ffffff', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize:12 }}>Join Now</Text>
 </View>
 </View>
 <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
 <Text style={{ color: '#ffffff', fontSize: 10, }}>Valid till 02 Nov 2018</Text>
 </View>
 </ImageBackground>
 </TouchableOpacity>
 </View>
 <View style={{ flex: 0.8, backgroundColor: '#ffffff', paddingLeft: 16, borderBottomColor: 'rgb(239, 239, 239)', borderLeftColor: 'rgb(239, 239, 239)', borderRightColor: 'rgb(239, 239, 239)', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
 <View style={{ flex: 1, }}>
 <Text style={{ color: '#333333', fontSize: 22, fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, marginTop:20}}>Caffe Latte </Text>
 <Text style={{ color: '#979797', fontSize: 16, fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular, marginBottom:20}}>Buy one get the second <Text style={{ color: 'rgb(15, 113, 184)' }} >&euro;2 off. </Text></Text>
 <Text style={{ color: '#000000', fontSize: 12, fontFamily : Platform.OS === "ios" ? SFProTextSemibold : RobotoMedium , marginTop:-15}}>STARBUCKS </Text>
 </View>
 </View>
 </View>
 } />
 </View>
 </View>
 </View>

 <View style={{ borderLeftColor: '#ffffff', borderRightColor: '#ffffff', borderTopColor: 'rgb(239,239,239)', borderBottomColor: 'rgb(239,239,239)', borderWidth:1 }}>
 <View style={{ paddingTop: 20 }}>
 <View style={{ flex: 1,backgroundColor: '#fafafa', height: 170, padding: 16 }}>
 <View style={{ flex: 0.3, }}>
 <Text style={{ fontSize: 18, color: 'black', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>
 Browse Vouchers by Partner </Text>
 </View>

 <FlatList
 horizontal
 showsHorizontalScrollIndicator={false}
 data={this.state.brandsandvoucherdata}
 renderItem={({ item, index }) =>
 <View>
 <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', }}>
 <View style={{margin:5}}>
 <Image style={{ height: 85, width: 85, }} resizeMode='cover' source={require('../assets/images/home/MacCount.png')} />
 <Text style={{ color:'#000', opacity:.5, alignSelf: 'center', fontSize: 10,fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, }}>McDonald’s</Text>
 </View>
 <View style={{margin:5}}>
 <Image style={{ height: 85, width: 85, }} resizeMode='cover' source={require('../assets/images/home/StarBucksCount.png')} />
 <Text style={{ color:'#000', opacity:.5, alignSelf: 'center', fontSize: 10,fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, }}>Starbucks</Text>
 </View>
 <View style={{margin:5}}>
 <Image style={{ height: 85, width: 85, }} resizeMode='cover' source={require('../assets/images/home/SubwayCount.png')} />
 <Text style={{ color:'#000', opacity:.5, alignSelf: 'center', fontSize: 10,fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, }}>Subway</Text>
 </View>
 <View style={{margin:5}}>
 <Image style={{ height: 85, width: 85, }} resizeMode='cover' source={require('../assets/images/home/BurgerKingCount.png')} />
 <Text style={{ color:'#000', opacity:.5, alignSelf: 'center', fontSize: 10,fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, }}>Burger King</Text>
 </View>
 </View>
 </View>
 } />
 </View>
 </View>
 </View>

 <View style={homeStyles.borderBurgerColor}>
 <View style={{ paddingTop: 20, backgroundColor:'#ffffff'}}>
 <View style={{ flex: 1, flexDirection: 'row',backgroundColor:'#ffffff', }}>
 <View style={{ paddingLeft: 16, paddingBottom: 15 }}>
 <Text style={{ fontSize: 18, color: 'black', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium}}>Popular Vouchers for Members</Text>
 </View>
 <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 16 }}>
 <TouchableOpacity onPress={() => navigateTo("register", { comingFrom: "prehome" })}>
 <View>
 <Text style={{ color: '#0f71b8', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize: 14 }}>More</Text>
 </View>
 </TouchableOpacity>
 </View>
 </View>
 <View style={homeStyles.voucherHeight}>
 <FlatList
 horizontal
 showsHorizontalScrollIndicator={false}
 data={this.state.brandsandvoucherdata}
 renderItem={({ item, index }) =>
 <View style={{ width: deviceWidth - 52, marginLeft: 8, marginRight:8,borderRadius:10}}>
 <View>
 <TouchableOpacity onPress={() => navigateTo("register", { comingFrom: "prehome" })}>
 <ImageBackground style={{ height: 195, borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: "hidden" }}
 imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: "hidden" }}
 resizeMode='cover' 
 source={require("../assets/images/home/Burger.png")} >
 <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 120, paddingRight: 10 }}>
 <View style={{ backgroundColor: 'rgb(15,113,184)', height: 35, width: 95, borderRadius: 60, justifyContent: 'center', alignItems: 'center' }}>
 <Text style={{ color: '#ffffff', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize:12 }}>Join Now</Text>
 </View>
 </View>
 <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
 <Text style={{ color: '#ffffff', fontSize: 10, }}>Valid till 02 Nov 2018</Text>
 </View>
 </ImageBackground>
 </TouchableOpacity>
 </View> 
 <View style={{ flex: 0.8, backgroundColor: '#ffffff', paddingLeft: 16, borderBottomColor: 'rgb(239, 239, 239)', borderLeftColor: 'rgb(239, 239, 239)', borderRightColor: 'rgb(239, 239, 239)', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
 <View style={{ flex: 1, }}>
 <Text style={{ color: '#333333', fontSize: 22, fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, marginTop:20}}>McChicken Burger</Text>
 <Text style={{ color: '#979797', fontSize: 16, fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular, marginBottom:20}}>Buy one get the second <Text style={{ color: 'rgb(15, 113, 184)' }} >&euro;2 off. </Text></Text>
 <Text style={{ color: '#000000', fontSize: 12, fontFamily : Platform.OS === "ios" ? SFProTextSemibold : RobotoMedium , marginTop:-15}}>MCDONALD'S </Text>
 </View>
 </View>
 </View>
 } />
 </View>
 </View>
 </View>
 </SafeAreaView>
 </ScrollView>
 );
 }
}

/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({ 
 weatherData: state.homeReduc.weatherData
});

/**
* Converting functions to props for the Login component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({
 /**
 * @function onAppInstall: It takes a boolean value and updates the redux store.
 * @params {boolean} payload: It has a boolean value.
 */
 onAppInstall: payload => dispatch(onAppInstall(payload)),
 handleHomeDataRequest: (token, lat, lon) => dispatch(getHomeData(token, lat, lon))
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);