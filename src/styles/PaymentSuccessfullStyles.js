/**
* @author Machavarapu Adinarayana <machavarapuadin@photoninfotech.net>
* @version 1.0.2
* @summary Adding PaymentSuccessfullStyles for the application.
* @description The screen will provide styles for payment successfully screen.
*/
import { StyleSheet, Platform } from 'react-native';

//Fonts fot both Android & ios
const SFProTextMedium  = "SFProText-Medium";
const SFProTextRegular  = "SFProText-Regular";
const RobotoMedium  = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";

//Colors fot both Android & ios
const WhiteColorrgb = "rgb(255, 255, 255)"
const lightGrayColorrgb = "rgb(132, 132, 132)"
const bgLightGrayColorrgb = "rgb(250, 250, 250)"
const darkGrayColorrgb = "rgb(159, 159, 159)"
const darkGrayTextColor = "rgb(121, 121, 121)"
const lightGrayBorderColor = "rgb(239, 239, 239)"
const blackColorrgb = "rgb(51,51,51)"

const styles = StyleSheet.create({
      appContainer: {
            flex: 1,
            backgroundColor: WhiteColorrgb
      },
      PSCloseImage: {
            width: 32,
            height: 32,
        },
      PSCloseButton: {
            right: 15,
            top: "2%",
            zIndex: 1,
            position: 'absolute'
        },
        PSContentView: {
            marginTop:"15%",
            alignItems: 'center',
            paddingLeft :16,
            paddingRight: 16,
            marginBottom: "10%",
        },
        PSSuccessLogo: {
            marginTop:10,
            width: 130,
            height: 130,
            marginBottom: 10
        },
        PSMoneyText: {
            fontSize: 22,
            marginBottom: 12,
            color:blackColorrgb,
            justifyContent:'center',
            fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium
        },
        PSPaymentText: {
            alignSelf:'center',
            color : lightGrayColorrgb,
            fontSize: 16,
            fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
            marginBottom :5
        },
        PSPaymentText1: {
            alignSelf:'center',
            color : lightGrayColorrgb,
            fontSize: 16,
            fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular
        },
        PSContentSubview: {
            height : 85,
            backgroundColor: bgLightGrayColorrgb,
            paddingLeft : 15,
            justifyContent:'center',
             borderTopColor : lightGrayBorderColor,
            borderBottomColor : lightGrayBorderColor,
            borderBottomWidth : 1,
            borderTopWidth : 1,
            marginBottom : 10,
        },
        PSPriceView: {
            flexDirection :'row',
            backgroundColor: bgLightGrayColorrgb,
            paddingLeft : 15,
            justifyContent:'center',
            borderBottomColor : lightGrayBorderColor,
            borderBottomWidth : 1,
            marginBottom : 10,
            paddingTop : 10,
            paddingBottom : 10
        },
        PSPriceSubView: {
            flex: 4,
        },
        PSPriceSubView1: {
            flex: 1,
            justifyContent: 'center',
        },
        PSPriceText : {
           color : darkGrayTextColor,
           fontSize : 16,
           fontFamily : Platform.OS === 'ios' ? SFProTextRegular : RobotoRegular,
           marginBottom :5
        },
        PSTotalView: {
            paddingTop :5,
            paddingBottom : 5,
            flexDirection :'row',
            paddingLeft :16,
            paddingRight :16,
            justifyContent : 'space-between',
            marginBottom:10
        },
        PSTotalTextInputStyles :{
            color:blackColorrgb,
            fontSize: 25,
            fontFamily : Platform.OS === "ios" ? SFProTextMedium :RobotoMedium,
        },
        PSNormalBoldText: {
            color:blackColorrgb,
            fontSize: 20,
            fontFamily : Platform.OS === "ios" ? SFProTextMedium :RobotoMedium,
        },
        PSNormalText: {
            fontSize: 12,
            color : darkGrayColorrgb,
            fontFamily : Platform.OS === "ios" ? SFProTextRegular :RobotoRegular,
            marginTop : 2,
            marginBottom: 5
        },
        PSMediumText: {
            color : darkGrayTextColor,
            fontSize: 16,
            fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
        },
        PSflatlistSubView: {
            flexDirection: 'row',
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: WhiteColorrgb,
            borderTopColor : lightGrayBorderColor,
            borderBottomColor : lightGrayBorderColor,
            borderBottomWidth : 1,
            borderTopWidth : 1,
        },
        PSflatListcontentView: {
            flex: 4,
            backgroundColor:WhiteColorrgb,
            paddingLeft: 16
        },
        PSflatListNormalTextColor: {
            color: darkGrayColorrgb,
            fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
            fontSize : 12
        },
        PSflatlistContainerSubview: {
            flex: 1,
            backgroundColor: WhiteColorrgb,
            justifyContent: 'center',
            paddingRight: 16
        },
        PSpumpImage: {
            width: 30,
            height: 30,
            alignSelf: 'flex-end',
        },

})

export default styles;