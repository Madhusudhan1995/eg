import {StyleSheet} from "react-native";

const editProfile = StyleSheet.create({
    headerView:{
        flex:1,
        height:200,
        backgroundColor:'#0f71b8'
    },
    loyaltyBadgesView:{
        flex:1,
        height:100,
        backgroundColor:'#fafafa',
        flexDirection:'row'
    },
    addressText:{
        marginLeft:15,
        color:"#333333",
        fontSize:12,
        marginTop:10
    },
    fieldHeight: {
       // height:70,
        flexDirection:'row',
         backgroundColor: '#ffffff',
         justifyContent: 'center',
         alignItems: 'center',
         borderTopColor: 'rgb(239, 239, 239)',
         borderBottomColor: 'rgb(239, 239, 239)',
         borderBottomWidth: 1,
         borderTopWidth: 1
   },
     labelStyles: {
        fontSize: 16,
        backgroundColor: 'white',
        color: "rgb(51,51,51)"
    },
//    inputStyles: {
//     fontSize: 16,
//     backgroundColor: 'white',
//     },
    fieldStyles: {
        height: 60,
        alignItems: "center",
        justifyContent:'center',
        backgroundColor: 'white', 
    },
    contactInformationTextView:{
        marginTop:10,
        marginLeft:15,
        color:"#333333",
        fontSize:12
    },
    inputStyles: {
        fontSize: 16,
        backgroundColor: 'white',
    },
    textView:{
        
        backgroundColor:'#ffffff'
    },
    submitButton:{
        backgroundColor:'#fafafa',
        flex:1
    },
    saveButton:{
        marginTop:13,
        marginLeft:15,
        marginRight:15,
        borderRadius:30,
        height:60,
        backgroundColor:'#0f71b8'
    },
    contactView:{
        flex:1,
        height:600,    
    },
    contactHeaderView:{
        backgroundColor:"#fafafa",
        height:40, 
        borderWidth: 0.5,
        borderColor: "rgb(214, 215, 218)",   
     },
    emailView:{
        backgroundColor:"#ffffff",
        height:60,
        flexDirection:'row',
        borderWidth: 0.6,
        borderColor: "#efefef",
    },
    textButton:{
        color:"#ffffff",
        fontSize:24,
        fontWeight:'bold',
        margin:15,
        textAlign:'center'
    },
    emailText:{
        margin:15,
        marginLeft:15,
        color:"#333333",
        fontSize:18,
      
    },
    textInput:{ 
        color:"#333333",
        fontSize:18,
    },
    emailTextView:{
        flex:2, 
    },
    buttonView:{
        flex:2,
        backgroundColor:'green'
    },
    profilePic: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:2
    },
    profilePicImage: {

        height: 100,
        width: 100,
        borderRadius: 500 / 2,
        overflow: 'hidden'
    },
    editText: {
        color: 'white',
        fontSize:20,
        marginTop:20,
    },
    egLoyaltyText:{
        color:"#333333",
        fontSize:14,
        height:30,
        margin:15,
        fontWeight:'bold'  
    },
    amentiesMainView: {
        flex: 1
    },
    amentiesImageView:{
        width:70,
        height:70
    },
    amentiesSwiperSubView: {
        flex: 1,
        height: 160,
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23,
        justifyContent: "space-around"
    },
    amentiesFirstSwiperMainView: {
        flex: 1,
        flexDirection: "row",
        height: 20,
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23,
        justifyContent: "space-around",
        
    },
    amentiesFirstSwiperSubView: {
        flex: 4,
        flexDirection: "row",
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23,
        justifyContent: "space-around",
       
    },
    amentiesImage: {
        height: 50,
        width: 50,
        alignSelf: "center"
    },
    amentiesText: {
        fontSize: 13
    },
  
    loyaltyBadgesPercentageView:{
        flex:1,
        height:140,
        backgroundColor:'#ffffff',
        flexDirection:'row',
    },
    egLoyaltyTextView:{
        backgroundColor:'#ffffff'
    },
    loyaltyBadgesPercentageTextView:{
        flexDirection:'column',
        flex:3,
    },
    loyaltyBadgesImageView:{
        flex:1,
    },
    loyaltyBadgesText:{
        color:'#000000',
        fontSize:18,
        marginTop:10,
        marginLeft:15
    },
    loyaltyBadgesGoldText:{
        color:'#000000',
        fontSize:18,   
        marginLeft:15
    },
    loyaltyBadgesMainText:{
        color:"#848484",
        fontSize:14,
        marginLeft:15
    },
    learnText:{
        color:"#0f71b8",
        fontSize:15,
        marginLeft:15
    },
    learnMoreText:{
        color:"#0f71b8",
        fontSize:14,
        marginLeft:15
    },
    imageView:{
        marginTop:30,
        marginLeft:10,
        width:70,
        height:70     
    }

});

export default editProfile;
