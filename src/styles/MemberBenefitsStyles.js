
import { StyleSheet, Platform, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

//Fonts fot both Android & ios
const SFProTextMedium = "SFProText-Medium";
const SFProTextRegular = "SFProText-Regular";
const SFProTextSemibold = "SFProText-Semibold";
const RobotoMedium = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";


const memberBenStyles = StyleSheet.create({
    mainView:{
      flex:1,
      backgroundColor:"#FFFFFF"
    },
    greenMedal:{ 
      height: 63, 
      width: 62, 
      marginLeft: -5 
    },
    whiteMedal:{ 
      height: 64, 
      width: 60, 
      marginLeft: 10 
    },
    blueMedal:{ 
      height: 64, 
      width: 60, 
      marginLeft: 10 
    },
    silverMedal:{ 
      height: 62, 
      width: 62, 
      marginLeft: 10 
    },
    goldMedal:{ 
      height: 63 , 
      width: 60, 
      marginLeft: 10 
    },
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      marginTop: 40,
      backgroundColor: "#FFFFFF"
    },
    contentText:{
      fontSize:16,
      color:"rgb(132,132,132)",
      fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
    },
    membershipItemSeperator: {
      marginLeft: 0,
      marginRight: 0,
      height: 5
  },
    viewPagerItemCloseIconConatinerStyle: {
      alignSelf: 'flex-end',
      position: 'absolute',
      paddingRight : 16,
      paddingTop:-5
  },
  viewPagerCloseIcon: {
    width: 32,
    height: 32,
    resizeMode : 'contain',
    justifyContent: 'flex-end'
  },
    header: {
      fontSize: 20,
      fontWeight: "600",
      color: "#333333",
      fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
    },
    subHeaderCountText:{
        fontSize:16,
        color:"#B5B5B5",
        fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
    },
    para: {
      flex:1,
      marginTop: 30,
      paddingLeft:20,
      paddingRight:10
    },
    reward: {
      fontSize: 16,
      fontWeight: "600",
      fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
      color: "#000",
      marginTop: 20,
      paddingLeft:2
    },
    containerTwo: {
      flex: 1,
      backgroundColor: "#fafafa",
      marginTop: 10,
      paddingBottom:20
    },
    medalImage: {
      height: 50,
      width: 50
    },
    listItemMainView: {
      flexDirection: "row",
    },
   icontListView:{
     justifyContent:"flex-start",
     
    },
   iconImages:{
      height: 27, 
      width: 27,
      marginLeft: 30,
      marginTop: 25,
    },
   listItemView:{
     justifyContent:"flex-end"
    },
   listItemViewText:{ 
     width: 250,
     flexWrap: "wrap",
     marginLeft: 20, 
     paddingTop: 10
    },
   memberShipDetails:{
     flex:1, 
     flexDirection: "row", 
     backgroundColor: "#ffffff"
    },
   memberShipDetailsSubView:{
      flex:4
    },
   memberShipDetailsContentHeader:{ 
     fontSize: 14, 
     fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
     fontWeight: "600",
     color: "#000",
     paddingLeft: 15,
    },
    memberShipDetailsContentText:{ 
      paddingLeft: 15,
      fontSize: 12,
      opacity:0.5,
      color:"#000"
    },
    memberShipDetailsContentTextLink:{ 
      paddingLeft: 15,
      fontSize: 12,
      color: "#166cf4" ,
    },
    memberShipMedalView:{
      flex:1,
      paddingRight:6,
      justifyContent:"center",
      alignItems:"center", 
      paddingTop:12
    },
    memberShipMedalImage:{ 
      height: 70, 
      width: 70
    },
     imageListView:{
      backgroundColor: "#f2f2f2",
      marginTop: 10,
      flexDirection: "row",
      paddingTop: 22,
      paddingBottom: 25,
      justifyContent: "center"
    },
    Image: {
      height: 30,
      width: 25,
      marginLeft: 10
    }
  });
  
  export default memberBenStyles;