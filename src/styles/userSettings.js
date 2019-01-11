import { StyleSheet, Platform,Dimensions} from 'react-native';

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const userSettings = StyleSheet.create({
    settingContainer:{
        flex: 1,
        backgroundColor:"rgb(250,250,250)",
    },
    sectionListContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:"rgb(250,250,250)",
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "rgb(214, 215, 218)",
    },
    settingsToolbar: {
        elevation: 0,
        backgroundColor:'#fafafa',
        marginTop: ((Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 30 :0)
    },
    sectionListContainerMainView: {
        flex:1,
        flexDirection: 'row'
    },
    sectionListContainerSubView: {
        flex: 1,
        margin:11
    },
    sectionListText: {
        fontWeight: "bold",
        color: "rgb(51,51,51)",
        margin: 11,
        fontSize: 16, 
    },
    sectionListView: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        paddingRight:15
    },
    sectionListImageView: {
        width: 30,
        height: 30,
        marginLeft: 140,
        marginTop: 10,
        marginBottom: 10
    },
    sectionHeaderView: {
        flex: 1,
        flexDirection: "column",
        marginLeft:11,
        backgroundColor: "rgb(244,244,244)"
    },
    sectionHeaderTextView: {
        margin: 11,
        color: "rgb(51,51,51)",
        fontSize: 12,
    },
    settingsProfileView: {
        flex: 2,
        flexDirection: 'row',
    },
    settingsProfileSubView: {
        flex:5,
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 10
    },
    settingsRightArrowView:{
        width: 10, 
        height: 18, 
        marginRight:40, 
    },
    settingsProfileTextView: {
        color: "rgb(51,51,51)",
        fontSize: 18,
        fontWeight:'bold'
    },
    settingsProfileTextSubView: {
        color:"rgb(159,159,159)",
        fontSize: 13
    },
    settingsProfile: {
        flex:1,
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 10
    },

    settingsRightArrow: {
        flex: 0.4, 
        justifyContent: "center", 
        alignItems: "center"
    },
    sectionList: {
        flex: 6
    },
    settingsIosLogoutText: {
       color: "rgb(232,65,86)",
       fontSize: 20,
        fontWeight:'bold',
     },
     settingsIosLogout:{
        flex:1,
        marginTop:10,
        marginBottom:10,
        backgroundColor:"#ffffff",
        height:70,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "rgb(214, 215, 218)",
    },
    settingsLogoutView: {
        flex:1,
        backgroundColor:"rgb(244,244,244)",
        height:100,
        borderRadius: 2,
        borderWidth: 0.5,
        justifyContent:'center',
        alignItems:'center',
        borderColor:"rgb(214, 215, 218)",
    },
    settingsLogoutTextView: {
        color: "#e84156",
        fontSize: 22,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center',
    },
    settingsLogoutSubView:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:8,
        backgroundColor:'#ffffff',
        marginBottom:8,
        width: 350,
        height: 56,
        borderWidth: 1,
        borderColor: "#e84156",
        borderRadius: 150,
    },
    settingsLoyaltyMainView:{
        flex: 1, 
        height: 100, 
        backgroundColor: "rgb(15,113,184)", 
        flexDirection: "row"
    },
    settingsLoyaltyImageView:{
        flex: 1.4
    },
    settingsLoyaltyImage:{
        width: 80, 
        height: 80, 
        margin: 10
    },
    settingsLoyaltyMainTextView:{
        flex: 4, 
        flexDirection: "column"
    },
    settingsFirstText:{
        fontSize: 16, 
        color: "rgb(255,255,255)", 
        marginTop: 10, 
        marginLeft: 10
    },
    settingsSecondText:{
        fontSize: 12, 
        color: "#d8d8d8", 
        marginLeft: 10
    },
    settingsThirdText:{
        fontSize: 12, 
        color: "#d8d8d8", 
        marginLeft: 10
    },
    settingsFinalText:{
        fontSize: 12, 
        color: "#d8d8d8", 
        marginLeft: 10
    }


});

export default userSettings;
