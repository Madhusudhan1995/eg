/**
* @author Machavarapu Adinarayana <machavarapuadin@photoninfotech.net>
* @version 1.0.2
* @summary Adding FuelFillingStyles for the application.
* @description The screen will provide styles for FuelFillingStyles screen.
*/
import {
      StyleSheet, Platform
} from 'react-native';
import {dpToPx} from "./../helpers/index"

//Fonts fot both Android & ios
const SFProTextMedium  = "SFProText-Medium";
const SFProTextRegular  = "SFProText-Regular";
const RobotoMedium  = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";
const SFProTextSemibold = "SFProText-Semibold";

//Colors fot both Android & ios
const WhiteColorrgb = "rgb(255, 255, 255)"
const lightGrayColorrgb = "rgb(132, 132, 132)"
const bgLightGrayColorrgb = "rgb(250, 250, 250)"
const darkGrayColorrgb = "rgb(159, 159, 159)"
const darkGrayTextColor = "rgb(121, 121, 121)"
const lightGrayBorderColor = "rgb(239, 239, 239)"
const blackColorrgb = "rgb(51,51,51)"
const yourStationTextColor = "rgb(128, 128, 128)"

const styles = StyleSheet.create({

      FFappContainer: {
            flex: 1,
            backgroundColor: "#ffffff"
      },
      FFstationView: {
            height :120,
            flexDirection: 'row',
            backgroundColor :bgLightGrayColorrgb,
            borderBottomColor: lightGrayBorderColor,
            borderBottomWidth : 1,
            paddingLeft :16,
            alignItems :'center'
      },
      FFstationSubView1: {
            width: 60,
            justifyContent: 'flex-start',
            padding: 5
      },
      FFstationSubView2: {
            marginLeft:15,
            justifyContent: 'flex-start',
            height:60
      },
      FFessoImage: {
            width: 60,
            height: 60,
            alignSelf: 'flex-start'
      },
      FFStationBoldText: {
            fontSize: 8,
            fontFamily : Platform.OS === "ios" ? SFProTextSemibold : RobotoMedium,
            marginBottom: 5,
            color : yourStationTextColor
      },
      FFStationNormalText: {
            fontSize: 16,
            fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoMedium,
            marginBottom: 5,
            color: blackColorrgb
      },
      FFStationNormalText1: {
            fontSize: 12,
            color: blackColorrgb,
            fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoMedium,
      },
      FFStationMediumText: {
            fontSize: 16,
            color: blackColorrgb,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 10,
            paddingBottom: 10,
            alignSelf: 'center',
            fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular

      },
      FFContainerView: {
            flex: 1,
            marginLeft: 0,
            marginRight: 0,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16
      },
      FFPumpBgImage: {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
      },
      FFPumpLogoImage: {
            width: 130,
            height: 130,
            alignItems :'center',
      },
      FFPumpLogoImageSubView1: {
            flex:1,
            justifyContent:'flex-end',
            alignItems:'center'
      },
      FFPumpLogoImageSubView2: {
            flex:2,
            alignItems:'center'
      },
      FFPumpLogoImageSubView3: {
            flex: 1.5,
      },
      FFPumpNumberText: {
            color: 'rgb(255, 255, 255)'
      },
      FFPumpLogoSmallImage: {
            width: 25,
            height: 30,
            marginLeft: 10
      },
      FFPumpNumberTextBold: {
            fontWeight: 'bold',
            fontSize: 70,
            color: 'white',
            marginTop :-10
      }
});

export default styles;