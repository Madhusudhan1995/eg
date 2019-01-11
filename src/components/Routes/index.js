/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React, {Component} from "react";
import {Alert, Image, Dimensions, Platform} from "react-native";
import {Router, Scene, Actions} from "react-native-router-flux";
import { navigateTo } from "../../helpers";

// import - custom class
import Login from "../../screens/Login";
import ForgotPassword from "../../screens/ForgotPassword";
import Register from "../../screens/Register";
import StoreLocator from "../../screens/StoreLocator";
import StoreDetails from "../../screens/StoreDetails";
import Settings from "../../screens/UserSettings";
import PreferredStation from "../../screens/PreferredStation";
import Support from "../../screens/Support";
import EditProfile from "../../screens/EditProfile";
import PrivarcyPolicy from "../../screens/PrivarcyPolicy";
import Notifications from "../../screens/Notifications";
import NewsLetters from "../../screens/NewsLetters";
import TermsAndConditions from "../../screens/TermsAndConditions";
import GuestHome from "../../screens/Home";
import UserHome from "../../screens/UserHome";
import PushNotification from "../../screens/PushNotification";
import VoucherList from "../../screens/VoucherList";
import FuelFilling from "../../screens/FuelFilling";
import PaymentSuccessfull from "../../screens/PaymentSuccessfull";
import Faq from "../../screens/Faq";
import OnBoardingScreen from "../../screens/OnBoardingScreen";
import QRCodeScanning from "../../screens/QRCodeScanning";

import LoyaltyCards from "../../screens/LoyaltyCards";
import ScanCard from "../../screens/ScanCard";
import GoFuelCard from "../../screens/GoFuelCard";
import GoFuelCardDetails from "../../screens/GoFuelCardDetails";
import LoyaltyCardDetails from "../../screens/LoyaltyCardDetails";
import CreditAndDebitDetails from "../../screens/CreditAndDebitDetails";
import creditAndDebitCardList from "../../screens/creditAndDebitCardList";
import CardAddManual from "../../screens/CardAddManual";
import GoFuelCardAddManually from "../../screens/GoFuelCardAddManually";
import LoyaltyCardAddManually from "../../screens/LoyaltyCardAddManually";
import VoucherCardDetails from "../../screens/VoucherCardDetails";
import MembershipBenefits from "../../screens/MembershipBenefits";
import MembershipDetails from "../../screens/MembershipDetails";
import PostScussfullyQRCodeScanning from "../../screens/PostScussfullyQRCodeScanning";

import {setCurrentScene} from "../../actions";
import {persist} from "../../../App";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

/**
* Represents Routes.
* @class Routes
* @extends Component
*/
export default class Routes extends Component {

		constructor(props) {
				super(props);
				this.renderSettingsIcon = this.renderSettingsIcon.bind(this);
				this.renderHomeIcon = this.renderHomeIcon.bind(this);
				this.renderFindIcon = this.renderFindIcon.bind(this);
				this.renderLoyalityIcon = this.renderLoyalityIcon.bind(this);
				this.renderPromotionIcon = this.renderPromotionIcon.bind(this);
				this.renderPayIcon = this.renderPayIcon.bind(this);
		}


    renderSettingsIcon({focused}) {
			let image = focused ? require('../../assets/images/navigation/settingActive.png') : require('../../assets/images/navigation/setting.png');
			return ( <Image source={image} /> );
		}

		renderFindIcon({focused})  {
			let image = focused ? require('../../assets/images/navigation/searchActive.png') : require('../../assets/images/navigation/search.png');
			return ( <Image source={image} /> );
		}

		renderHomeIcon({focused})  {
			let image = focused ? require('../../assets/images/navigation/homeActive.png') : require('../../assets/images/navigation/home.png');
			return ( <Image source={image} /> );
		}

		renderLoyalityIcon({focused})  {
			let image = focused ? require('../../assets/images/navigation/walletActive.png') : require('../../assets/images/navigation/wallet.png');
			return ( <Image source={image} /> );
		}

		renderPayIcon({focused})  {
			let image = focused ? require('../../assets/images/navigation/payActive.png') : require('../../assets/images/navigation/pay.png');
			return ( <Image source={image} /> );
		}

		renderPromotionIcon({focused})  {
			let image = focused ? require('../../assets/images/navigation/settingActive.png') : require('../../assets/images/navigation/setting.png');
			return ( <Image source={image} /> );
		}

		onStateChange = () => {
				persist.store.dispatch(setCurrentScene("_home"));
		}

    /**
    * @function render
    * React render method for rendering the native elements
    */

	render() {
		return (
			<Router onStateChange={this.onStateChange}>
					<Scene>
							<Scene key="auth" hideNavBar={true} initial={this.props.isLoggedin} >
									<Scene key="onBoardingScreen" component={OnBoardingScreen} title="On Boarding Screen" initial={!this.props.isAppInstalled} />
									<Scene tabs key="prehome" hideNavBar={true} swipeEnabled={false} tabBarPosition="bottom" tabBarStyle={{height: 56, paddingVertical: 4}} initial={this.props.isAppInstalled}>
											<Scene key="home" icon={this.renderHomeIcon} hideNavBar={true}   component={GuestHome} title="Home" labelStyle={{paddingTop: 8}} />
											<Scene key="storeLocator" icon={this.renderFindIcon} hideNavBar={true} title="Stations" component={StoreLocator} labelStyle={{paddingTop: 8}} />
											<Scene key="qRCodeScanning" icon={this.renderPayIcon}  hideNavBar={true}  component={QRCodeScanning} tabBarOnPress={() => Alert.alert('','Need to Register or Login to access this section.',[{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},{text: 'Ok', onPress: () => navigateTo("register")},],{ cancelable: false })}  title="Pay"/>
											<Scene tabs key="wallet" hideNavBar={true} icon={this.renderLoyalityIcon} swipeEnabled={true} tabBarOnPress={() => Alert.alert('','Need to Register or Login to access this section.',[{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},{text: 'Ok', onPress: () => navigateTo("register")},],{ cancelable: false })} tabBarPosition="top" title="Wallet" labelStyle={{paddingTop:  8}}>
			                    <Scene key="goFuelCard" hideNavBar={true}  component={GoFuelCard} title="Go fuel Card"/>
			                    <Scene key="creditDebitCards" hideNavBar={true}  component={creditAndDebitCardList} title="Credit & Debit"/>
			                    <Scene key="loyaltyCards" hideNavBar={true}  component={LoyaltyCards} title="Loyalty Cards"/>
			                </Scene>
							<Scene key="settings" icon={this.renderSettingsIcon} hideNavBar={true} title="Settings" tabBarOnPress={() => Alert.alert('','Need to Register or Login to access this section.',[{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},{text: 'Ok', onPress: () => navigateTo("register")},],{ cancelable: false })}  component={Settings}  labelStyle={{paddingTop: 8}} />
									</Scene>
									<Scene key="login" component={Login} title="Login" />
									<Scene key="register" component={Register} title="Register" />
									<Scene key="forgotPassword" component={ForgotPassword} title="ForgotPassword" />
									<Scene key="storeLocator" title="Stations" component={StoreLocator} />
									<Scene key="storeDetails" component={StoreDetails} title="StoreDetails"/>
									<Scene key="termsAndConditions" component={TermsAndConditions} title="Terms & Conditions"/>
                                    <Scene key="privacyPolicy" component={PrivarcyPolicy} title="Privacy Policy"/>
									<Scene key="membershipDetails" component={MembershipDetails} title="Membership Details"/>
							</Scene>
							<Scene key="app" hideNavBar={true} initial={this.props.isLoggedin}>
									<Scene tabs key="home" hideNavBar={true} swipeEnabled={true} tabBarPosition="bottom" tabBarStyle={{height: 56, paddingVertical: 4}}>
											<Scene key="home" icon={this.renderHomeIcon} hideNavBar={true}  component={UserHome} title="Home" labelStyle={{paddingTop: 8}} />
											<Scene key="storeLocator" icon={this.renderFindIcon} hideNavBar={true} title="Stations" component={StoreLocator} labelStyle={{paddingTop: 8}} />
											<Scene key="qRCodeScanning" icon={this.renderPayIcon}  hideNavBar={true}  component={QRCodeScanning} title="Pay"/>
											<Scene tabs key="wallet" hideNavBar={true} icon={this.renderLoyalityIcon} swipeEnabled={true} indicatorStyle={{backgroundColor:"rgb(15, 113, 184)"}} tabBarPosition="top" title="Wallet" labelStyle={{paddingTop: (Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 30 : 8, color: "#333333"}} upperCaseLabel={false} tabBarStyle={{backgroundColor: "#ffffff"}}>
			                    <Scene key="goFuelCard" hideNavBar={true}  component={GoFuelCard} title="Go Fuel Card" />
			                    <Scene key="creditDebitCards" hideNavBar={true}  component={creditAndDebitCardList} title="Credit & Debit"/>
			                    <Scene key="loyaltyCards" hideNavBar={true}  component={LoyaltyCards} title="Loyalty Cards"/>
			                </Scene>
									<Scene key="settings" icon={this.renderSettingsIcon} hideNavBar={true} title="Settings" component={Settings} labelStyle={{paddingTop: 8}} />
									</Scene>
									<Scene key="storeDetails" component={StoreDetails} title="StoreDetails"/>
									<Scene key="settings" component={Settings} title="Settings"/>
									<Scene key="preferredStation" component={PreferredStation} title="Preferred Station"/>
					    		    <Scene key="editProfile" component={EditProfile} title="Edit Profile"/>
									<Scene key="support" component={Support} title="Support"/>
									<Scene key="privacyPolicy" component={PrivarcyPolicy} title="Privacy Policy"/>
									<Scene key="notifications" component={Notifications} title="Notification Preference" />
									<Scene key="newsLetters" component={NewsLetters} title="Newsletter"/>
									<Scene key="termsAndConditions" component={TermsAndConditions} title="Terms & Conditions"/>
									<Scene key="pushNotification" component={PushNotification} title="Push Notification" />
									<Scene key="faqs" component={Faq} title="Frequently asked questions"/>
									<Scene key="qRCodeScanning" component={QRCodeScanning} title="Edit Profile"/>
									<Scene key="postScussfullyQRCodeScanning" component={PostScussfullyQRCodeScanning} title="Edit Profile"/>
									<Scene key="fuelFilling" component={FuelFilling} title="Select Payment"/>
									<Scene key="paymentSuccessfull" component={PaymentSuccessfull} title="Payment Successfull"/>
									<Scene key="voucher"  component={VoucherList} title="Vouchers"/>
									<Scene key="loyaltycard" component={LoyaltyCards} title="LoyaltyCards"/>
									<Scene key="scanCard" component={ScanCard} title="Scan Card" />
									<Scene key="goFuelCardDetails" component={GoFuelCardDetails} title="GO FUEL CARD"/>
									<Scene key="loyaltyCardDetails" component={LoyaltyCardDetails} title="Loyalty Cards"/>
									<Scene key="creditAndDebitDetails" component={CreditAndDebitDetails} title=" Credit & Debit"/>
									<Scene key="creditAndDebitCardList" component={creditAndDebitCardList} title=" Credit & debit"/>
									<Scene key="cardAddManual" component={CardAddManual} title="Card Add Manual"/>
									<Scene key="goFuelCardAddManually" component={GoFuelCardAddManually} title="GoFuelCardAddManually"/>
									<Scene key="loyaltyCardAddManually" component={LoyaltyCardAddManually} title="loyaltyCardAddManually"/>
									<Scene key="voucherCardDetails" component={VoucherCardDetails} title="voucherCardDetails"/>
									<Scene key="membershipBenefits" component={MembershipBenefits} title="membershipBenefits"/>
									<Scene key="membershipDetails" component={MembershipDetails} title="membershipDetails"/>
							</Scene>
					</Scene>
			</Router>
		);
	}
}
