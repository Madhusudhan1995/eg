/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import React, { Component } from 'react';
import {Text,View,TouchableOpacity, Image, Dimensions, DeviceEventEmitter} from 'react-native';
import { navigateBack, navigateTo, redirectTo } from "../../helpers";
import { InputText, Button, LinkButton, Toolbar, Checkbox } from "../../components";

import GLOBALS from '../../constants/Globals';
// import - Styles
import componentstyles from "../../styles/componentStyles";
import ScreenStyles from '../../styles/screenStyles';
/**
* Represents ViewPagerItemsLanding.
* @class ViewPagerItemsLanding
* @extends Component
*/

// Store width, height in variable
var windowWidth = Dimensions.get('window').width; 
var windowHeight = Dimensions.get('window').height; 

const images = {
    image1: require('./../../assets/images/onbaording_loyalty.png'),
    image2: require('./../../assets/images/onboarding_stations.png'),
    image3: require('./../../assets/images/onboarding_eg_club.png'),
};

class ViewPagerItemsLanding extends Component {

    constructor(props){
        super(props);
        this.state = {
            title       : props.title,
            desc        : props.desc,
        };
    }

    /**
    * @function onCloseClick
    * This method calls when user clicks on icon close 
    */
    onCloseClick = () => {
        DeviceEventEmitter.emit('closeIconClicked', true);
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */
    render() {
        return (
                <View style={[componentstyles.viewpagerItemBgColorTextStyle, {height: '100%', backgroundColor : "white",}]}>
                    
                    <View style={[componentstyles.viewpagerItemBgColorTextStyle, {height : 56, width : '100%', padding : 16, backgroundColor : "white",}]}>
                        <View style={{padding : 16, alignSelf : 'flex-end', flex : 2,}}>
                            <View style={{position: "absolute", top: 5, right: 5, }}>
                            <TouchableOpacity onPress={this.onCloseClick}>
                                <Image style={componentstyles.viewPagerCloseIcon} source={require('./../../assets/images/Onboarding_close.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{height: '85%', width : '100%', padding : 16 , flex:1, flexDirection: "column", justifyContent: "center"}}>
                        <Image style={{width: 150, height : 103}} source={require('./../../assets/images/onboarding_logo_main.png')} />
                        <Text style={[componentstyles.viewpagerLandTextStyle]}>{this.state.title}</Text>
                        <Text style={[componentstyles.viewpagerLandDescTextStyle]}>{this.state.desc}</Text>
                    </View>

                   <View style={{height : 56, width : '100%', backgroundColor : "white", paddingRight : 16, }}>
                        <View style={{padding : 16, flex : 1, flexDirection: "column", marginBottom : 10}}>
                        <View style={[componentstyles.viewpagerLandSwipeConatinerStyle, {flex : 1}]}>
                            <Text style={componentstyles.viewpagerLandSwipeContinueStyle}>>>> Swipe to continue </Text>
                        </View>
                            <View style={[componentstyles.viewpagerLoginBtnStyle, { flex : 2, }]}>
                                <TouchableOpacity onPress={() => navigateTo("register")}>
                                    <Text style={ScreenStyles.viewPaferLoginTextFont}>{GLOBALS.TEXT.LOGIN}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
        );
    }
}

export default ViewPagerItemsLanding;
