
/**
* @author RaviKumar G<ravikumar.pampanagouda@photoninfotech.net>
* @version 1.0.3
* @summary VoucherCardDetails screen for the application.
* @description The screen shows the VoucherCardDetails
* first login to application. using credentials email and password,
* this screen will be in LoggedUserHomeScreen screen when you tap on Voucher this screen opens
* The screen uses react npm modules.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, FlatList from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
*/
import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, View, ScrollView, ImageBackground, Icon, Image, TouchableOpacity,SafeAreaView } from "react-native";

/**
* @import Toolbar for building our screen.
* @description  Toolbar is to Display on top screen and shows Title
* @import {navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateBack:  It deletes the back history
* and no animation happens while screen transition.
* navigateBack(): It simply naviagates the user to the back screen.
*/
import { Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";
import termsAndConditions from "../styles/termsAndConditions";

//Constantlist hardcoded text
import Constantlist from "./../constants/lagunage_constant";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";
import Styles from '../styles/screenStyles';

/**
* @class VoucherCardDetails
* @extends Component
* @summary Represents VoucherCardDetails class.
* @description This is a VoucherCardDetails class. It extands react Component class for using the functions comes along with it.
*/
class VoucherCardDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
        outletImg : props.outletImg,
        }
    }
    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * it shows the header title and Content Text
    */
    render() {
        return (
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={{ flex: 1,backgroundColor:'#ffffff'}}>
                    <View style={{ flex: 2, }}>
                        <ImageBackground
                            style={{ height: 350, resizeMode: 'contain', overflow: 'hidden' }}
                            source={this.state.outletImg}>
                            <Toolbar style={{ backgroundColor: 'transparant', color:'white'}} onClickLeftIcon={navigateBack} iconName="loginpage" title={this.props.title} />
                        </ImageBackground>
                    </View>


                    <View style={{ flex: 3, }}>
                        <Text style={{ fontSize: 38, fontWeight: 'bold', textAlign: 'center', color: 'black', marginTop: 40 }}>{Constantlist.voucherListScreen.cashOff}</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center' , marginTop:20}}>
                            <Text style={{ color: '#979797', fontSize: 16, }}> Buy One get the second <Text style={{ color: 'rgb(15, 113, 184)' }} >&euro;2 off. </Text></Text>
                            <Text style={{ color: '#979797', fontSize: 16, }}> Voucher Code <Text style={{ color: 'rgb(15, 113, 184)', }} > STARBUCKS1 </Text></Text>
                        </View>
                        <Image
                            style={{
                                width: 300, height: 150,
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginTop: 30
                            }}
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8mHRczu1flp3Evh0M9wM4tppSxHWYeBzfANDH-nbDlSxdgK6Rg" }} />

                        <View style={{ textAlign: 'center',justifyContent: 'center',alignItems: 'center',marginTop:10 }}>
                            <Text style={{ textAlign: 'center',fontSize:11}}>{Constantlist.voucherListScreen.voucherValidity}</Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row', textAlign: 'center',justifyContent: 'center',alignItems: 'center', marginTop:100, marginBottom:20}}>
                            <TouchableOpacity onPress={() => navigateTo("termsAndConditions")}>
                                <Text style={{ color: 'rgb(15,113,184)', fontSize: 11,textDecorationLine: 'underline' }}>{Constantlist.voucherListScreen.termsAndeConditions}</Text>
                            </TouchableOpacity>
                            <Text style={{ color: '#333333', fontSize: 11}}>{Constantlist.voucherListScreen.termsAndeConditionsSub}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            </SafeAreaView>
        );
    }
}


/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({});

/**
* Converting functions to props for the Login component
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
export default connect(mapStateToProps, mapDispatchToProps)(VoucherCardDetails);

