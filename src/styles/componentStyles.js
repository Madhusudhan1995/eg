import {
    StyleSheet,
    Platform,
    Dimensions,
    StatusBar
} from 'react-native';

//Fonts fot both Android & ios
const SFProTextMedium  = "SFProText-Medium";
const SFProTextRegular  = "SFProText-Regular";
const RobotoMedium  = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const  STATUSBAR_HEIGHT = Platform.OS === 'ios' ? (Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 50 : 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 16,
        marginVertical: 8
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    buttonStyle: {
        padding: 14,
        borderRadius: Platform.OS === "ios" ? 12 : 4,
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonTitle: {
        color: "#ffffff",
        fontSize: 16,
    },
    cardContainer: {
        flex: 1,
    },
    cardcontainerForRedeemed: {
        flex: 1,
    },
    cardView: {
        elevation: 4,
        height: 100,
        flexDirection: 'column',
        margin: 10,
        borderRadius: 5,
    },
    cardViewForRedeemed: {
        elevation: 4,
        height: 100,
        flexDirection: 'column',
        margin: 10,
        borderRadius: 5,
        opacity: 0.5
    },
    cardCoupenView: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 70,
        borderTopEndRadius: 5,
        borderTopStartRadius: 5,
    },
    cardValidityView: {
        height: 25,
        justifyContent: 'flex-end',
        backgroundColor: '#FFF',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
    },
    validityContentView: {
        marginLeft: 10,
        paddingBottom: 3,
    },
    validityText: {
        fontSize: 12,
    },
    imageView: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    imageborderView: {
        width: 52,
        height: 52,
        borderRadius: 45,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    contentContainer: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        //paddingLeft:5,
    },
    storeTextStyle: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold'
    },
    containtStore: {
        justifyContent: 'flex-start',
    },
    containtText: {
        justifyContent: 'center',
    },
    cashoffTextStyle: {
        fontSize: 12,
        color: '#FFF',
    },
    dottedView: {
        alignSelf: 'center',
        height: 50,
        borderColor: '#fff',
        borderRightWidth: 1,
    },
    coupenCodeView: {
        flex: 2.2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderTopEndRadius: 5,
        height: 50,
    },
    CoupenCodeTextView: {
        justifyContent: 'center',
        paddingBottom: 2
    },
    coupenCodeTextStyle: {
        fontSize: 13,
        color: 'rgb(255, 255, 255)',
    },
    CoupenCodeText: {
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: '#32CD32',
        paddingLeft: 5,
        paddingRight: 5,
    },
    codeTextStyle: {
        fontSize: 12,
        color: '#FFF',
        paddingTop: 2,
        paddingBottom: 2,
    },
    ///////////
    checkboxContainer: {
        flexDirection: "row",
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    textInputContainer: {
        paddingHorizontal: 16,
        marginTop: 21
    },
    textInputLabel: {
        color: "rgb(15, 113, 184)",
        fontSize: 16
    },
    textInputBox: {
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(204, 204, 204)",
        paddingBottom: 6,
        // paddingTop: 12,
        fontSize: 16,
        color:"#333",
        opacity:40,
        fontFamily :  SFProTextRegular,
    },
    dateOverlay: {
        width: "100%",
        height: 70,
        position: "absolute",
        top: 0,
        zIndex: 1
    },
    passwordEyeIconCont: {
        position: "absolute",
        bottom: 6,
        right: 27,
        zIndex: 1
    },
    listPickerContainer: {
        flex: 3,
    },
    listPickerStyle: {
        width: Platform.OS === 'ios' ? deviceWidth : 150,
        flex: 2,
        color: "black"
    },
    profilePicImage: {

        height: 120,
        width: 120,
        borderRadius: 500 / 2,
        overflow: 'hidden'
    },
    //sidebar
    sidebarContainer: {
        flex: 1,
    },
    sidebarIcon: {
        width: 40,
        height: 40,
        backgroundColor: "#cccccc",
        marginHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    sidebarIconImage: {
        width: 25,
        height: 25
    },
    listViewCont: {
        justifyContent: "center",
        paddingHorizontal: 16
    },
    menifestContainer: {
        flexDirection: "row",
        // backgroundColor: "#e4e4e4",
        alignItems: "center",
        padding: 8
    },
    toolbarContainer: {
        height: 56,
        backgroundColor: "#ffffff",
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    toolbarIconCont: {
        position: Platform.OS === "ios" ? "absolute" : "relative",
        left: 0,
        zIndex: 1
    },
    leftIconContainer: {
        justifyContent: "space-around",
        padding: 16
    },
    toolbarUtils: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingRight: 8,
        justifyContent: Platform.OS === "ios" ? "center" : "flex-start"
    },
    appTitle: {
        fontSize: 18,
        color: "rgb(51, 51, 51)",
        textAlign: Platform.OS === "ios" ? "center" : "left",
    },
    toolbarRightIconCont: {
        position: Platform.OS === "ios" ? "absolute" : "relative",
        right: 0,
        zIndex: 1
    },
    toolbarRightButtonCont: {
        paddingRight: 16,
        position: Platform.OS === "ios" ? "absolute" : "relative",
        right: 0,
        zIndex: 1
    },
    settingListContainer: {
        flex: 1,
        backgroundColor : "rgb(255, 255, 255)",
        flexDirection: 'row',
        borderTopColor: 'rgb(239,239,239)',
        borderBottomColor: 'rgb(239,239,239)',
        borderTopWidth: 1,
    },
    settingTitleView: {
        flex: 8,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'rgb(0, 0, 0)',
        paddingLeft : 16,
        paddingRight : 16,
        paddingTop : 8,
        paddingBottom : 8,
        backgroundColor : "rgb(255, 255, 255)"
    },
    faqListItemTitleTextStyle: {
        color: '#333333',
        fontSize: 20,
        fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
        marginTop : 8,
        marginBottom : 8,
    },
    settingSubListContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'rgb(200, 199, 204)',
        borderBottomWidth: 1,
        marginHorizontal: 16,
        paddingVertical: 8,
        backgroundColor : 'rgb(250, 250, 250)'
    },
    faqListItemSubTitleTextStyle: {
        color: "#000000",
        fontSize: 14,
    },
    rightIconView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf : 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    faqDescContainer: {
        padding: 16,
        flex : 2,
    },
    whiteBackground: {
        backgroundColor: "#ffffff"
    },
    faqListItemDescHeaderTextStyle: {
        flex : 1,
        paddingBottom : 8,
        color: 'rgb(0, 0, 0)',
        fontSize : 16
    },
    faqListItemDescTextStyle: {
        color: '#848484',
        fontSize: 16,
        fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
        marginTop : 8,
        marginBottom : 8,
    },
    modalContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        zIndex: 1
    },
    modalDesign: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCont: {
        width: 90,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255, 1)',
        borderRadius: 5
    },
    viewpagerItemTextStyle: {
        color: '#333333',
        fontSize: 26,
        fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
        fontWeight: 'bold',
        paddingTop: 6,
        textAlign : "center",
    },
    viewpagerItemDescTextStyle: {
        color: '#848484',
        fontSize: 16,
        fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
        paddingTop: 6,
        textAlign : "center",
    },
    viewpagerItemBgColorTextStyle: {
        backgroundColor: 'rgb(250, 250, 250)',
        marginBottom: 10
    },
    viewPagerLogo: {
        width: 60,
        height: 40,
    },
    viewPagerCloseIcon: {
        width: 32,
        height: 32,
        resizeMode : 'contain',
        justifyContent: 'flex-end'
    },
    viewpagerLandTextStyle: {
        color: 'rgb(51, 51, 51)',
        fontSize: 32,
        paddingTop: 8,
    },
    viewpagerLandDescTextStyle: {
        color: 'rgb(132, 132, 132)',
        fontSize: 20,
        paddingTop: 6,
    },
    viewpagerLoginBtnStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        borderRadius: 30,
        backgroundColor: 'rgb(15, 113, 184)',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
        flex : 1 ,
        marginBottom : (Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 90 :16,
        marginRight : 16
    },
    viewpagerLandSwipeConatinerStyle: {
        flex: 1,
        alignItems: "flex-start",
    },
    viewpagerLandSwipeContinueStyle: {
        color: 'rgb(15, 113, 184)',
        fontSize: 20,
    },
    textInputContainerscan: {
        paddingHorizontal: 25,
        flexDirection: 'row',
        backgroundColor: 'rgb(250,250,250)',
        borderColor: 'gray',
        paddingVertical: 3,
    },
    textInputLabelscan: {
        color: "black",
        fontSize: 16,
        width: '40%',
    },
    textInputBoxscan: {
        paddingHorizontal: 10,
        borderBottomColor: "rgb(204, 204, 204)",
        paddingBottom: 1,
        width: '60%',
        fontSize: 18
    },
    viewPagerItemContainerStyle: {
        flex : 1,
        flexDirection : 'column',
        width : '100%',
    },
    viewPagerItemImageContainerStyle: {
        backgroundColor : 'rgb(239, 239, 239)',
    },
    viewPagerItemImageViewStyle: {
        height: '100%',
        width : '100%'
    },
    viewPagerItemCloseIconConatinerStyle: {
        alignSelf: 'flex-end',
        position: 'absolute',
        paddingTop : 24,
        paddingRight : 16
    },
    viewPagerItemTextConatinerStyle: {
        padding : 16,
        backgroundColor : "white"
    },
    viewPagerItemLogoConatinerStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    viewPagerItemLogoStyle: {
        height: 60,
        width: 60,
        marginTop: 20,
        resizeMode : 'contain'
    },
});



export default styles;
