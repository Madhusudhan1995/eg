/**
* @author Ravi Kumar G <ravikumar.pampanagouda@photoninfotech.net>
* @version 1.0.0
* @summary implemented UserHome(Logged User Home) page.
*/

// Import npm modules
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, Image, Dimensions, ScrollView, ImageBackground, Platform, Modal ,StatusBar, DeviceEventEmitter} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from "react-native-linear-gradient";
import { Icon } from "react-native-elements";

// Import custom classes
import { navigateBack, navigateTo } from "../helpers";
import { getUserDetails } from "../actions/authActions";
import { getHomeData } from "../actions/homeActions";

// Import styles
import Styles from '../styles/screenStyles';
import homeStyles from "../styles/homeStyles";

const SFProTextMedium = "SFProText-Medium";
const SFProTextRegular = "SFProText-Regular";
const SFProTextSemibold = "SFProText-Semibold";
const SFProTextbold = "SFProText-Bold";
const RobotoMedium = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";
const RobotoBold = "Roboto-Bold";


//Constantlist hardcoded text
import Constantlist from "./../constants/lagunage_constant";
import Globals, {checkLocationPermission, removeOnLocationChangedListener, closeGeoLocation} from "./../constants/Globals";

// setting the width dimensions of a UserHome component.
let deviceWidth = Dimensions.get('window').width

/**
* Represents UserHome class.
* @class UserHome
* @extends Component
*/
class Home extends Component {

 constructor(props) {
 super(props);
 this.state = {
 // modalVisible: false,
 // modalVisible1: false,
 data: [],
 stationdata: Constantlist.home.homeData,
 preferredStationsList: Constantlist.home.preferredStationsList,
 showdata: Constantlist.home.showdata,
 nearestStationsActive: true,
 preferredStationsActive: false,
 brandsandvoucherdata: Constantlist.home.brandandvoucherdata,
 iconName: 'search',
 textInputValue: '',
 outletImg: require("../assets/images/home/Burger.png"),
 outletImgStarbuck: require("../assets/images/StarBucks.png"),
 }
 }
 /**
 * @function setModalVisible
 * setModalVisible method for rendering the Vocher Details screen
 */
 // setModalVisible(visible) {
 // this.setState({ modalVisible: visible });
 // }

 // setModalVisible1(visible) {
 // this.setState({ modalVisible1: visible });
 // }
 /**
* @function toggleModal
* toggleModal method for rendering the Vocher Details screen
*/
 // toggleModal(visible) {
 // this.setState({ modalVisible: visible });
 // }
 // toggleModal1(visible) {
 // this.setState({ modalVisible1: visible });
 // }

 preferredStationsTapped() {
 this.setState({ showdata: this.state.preferredStationsList, nearestStationsActive: false, preferredStationsActive: true })
 }

 nearestStationsTapped() {
 this.setState({ showdata: this.state.stationdata, preferredStationsActive: false, nearestStationsActive: true });
 }

 /**
 * @function componentDidMount
 * componentDidMount method called when components are mounted.
 * StatusBar.setHidden(true) -> statusbar will be hided.
 */
 componentDidMount() {
 StatusBar.setHidden(false);
 this.props.handleGetUserDetails(this.props.token);
 checkLocationPermission();
 }

 /**
 * @function onCardClick: It gets called when user presses the back buttom
 * It updates the state and Navigate to creditAndDebitDetails Screen.
 */
 onCardClick = (outletImg) => {
 navigateTo("voucherCardDetails",{outletImg});
 };

 /**
 * @function componentWillMount
 * componentWillMount method called when components are mounted.
 * Added listener to listen callback's from other components
 */
 componentWillMount() {
 removeOnLocationChangedListener();
 DeviceEventEmitter.addListener(Globals.EVENT.ON_LOCATION_CHANGED, (data) => {
 this.props.handleHomeDataRequest(this.props.token, data.lastLat, data.lastLong);
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
 * @function render
 * React render method for rendering the native elements
 */
 render() {
 const { user } = this.props;
 const { weatherData } = this.props;
 return (
 <SafeAreaView style={Styles.homeContainer}>
 <View style={[Styles.appContainer, Styles.whiteBackground]}>

 <ScrollView >
 <View style={{ backgroundColor: 'rgb(15,113,184)', flex: 1, flexDirection: 'column', height: 184 }}>
 <View style={{ flex: 1, alignSelf: 'center' }}>
 <Image style={{ height: 42, width: 62, marginTop: 20 }} source={require('../assets/images/home/Logo.png')} />
 </View>

 <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 20, }}>
 <View style={{ flex: 3, flexDirection: 'column', paddingLeft: 16 }}>
 <Text style={homeStyles.welcomeNote}>{weatherData.welcomeNote ? weatherData.welcomeNote + "," : 'Good Evening'}</Text>
 <Text style={homeStyles.welcomeUser}>{user ? user.firstName : Constantlist.userHome.userName}</Text>

 <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
 <Text style={homeStyles.memberofText}>{Constantlist.userHome.memberof} <Text style={homeStyles.medalText}>{Constantlist.userHome.medal}</Text> </Text>
 <TouchableOpacity onPress={() => navigateTo("membershipBenefits")}>
 <View style={{ paddingLeft: 3 }}>
 <Image style={{ height: 15, width: 15, marginTop: 2 }} source={require('../assets/images/home/Info.png')} />
 </View>
 </TouchableOpacity>
 </View>
 </View>
 <View style={{ flex: 0.8, }}>
 <Image style={{ height: 53, width: 53 }} source={weatherData.weatherIconUrl ? { uri: weatherData.weatherIconUrl } :
 require('../assets/images/home/Weather.png')} />
 </View>
 </View>
 </View>


 <View style={{ borderLeftColor: '#ffffff', borderRightColor: '#ffffff', borderTopColor: '#ffffff', borderBottomColor: 'rgb(239,239,239)', borderBottomWidth: 10, }}>
 <View style={{ flex: 1, flexDirection: 'column', paddingTop: 10, paddingBottom: 20, backgroundColor: '#ffffff',}}>
 <View style={{ flex: 1, flexDirection: 'row', margin:15 }}>
 <View style={{ flex: 3, paddingLeft: 8 }}>
 <TouchableOpacity onPress={() => this.nearestStationsTapped()}>
 <Text style={{ color: "#000000", opacity: this.state.nearestStationsActive ? 1 : .5, fontSize: 12, fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>{Constantlist.userHome.nearestStations}</Text>
 {this.state.nearestStationsActive && <View style={{ height: 2, marginTop: 4, width: Platform.OS === 'ios' ? 98 : 90, backgroundColor: 'rgb(15, 113, 184)' }} />}
 </TouchableOpacity>
 </View>
 <View style={{ flex: 3, }}>
 <TouchableOpacity onPress={() => this.preferredStationsTapped()}>
 <Text style={{ color: "#000000", opacity: this.state.preferredStationsActive ? 1 : .5, fontSize: 12, fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>{Constantlist.userHome.preferredStation}</Text>
 {this.state.preferredStationsActive && <View style={{ height: 2, marginTop: 4, width: Platform.OS === 'ios' ? 107 : 100, backgroundColor: 'rgb(15, 113, 184)' }} />}
 </TouchableOpacity>
 </View>
 <View style={{ flex: 1.2, }}>
 <TouchableOpacity onPress={() => navigateTo("storeLocator")}>
 <Image style={homeStyles.searchIcon} resizeMode='contain' source={require('../assets/images/home/Search.png')} />
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
 </View>
 </View>
 <View style={{ height: 250, borderLeftColor: '#ffffff', borderRightColor: '#ffffff', borderTopColor: '#ffffff', borderBottomColor: 'rgb(239,239,239)', borderBottomWidth: 10, }}>

 <Swiper activeDotStyle={{ marginLeft: 9, width: 5, height: 5, marginRight: 9 }} dotStyle={{ height: 5, marginLeft: 9, marginRight: 9, width: 5 }}
 paginationStyle={{ bottom: Platform.OS === 'ios' ? 16 : 10 }}>


 <View style={{ flex: 1, flexDirection: 'row', height: 250 }}>
 <View style={{ flex: 2, }}>
 <ImageBackground style={{ height: Platform.OS === 'ios' ? 240 : 250, width: 370 }} source={require('../assets/images/home/Banner.png')} >
 <View style={{ paddingTop: 70, paddingLeft: 13 }}>
 <Text style={{ color: '#ffffff', fontSize: 24, fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular }}>{Constantlist.userHome.earnText}</Text>
 <Text style={{ color: '#ffffff', fontSize: 24, fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular }}>{Constantlist.userHome.rewards}</Text>
 <Text style={{ color: '#333333', fontSize: 12, fontFamily: Platform.OS === "ios" ? SFProTextbold : RobotoMedium, paddingTop: Platform.OS === 'ios' ? 15 : 10 }}>{Constantlist.userHome.discoveryText}</Text>
 <Text style={{ color: '#333333', fontSize: 12, fontFamily: Platform.OS === "ios" ? SFProTextbold : RobotoMedium }}>{Constantlist.userHome.levelText}</Text>
 </View>
 </ImageBackground>
 </View>

 <View style={{ flex: 1.6, height: 250, }}>

 <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 15, }}>
 <Image style={{ height: 125, width: 136 }} resizeMode='contain' source={require('../assets/images/home/progress.png')} />
 <Text style={{ color: 'rgb(15,113,184)', fontSize: 18, fontFamily: Platform.OS === "ios" ? SFProTextbold : RobotoMedium, marginLeft: 50, marginBottom: 100 }}>{Constantlist.userHome.percentage}</Text>
 </View>
 <View style={{ flex: 0.6, justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 20, marginTop: 30 }}>
 <TouchableOpacity style={{
 height: 40,
 width: 100,
 borderRadius: 60,
 backgroundColor: '#0f71b8',
 justifyContent: 'center',
 alignItems: 'center'
 }} onPress={() => navigateTo("membershipBenefits")}>
 <Text style={{ color: '#ffffff', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize:12 }}>{Constantlist.userHome.myProgress}</Text>
 </TouchableOpacity>
 </View>
 </View>
 </View>

 <View style={{}}>
 <View style={{ flex: 1, flexDirection: 'row', height: 250 }}>
 <View style={{ flex: 2 }}>
 <ImageBackground style={{ height: Platform.OS === 'ios' ? 240 : 250, width: 370 }} source={require('../assets/images/home/Banner.png')} >
 <View style={{ paddingTop: 70, paddingLeft: 13 }}>
 <Text style={{ color: '#ffffff', fontSize: 24, fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular }}>{Constantlist.userHome.earnText}</Text>
 <Text style={{ color: '#ffffff', fontSize: 24, fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular }}>{Constantlist.userHome.rewards}</Text>
 <Text style={{ color: '#333333', fontSize: 12, fontFamily: Platform.OS === "ios" ? SFProTextbold : RobotoMedium,paddingTop: Platform.OS === 'ios' ? 15 : 10 }}>{Constantlist.userHome.discoveryPossibilities}</Text>
 <Text style={{ color: '#333333', fontSize: 12, fontFamily: Platform.OS === "ios" ? SFProTextbold : RobotoMedium,}}>{Constantlist.userHome.euroGuaraugeProgram}</Text>
 </View>
 </ImageBackground>
 </View>

 <View style={{ flex: 1.6, height: 250 }}>
 <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 15, }}>
 <Image style={{ height: 125, width: 136 }} resizeMode='contain' source={require('../assets/images/home/loyalty-program.png')} />
 </View>
 <View style={{ flex: 0.6, justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 20, marginTop: 30 }}>
 <TouchableOpacity style={{
 height: 40,
 width: 100,
 borderRadius: 60,
 backgroundColor: '#0f71b8',
 justifyContent: 'center',
 alignItems: 'center'
 }} onPress={() => navigateTo("membershipDetails")}>
 <Text style={{ color: '#ffffff', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize:12}}>{Constantlist.userHome.learnmore}</Text>
 </TouchableOpacity>
 </View>
 </View>
 </View>
 </View> 
 

 <View style={{}}>
 <View style={{ flex: 1, flexDirection: 'row', height: 250 }}>
 <View style={{ flex: 2 }}>
 <ImageBackground style={{ height: Platform.OS === 'ios' ? 240 : 250, width: 370 }} source={require('../assets/images/home/Banner.png')} >
 <View style={{ paddingTop: 70, paddingLeft: 13 }}>
 <Text style={{ color: '#ffffff', fontSize: 24, fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular}}>{Constantlist.userHome.earnText}</Text>
 <Text style={{ color: '#ffffff', fontSize: 24, fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular }}>{Constantlist.userHome.rewards}</Text>
 <Text style={{ color: '#333333', fontSize: 12, fontFamily: Platform.OS === "ios" ? SFProTextbold : RobotoMedium, paddingTop: Platform.OS === 'ios' ? 15 : 10 }}>Explore the possibilities</Text>

 </View>
 </ImageBackground>
 </View>

 <View style={{ flex: 1.5, height: 250, paddingLeft: 10 }}>
 <View style={{ flex: 0.4, }} />
 <View style={{ flex: 1, justifyContent: 'flex-end', paddingRight: 10, }}>
 <Image source={require('../assets/images/home/Gofuel-card.png')} style={{ width: "100%", height: "100%", position: 'absolute' }} resizeMode='contain' />

 </View>

 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
 <TouchableOpacity style={{
 height: 40,
 width: 140,
 borderRadius: 60,
 backgroundColor: '#0f71b8',
 justifyContent: 'center',
 alignItems: 'center'
 }} onPress={() => navigateTo("wallet")}>
 <Text style={{ color: '#ffffff', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize:12}}>{Constantlist.userHome.manageYourCard}</Text>
 </TouchableOpacity>
 </View>
 </View>
 </View>
 </View>

 </Swiper>
 </View>

 <View style={{ borderLeftColor: '#ffffff', borderRightColor: '#ffffff', borderTopColor: '#ffffff', borderBottomColor: 'rgb(239,239,239)', }}>
 <View style={{ paddingTop: 20, backgroundColor: '#ffffff' }}>
 <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#ffffff', }}>
 <View style={{ paddingLeft: 16, paddingBottom: 15 }}>
 <Text style={{ fontSize: 18, color: 'black', fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>Recommended Vouchers</Text>
 <Text style={{ fontSize: 18, color: 'black', fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>for You</Text>
 </View>
 <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 16 }}>
 <TouchableOpacity onPress={() => navigateTo("voucher")}>
 <View>
 <Text style={{ color: '#0f71b8', fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize: 14 }}>View All</Text>
 </View>
 </TouchableOpacity>
 </View>
 </View>
 <View style={{ flex: 1, height: 330, paddingLeft:10, paddingRight:10}}>
 <FlatList
 horizontal
 showsHorizontalScrollIndicator={false}
 data={this.state.brandsandvoucherdata}
 renderItem={({ item, index }) =>
 <View style={{ width: deviceWidth - 52, marginLeft: 8, marginRight:8, borderRadius: 10 }}>
 <View>
 <TouchableOpacity onPress={() => this.onCardClick(this.state.outletImgStarbuck)}>
 <ImageBackground style={{ height: 195, borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: "hidden" }}
 imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: "hidden" }}
 resizeMode='cover' source={require("../assets/images/StarBucks.png")}>
 <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 120, paddingRight: 10 }}>
 <View style={{ backgroundColor: 'rgb(15,113,184)', height: 35, width: 95, borderRadius: 60, justifyContent: 'center', alignItems: 'center' }}>
 <Text style={{ color: '#ffffff', fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize: 12 }}>Use Voucher</Text>
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
 <Text style={{ color: '#333333', fontSize: 22, fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, marginTop: 20 }}>Caffe Latte </Text>
 <Text style={{ color: '#979797', fontSize: 16, fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular, marginBottom: 20 }}>Buy one get the second <Text style={{ color: 'rgb(15, 113, 184)' }} >&euro;2 off. </Text></Text>
 <Text style={{ color: '#000000', fontSize: 12, fontFamily: Platform.OS === "ios" ? SFProTextSemibold : RobotoMedium, marginTop: -15 }}>STARBUCKS </Text>
 </View>
 </View>
 </View>
 } />
 </View>
 </View>
 </View>
 <View style={{ backgroundColor:'#fafafa',borderLeftColor: '#ffffff', borderRightColor: '#ffffff', borderTopColor: 'rgb(239,239,239)', borderBottomColor: 'rgb(239,239,239)', borderWidth:1 }}>
 <View style={{ paddingTop: 20 }}>
 <View style={{ flex: 1, backgroundColor: '#fafafa', height: 170, padding: 16 }}>
 <View style={{ flex: 0.3, }}>
 <Text style={{ fontSize: 18, color: 'black', fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>
 Browse Vouchers by Partner </Text>
 </View>

 <FlatList
 horizontal
 showsHorizontalScrollIndicator={false}
 data={this.state.brandsandvoucherdata}
 renderItem={({ item, index }) =>
 <View>
 <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start', }}>
 <View style={{ margin: 5 }}>
 <Image style={{ height: 85, width: 85, }} resizeMode='cover' source={require('../assets/images/home/MacCount.png')} />
 <Text style={{ color:'#000', opacity:.5, alignSelf: 'center', fontSize: 10, fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, }}>McDonald’s</Text>
 </View>
 <View style={{ margin: 5 }}>
 <Image style={{ height: 85, width: 85, }} resizeMode='cover' source={require('../assets/images/home/StarBucksCount.png')} />
 <Text style={{ color:'#000', opacity:.5, alignSelf: 'center', fontSize: 10, fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, }}>Starbucks</Text>
 </View>
 <View style={{ margin: 5 }}>
 <Image style={{ height: 85, width: 85, }} resizeMode='cover' source={require('../assets/images/home/SubwayCount.png')} />
 <Text style={{ color:'#000', opacity:.5, alignSelf: 'center', fontSize: 10, fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, }}>Subway</Text>
 </View>
 <View style={{ margin: 5 }}>
 <Image style={{ height: 85, width: 85, }} resizeMode='cover' source={require('../assets/images/home/BurgerKingCount.png')} />
 <Text style={{ color:'#000', opacity:.5, alignSelf: 'center', fontSize: 10, fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, }}>Burger King</Text>
 </View>
 </View>
 </View>
 } />
 </View>
 </View>
 </View>


 <View style={homeStyles.borderBurgerColor}>
 <View style={{ paddingTop: 20, backgroundColor: '#ffffff' }}>
 <View style={{ flex: 0.7, flexDirection: 'row', backgroundColor: '#ffffff', }}>
 <View style={{ flex:1, paddingLeft: 16, paddingBottom: 15 , }}>
 <Text style={{ fontSize: 18, color: 'black', fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium }}>Popular Vouchers Near You</Text>
 </View>
 <View style={{ flex: 0.3, alignItems: 'flex-end', paddingRight: 16 }}>
 <TouchableOpacity onPress={() => navigateTo("voucher")}>
 <View style={{}}>
 <Text style={{ color: '#0f71b8', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize: 14 }}>View All</Text>
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
 <View style={{ width: deviceWidth - 52, marginLeft: 8,marginRight:8, borderRadius:10}}>
 <View style={{}}>
 <TouchableOpacity onPress={() => this.onCardClick(this.state.outletImg)}>
 <ImageBackground style={{ height: 195, borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: "hidden" }} 
 imageStyle={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, overflow: "hidden" }} 
 resizeMode='cover' source={require("../assets/images/home/Burger.png")} >
 <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 120, paddingRight: 10 }}>
 <View style={{ backgroundColor: 'rgb(15,113,184)', height: 35, width: 95, borderRadius: 60, justifyContent: 'center', alignItems: 'center' }}>
 <Text style={{ color: '#ffffff', fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium, fontSize:12 }}>Use Voucher</Text>
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

 </ScrollView>
 </View>
 </SafeAreaView>


 );
 }
}
/**
* Converting redux state to props for the UserHome component
* @function mapStateToProps
* @params {object} state
* @returns {object} props
*/
const mapStateToProps = state => ({
 token: state.auth.token,
 user: state.auth.user,
 weatherData: state.homeReduc.weatherData
});
/**
* Converting redux state to props for the UserHome component
* @function mapDispatchToProps
* @params {function} dispatch
* @returns {object} props
*/
const mapDispatchToProps = dispatch => ({
 handleGetUserDetails: (token) => dispatch(getUserDetails(token)),
 handleHomeDataRequest: (token, lat, lon) => dispatch(getHomeData(token, lat, lon))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
