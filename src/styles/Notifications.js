/**
* @author Sharanagouda Konasirasagi <Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary Adding PaymentSuccessfullStyles for the application.
* @description The screen will provide styles for payment successfully screen.
*/
import { StyleSheet,Platform ,Dimensions} from 'react-native';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const SFProTextMedium  = "SFProText-Medium";
const SFProTextRegular  = "SFProText-Regular";
const SFProDisplaySemibold  = "SFProDisplay-Semibold";
const RobotoMedium  = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";

const styles = StyleSheet.create({

    noBorderToolbar: {
        elevation: 0,
        marginTop: ((Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 30 : 0)
    },
    notificationContentHeader: {
        paddingVertical:10,
        backgroundColor:"#fafafa"
     },
     notificationSwitchView:{
         paddingTop :15,
         backgroundColor:"#fafafa"
     },
     notificationListContainer:{
       
     },
     notificationLableHeader:{
         paddingVertical:10,
         borderBottomColor: 'rgb(200, 199, 204)',
         borderBottomWidth: 0.8,
         paddingTop:16,
         backgroundColor:"#fafafa",
     },
     SectionHeaderStyle:{
         fontSize :12,
         paddingLeft: 15,
         color: '#000',
         paddingVertical:10,
         backgroundColor:"#fafafa",
         fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
       },
       notificationView:{
        paddingBottom:16
       },
       newsletterView: {
         flexDirection: 'row',
         borderBottomColor: '#EFEFEF',
         borderBottomWidth: 0.8,
         paddingLeft:15,
         backgroundColor:"#FFF"
     },
     newsLetterTitleView: {
         flex: 9,
         justifyContent: 'flex-start',
         textAlign: 'center',
         paddingTop: 5,
         paddingBottom: 5,
         
     },
     newsLetterTitleText: {
         color: '#000',
         fontSize: 16,
         paddingVertical:10,
     },
     notificationRightIconView: {
         flex: 1,
         justifyContent: 'flex-end',
         paddingVertical:10,
         marginRight: Platform.OS === "ios" ? 35 : 15,
     },
     newsLetterContentText: {
         fontSize: 18,
         color: '#848484',
         padding: 10,
         textAlign:"center",
     },
     notificationContainer: {
        backgroundColor:"#fafafa",
         flex: 1,
     }
})

export default styles;