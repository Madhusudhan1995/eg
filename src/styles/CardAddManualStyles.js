/**
* @author Machavarapu Adinarayana <machavarapuadin@photoninfotech.net>
* @version 1.0.2
* @summary Adding PaymentSuccessfullStyles for the application.
* @description The screen will provide styles for payment successfully screen.
*/
import { StyleSheet, Platform } from 'react-native';

//Colors fot both Android & ios
const WhiteColorrgb = "rgb(255, 255, 255)"
const lightGrayColorrgb = "rgb(132, 132, 132)"
const bgLightGrayColorrgb = "rgb(250, 250, 250)"
const darkGrayColorrgb = "rgb(159, 159, 159)"
const darkGrayTextColor = "rgb(121, 121, 121)"
const lightGrayBorderColor = "rgb(239, 239, 239)"
const blackColorrgb = "rgb(51,51,51)"

//Fonts fot both Android & ios
const SFProTextMedium = "SFProText-Medium";
const SFProTextRegular = "SFProText-Regular";
const SFProTextSemibold = "SFProText-Semibold";
const RobotoMedium = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";

const styles = StyleSheet.create({
      appContainer: {
            flex: 1,
            backgroundColor: 'rgb(250, 250, 250)'
      },
      fieldStyles: {
            height: 60,
            alignItems: "center",
            backgroundColor: 'white',
            paddingLeft: 15
      },
      labelStyles: {
            fontSize: 16,
            backgroundColor: 'white',
            color: blackColorrgb,
      },
      inputStyles: {
            fontSize: 16,
            color:"#333333",
            backgroundColor: 'white',
            fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoMedium,
      },
      cardExpirayview: {
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: 'rgb(255, 255, 255)',
      },
      cardExpiraySubView: {
            width: '41%',
            paddingLeft: 15
      },
      cardExpiryText: {
            color: 'black',
            fontSize: 18
      },
      cardExpiryMonthView: {
            width: "59%",
            flexDirection: 'row'
      },
      monthTextInputStyles: {
            width: "50%",
            fontSize: 18
      },
      cardDetailTextView: {
            paddingBottom: 20,
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: 'rgb(250, 250, 250)'
      },
      cardDetailLargeText: {
            fontSize: 22,
            marginBottom: 9,
            alignSelf: 'center',
            color: "#333333",
            fontFamily: Platform.OS === "ios" ? SFProTextSemibold: RobotoMedium,
      },
      noBorderForToolbar: {
            elevation: 0,
            marginTop: 0,
            backgroundColor: 'rgb(250, 250, 250)'
      },
      cardDetailText: {
            color: "#848484",
            fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoMedium,
            fontSize: 16,
            alignSelf: 'center',
      },
      errorText: {
            color: 'red',
            paddingHorizontal: "50%",
        },
      separatorTopandBottomColor: {
            borderTopColor: 'rgb(239, 239, 239)',
            borderBottomColor: 'rgb(239, 239, 239)',
            borderBottomWidth: 1,
            borderTopWidth: 1
      },
      cardSettingsView: {
            backgroundColor: 'rgb(250, 250, 250)',
            height: 37,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 15,
      },
      cardSettingTextStyles: {
            color: '#333333',
            alignSelf: 'flex-start',
            fontSize: 10,
            marginBottom:2,
            fontFamily: Platform.OS === "ios" ? SFProTextSemibold : RobotoMedium,
      },
      setDefaultCard: {
            height: 60,
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
      },
      setSubDefaultCardViewText: {
            flex: 4,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 15
      },
      setDefaultBoldText: {
            color: 'black',
            fontSize: 16,
            marginBottom: 5,
            alignSelf: 'flex-start',

      },
      setDefaultText: {
            color: 'rgb(159, 159, 159)',
            fontSize: 12,
            alignSelf: 'flex-start',
      },
      setSubDefaultViewSwitch: {
            flex: 1,
            backgroundColor: WhiteColorrgb,
            justifyContent: 'center',
            paddingRight: 16
      },
      setDefaultImage: {
            width: 50,
            height: 35,
            alignSelf: 'flex-end',
      },
      separatorBottomBoderColor: {
            borderTopColor: 'rgb(239, 239, 239)',
            borderBottomColor: 'rgb(239, 239, 239)',
            borderBottomWidth: 1,
            borderTopWidth: 1
      },
      paddingBetweenView: {
            marginBottom: 14
      },
      filedHeight: {
           // height: 60,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
      },
      entermanualtext: {
            textAlign: "center",
            fontSize: 16,
            color:"#333333",
            alignSelf: 'flex-end',
            fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoMedium
      },
      addtextcolor: {
            color: "rgb(15, 113, 184)",
            fontSize: 17,
            alignSelf: 'flex-start'
      },
      saveBottomButtonView: {
            height: 100,
            bottom: 20,
            position: 'absolute',
            left: 15,
            right: 15
      },
      saveBottomButtonView1: {
            marginTop: 50,
            height: 100,
            paddingLeft: 15,
            paddingRight: 15
      },
      saveButtonView: {
            height: 60,
            backgroundColor: '#0f71b8',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 37.5,
            borderColor: '#24689a'   
      },
      saveButtonTextInputStyles: {
            fontSize: 22,
            fontWeight: 'bold',
            color: 'white',
            fontFamily: Platform.OS === "ios" ? SFProTextSemibold : RobotoMedium,
      },
      enterManuallyView: {
            flexDirection: 'row',
            marginTop: 15
      },
      enterManuallySubView: {
            flex: 1,
            paddingRight: 5
      },
      enterManuallySubView1: {
            flex: 1, paddingLeft: 5
      },

});
export default styles;