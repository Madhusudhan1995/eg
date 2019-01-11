/**
* @author Sharanagouda Konasirasagi <Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary Adding creditCardDetailsScreenStyles for the application.
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
        marginTop: ((Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 30 :0)
    },
     SectionHeaderStyle:{
         fontSize :12,
         paddingLeft: 15,
         color: '#000',
         paddingVertical:10,
         backgroundColor:"#fafafa",
         fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
       },
       creditCardIosDeleteText: {
        color: "rgb(232,65,86)",
        fontSize: 20,
         fontWeight:'bold',
         textAlign:"center"
      },
      creditCardIosDelete:{
         flex:1,
         backgroundColor:'#FFFFFF',
         marginTop:15,
         justifyContent:"center",
         
     },
     creditCardDeleteView: {
         flex:1,
         backgroundColor:'#fafafa',
         height:70,
         borderRadius: 2,
         borderWidth: 0.5,
         borderColor:"rgb(214, 215, 218)",
         width:Dimensions.get("window").width,
         paddingBottom:10
     },
     whiteBackground:{
        backgroundColor:'#fafafa',
     },
     creditCardDetletTextView: {
         color: "#e84156",
         fontSize: 22,
         fontWeight:'600',
         justifyContent:'center',
         alignItems:'center',
         textAlign:"center"
     },
     creditCardSubView:{
         flex:1,
         backgroundColor:'#FFFFFF',
         marginTop:16,
         justifyContent:"center",
         alignItems:"center",
         borderWidth: 1,
         borderColor: "#e84156",
         borderRadius: 25,
         paddingVertical:10,
         paddingHorizontal:10,
         width:Dimensions.get("window").width-40,
         marginLeft:20
     },
})

export default styles;
