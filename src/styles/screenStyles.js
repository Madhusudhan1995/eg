import { StyleSheet, Platform, Dimensions } from 'react-native';
import { dpToPx } from "./../helpers/index"
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

//Fonts fot both Android & ios
const SFProTextMedium = "SFProText-Medium";
const SFProTextRegular = "SFProText-Regular";
const SFProTextSemibold = "SFProText-Semibold";
const RobotoMedium = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";

const styles = StyleSheet.create({

    appContainer: {
        flex: 1
    },

    noBorderToolbar: {
        elevation: 0,
        marginTop: ((Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 30 : 0)
    },

    whiteBackground: {
        backgroundColor: "#ffffff",
    },

    appTitle: {
        fontSize: 18,
        color: "#000000",
        textAlign: Platform.OS === "ios" ? "center" : "left",
    },

    mainView: {
        flex: 1,
        padding: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loyalabilityplusDesign: {
        color: "rgb(15, 113, 184)",
        fontSize: 100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loyalabilityText: {
        color: 'black',
        fontSize: 16,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingRight: 20,
        paddingLeft: 20,
        marginTop: 1,
    },
    errorText: {
        color: 'red',
        paddingHorizontal: 16,
        position: "absolute",
        bottom: 0,
        fontSize: 12
    },
    errorTextColor:{
        color: 'red',
        paddingHorizontal: 16,
        fontSize:12
    },
    CouponmodalView: {

        marginTop: Platform.OS === 'ios' ? 40 : 10,
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 10,
        flex: 1,
        borderRadius: 5,
    },
    CouponImageStyle: {
        height: 350,
        resizeMode: 'contain',


        overflow: 'hidden'
    },
    CouponIconStyle: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignSelf: 'flex-end',
        position: "absolute",
        right: 3,
        top: 3
    },
    CouponOffText: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000',
        marginTop: 15
    },
    CouponCodeText: {
        color: '#979797',
        textAlign: "center",
        fontSize: 14,
        marginTop: 20
    },
    CoupnSubwayText: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 140,
        padding: 12,
        marginTop: 10
    },
    CouponSubwayTextColor: {
        color: 'white',
        textAlign: 'center'
    },
    CouponBarcodeImage: {
        width: 300,
        height: 150,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 15
    },
    CouponSpace: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 15
    },
    CouponTermsText: {
        color: 'rgb(15,113,184)',
        fontSize: 16
    },
    CouponTermsTextSub: {
        color: '#333333',
        fontSize: 16
    },
    CouponTextColor: {
        color: '#000',
    },
    CouponValidityText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    CouponValidTextDesign: {
        textAlign: 'center',

    },

    CouponSpaceText: {
        marginLeft: 20,
        marginTop: 5
    },

    profilePic: {
        flex: 3,
        flexDirection: 'column',
        backgroundColor: "#f5f5f5",
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
    },
    editText: {
        color: 'rgb(15,113,184)'
    },
    profilePicImage: {

        height: 120,
        width: 120,
        borderRadius: 500 / 2,
        overflow: 'hidden'
    },
    profileContainer: {
        flex: 6,
    },
    submitButton: {
        marginTop: 20,
    },
    paragraphOne: {
        paddingHorizontal: 16,
        paddingTop: 16,
        fontSize: 16,
        color: "#000000",
        lineHeight: 22
    },
    toolbarUtils: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        paddingRight: 8,
        justifyContent: Platform.OS === "ios" ? "center" : "flex-start"
    },
    loginFormCont: {
        justifyContent: "space-evenly",
        flex: 1
    },
    loginLogoSpace: {
        marginBottom: 25
    },
    loginLogoContainer: {
        justifyContent: "center",
        flexDirection: "row"
    },
    loginHelperCont: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32,
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 70
    },
    languagePickerView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    forgotPasswordView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    forgotTextLink: {
        color: "rgb(0, 0, 0)",
        fontSize: 12,
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
    },

    languagePickerTitle: {
        color: "rgb(0, 0, 0)",
        fontSize: 12,
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium
    },
    loginButtonMargin: {
        marginTop: -5
    },

    facebookButton: {
        width: Dimensions.get("window").width - 40,
        borderRadius: Platform.OS === "ios" ? 28 : 41,
        backgroundColor: "rgb(57, 83, 152)",
        justifyContent: "center",
        textAlign: "center",
        lineHeight: 24,

    },
    ForgotButtonText: {
        color: "rgb(255,255,255)",
        fontSize: 22,
        justifyContent: "center",
        textAlign: "center",
        fontFamily: Platform.OS === "ios" ? SFProTextSemibold : RobotoMedium
    },
    facebookButtonText: {
        color: "#fff",
        fontSize: 18,
        marginTop: 1,
        justifyContent: "center",
        textAlign: "center",
        fontFamily: Platform.OS === "ios" ? SFProTextSemibold : RobotoMedium
    },
    DisableLogin: {
        width: Dimensions.get("window").width - 40,
        borderRadius: 28,
        backgroundColor: "#d5d5d5",
        justifyContent: "center",
        textAlign: "center",
    },
    ForgotButtonTexts: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "500",
        letterSpacing: 1
    },
    loginFooterTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 8,
        paddingBottom: 16,
    },
    fontSize15: {
        fontSize: 15,
    },
    loginJoinnow: {
        color: "rgb(15, 113, 184)",
        fontSize: 15,
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
    },

    colorBlack: {
        color: "rgb(51, 51, 51)"
    },
    //newsletter
    newsLetterContainer: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    newsLetterProfileView: {
        flex: Platform.OS === "ios" ? 0.82 : 1,
        paddingTop:Platform.OS === "ios" ? 5 : 20,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        backgroundColor: "#fafafa"
    },
    newsLetterProfileImage: {
        width: 140,
        height: 140
    },
    newsLetterEmailView: {
        justifyContent: "flex-start",
        backgroundColor: "#FFFFFF"
    },
    newsLetterText: {
        paddingTop: 10,
        fontSize: 22,
        color: "#333333",
        textAlign: "center",
        padding: 10,
        fontWeight: "500"
    },
    newsLetterContentOne: {
        fontSize: 16,
        color: "rgb(132, 132, 132)",
        textAlign: "center",
    },
    newsLetterContentTwo: {
        fontSize: 16,
        color: "rgb(132, 132,132)",
        textAlign: "center",
    },
    newsletterEmailView: {
        flex: 1.2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: "#fafafa",
        paddingTop:Platform.OS === "ios" ? -40 : 10,
    },
    newsLetterEmailDetailView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(239, 239, 239)',
        borderTopWidth: 1,
        borderTopColor: "rgb(239, 239, 239)",
        paddingLeft: 5,
        paddingVertical: 12,
    },
    newsLetterContactTextView: {
        justifyContent: 'flex-start',
    },
    newsLetterContactView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    newsLetterMainContactText: {
        color: "#333333",
        paddingLeft: 45,
        fontSize: 16,
    },
    newsLetterMainText: {
        paddingLeft: 10,
        fontSize: 16,
        color: "#333333",
    },
    newsLetterSubscribeButtonView: {
        paddingBottom: Platform.OS === "ios" ? 40 : 20,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    newsLetterSubscribeButton: {
        width: Dimensions.get("window").width - 40,
        borderRadius: 60,
        backgroundColor: "#0f71b8",
    },
    newsLetterSubscribeText: {
        color: "#FFF",
        fontSize: 17,
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
        textAlign:"center",
        paddingVertical:Platform.OS === "ios" ? 12 : 10,
    },
    //newsLetterStyles end above
    //Support Screen
    supportProfileView: {
        flex: Platform.OS === "ios" ? 0.7 : 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        backgroundColor: "#fafafa"
    },
    supportProfileImage: {
        width: 140,
        height: 140
    },
    supportTextTitle: {
        fontSize: 23,
        color: "#333333",
        textAlign: "center",
        paddingTop:5,
        paddingBottom: 5,
        fontWeight: "500"
    },
    supportContentOne: {
        fontSize: 18,
        color: "rgb(132, 132, 132)",
        textAlign: "center"
    },
    supportContentTwo: {
        fontSize: 18,
        color: "rgb(132, 132,132)",
        textAlign: "center"
    },
    supportEmailNumberView: {
        flex: 1,
        backgroundColor: "#fafafa",
        paddingTop:10
    },
    emailSupportDetailedView: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: "rgb(239, 239, 239)",
        paddingLeft: 5,
        paddingVertical: 20,
        backgroundColor: "#fff",
    },
    emailSupportDetailedViewforContact: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: "#fff",
        borderBottomColor: 'rgb(239, 239, 239)',
        borderTopWidth: 1,
        borderTopColor: "rgb(239, 239, 239)",
        paddingLeft: 5,
        paddingVertical: 20,
    },
    contactTextView: {
        justifyContent: 'flex-start',
    },
    supportMainText: {
        paddingLeft: 10,
        fontSize: 18,
        color: "rgb(51, 51, 51)",
    },
    supportMainContactText: {
        color: "rgb(51, 51, 51)",
        paddingLeft: 32,
        fontSize: 18,
    },
    supportMainContactTextEmail: {
        paddingLeft: 42,
    },
    //supportScreen styels endend
    notificationRightIconView: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingTop: 5,
        paddingBottom: 5,
        marginRight: 15,
    },
    newsLetterContentText: {
        fontSize: 12,
        color: 'rgb(51, 51, 51)',
        padding: 10
    },
    notificationContainer: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    preferredStationContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingBottom: -5,
    },
    PreferredStationTitleView: {
        flex: 0.5,
        borderBottomColor: 'rgb(200, 199, 204)',
        borderBottomWidth: 1,
        marginTop: 10,

    },
    preferredStationText: {
        color: 'rgb(142, 142, 147)',
        paddingLeft: 10,
        fontSize: 12,

    },
    preferedStationConverterView: {
        marginLeft: Dimensions.get('window').width - 125,
        marginBottom: -40,
        marginRight: 5,
        zIndex: 2,
        height: 25,
        marginTop: -20,
        width: 120
    },
    preferedStationKmMileView: {
        flex: 1,
        flexDirection: 'row'
    },
    preferedStationArrow: {
        width: 16,
        height: 16,
        justifyContent: 'center',
        marginLeft: 8
    },

    stationList: {
        flex: 9.5
    },
    ListContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'rgb(200, 199, 204)',
        borderBottomWidth: 1,
        marginHorizontal: 16,
        paddingBottom: 10,
        paddingTop: 2
    },
    preferredStationView: {
        flex: 9,
        flexDirection: 'column'
    },
    stationNameText: {
        color: 'rgb(51, 51, 51)',
        fontSize: 15,
        paddingTop: 5,
    },
    addressText: {
        fontSize: 10,
        color: 'rgb(123, 122, 118)'
    },
    stausText: {
        color: 'rgb(15, 113, 184)',
        fontSize: 12,
    },
    hourText: {
        fontSize: 13,
        color: 'rgb(51, 51, 51)',
        paddingTop: 5,
        paddingBottom: 5
    },
    distanceText: {
        fontSize: 12,
        color: 'rgb(51, 51, 51)',
        textAlign: 'right'
    },
    statusAndDistanceView: {
        flexDirection: 'row',
        flex: 1
    },
    storeStatusView: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    storeDistance: {
        justifyContent: 'flex-end',
    },
    // Privacy Policy
    PrivacytContainer: {
        flex: 1,
    },
    policyText: {
        fontSize: 14,
        color: "#333333",
        paddingTop: 10,
    },
    copyrightText: {
        fontSize: 16,
        color: "#000",
        paddingBottom: 10
    },
    privacyPolicyView: {
        backgroundColor: "#FFFFFF"
    },
    privacyPolicyHeader: {
        paddingLeft: 15,
        paddingVertical: 10,
    },
    privacyPolicyTopHeader: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingVertical: 8,
        backgroundColor: "#fafafa"
    },
    policyContentView: {
        paddingHorizontal: 15
    },
    policyContentViewForFooter: {
        paddingHorizontal: 15,
        paddingTop: 20,
        paddingBottom: 20
    },
    policyContentText: {
        color: '#848484',
        paddingBottom: 10,
        paddingRight: 15,
        fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
        fontSize: 18
    },
    policyContentTextForThirdParty: {
        fontSize: 19,
        color: '#848484',
        fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
    },
    policyHeaderText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "500",
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
    },
    policyAddress: {
        paddingHorizontal: 8,
        paddingLeft: 15
    },
    policyAddressDetailText: {
        fontSize: 19
    },
    policyEmailAddress: {
        fontSize: 19,
        paddingBottom: 10,
        color: "#0f71b8",
        textDecorationLine: 'underline'
    },
    policyEmailAddressForWebSite: {
        fontSize: 19,
        color: "#0f71b8",
        textDecorationLine: 'underline',
        paddingTop: -10,
    },
    privacyIcon: {
        color: "#848484"
    },
    privacyInnerIconPlus: {
        backgroundColor: '#848484'
    },
    privacyListDataView: {
        paddingHorizontal: 15,
        flex: 1,
        flexDirection: "row"
    },
    privacyDataList: {
        paddingRight: 16
    },
    //Terms and condition

    TermsAndConditionsTextView: {
        marginLeft: 15,
        marginRight: 15,
    },
    headerText: {
        paddingBottom: 10,
        paddingTop: 10,
        color: 'rgb(15, 113, 184)',
        fontSize: 14,

    },
    mainContainer: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        borderRadius: 5,
        borderColor: '#d8d8d8',
        borderWidth: 1,
        height: 150,
        marginTop: 15,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16
    },
    validityStyle: {
        color: '#333333',
        fontSize: 12,
        textAlign: 'left',
        padding: 8,
    },
    gradientContainer: {
        flex: 1,
        backgroundColor: '#d8dbd8',
        flexDirection: 'row'
    },
    descriptionContainer: {
        flexDirection: 'column',
        flex: 5
    },
    promoContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    promoCodeText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 10
    },
    promoBorder: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 140,
        padding: 5,
        marginTop: 5,
        marginLeft: 10
    },
    promoText: {
        color: 'white',
        textAlign: 'center'
    },
    checkboxStyle: {
        paddingVertical: 16,
        marginBottom: 30
    },
    subscribeStyle: {
        flexDirection: "row",
        paddingHorizontal: 16
    },
    checkboxText: {
        fontSize: 12,
        color: "#000000"
    },
    registerHaveAccountStyle: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 10
    },
    checkboxAgree: {
        flexDirection: "row",
        overflow: "hidden",
        flex: 1,
        paddingLeft: 16,
        paddingRight: 32,
        marginBottom: 2
    },
    checkboxPrivacy: {
        flexDirection: 'row',
        overflow: 'hidden',
        flex: 1,
        paddingLeft: 16,
        paddingRight: 32
    },
    termFont: {
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
        color: "rgb(15, 113, 184)",
        fontSize: 12,
    },
    leftIconContainer: {
        justifyContent: "space-around",
        padding: 16
    },
    paragraphthree: {
        paddingHorizontal: 16,
        paddingTop: 90,
        fontSize: 17,
        color: "#000000",
        lineHeight: 22,
        textAlign: "center"

    },
    mapContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    inputView: {
        backgroundColor: 'rgba(0,0,0,0)',
        position: 'absolute',
        top: 15,
        left: 10,
        right: 10
    },
    supportContainer: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    supportView: {
        borderBottomColor: 'rgb(200, 199, 204)',
        borderBottomWidth: 1,
        paddingTop: 5,
        marginTop: 10
    },
    emailSupportDetailView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(200, 199, 204)',
        paddingLeft: 5
    },
    supportleftIconView: {
        justifyContent: 'flex-start',
    },
    SupportTitleText: {
        color: 'rgb(142, 142, 147)',
        paddingLeft: 10
    },
    contactView: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 1,

    },
    preferredStationDetails: {
        color: 'rgb(15, 113, 184)',
        textDecorationLine: 'underline',
        paddingLeft: 5
    },
    settingContainer: {
        backgroundColor: '#FFF',
        flex: 1
    },
    settingListContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: 'rgb(200, 199, 204)',
        borderBottomWidth: 1,
        marginHorizontal: 16,
        paddingVertical: 8
    },
    iosPickerHeaderView: {
        height: 230,
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0
    },

    iosPickerSubView: {
        left: 0,
        right: 0,
        height: 40,
        flexDirection: "row",
        backgroundColor: "rgb(225, 224, 224)",
        justifyContent: "center",
        padding: 10
    },
    iosPickerLanguageView: {
        flex: 3
    },
    iosPickerTextView: {
        alignSelf: "center",
        fontSize: 17
    },
    iosPickerButtonView: {
        flex: 1
    },
    iosPickerButtonTextView: {
        alignSelf: "flex-end",
        color: "rgb(0, 122, 255)",
        fontSize: 15
    },
    loginMainView: {
        flex: 8
    },
    emailFieldView: {
        marginTop: 0
    },
    loginButtonView: {
        justifyContent: "flex-end"
    },
    marginRight: {
        marginRight: 7
    },
    //AddLoyaltyCardManually
    LoyaltyDoneButton: {
        flex: 3,
        justifyContent: "flex-end",
        paddingBottom: 8
    },

    //
    VoucherToolBar: {
        elevation: 0,
        marginVertical: Platform.OS === "ios" ? 16 : 0,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(204, 204, 204)"
    },

    VoucherModalBackground: {
        flex: 1,

    },




    onBoardingHeaderBackgroundcolor: {
        backgroundColor: 'rgb(239, 239, 239)',
        flex: 1,
        height: 46,
    },
    onBoardingImageLogo: {
        width: '25%',
        height: 27,
    },
    viewpagerItemBgColorStyle: {
        backgroundColor: 'rgb(239, 239, 239)',
    },
    viewPagerLogoIconStyle: {
        backgroundColor: 'rgb(239, 239, 239)',
        justifyContent: 'flex-start',
        width: 150,
        marginTop: 10
    },
    viewPagerCloseIconStyle: {
        backgroundColor: 'rgb(239, 239, 239)',
        justifyContent: 'flex-end',
        width: 150,
        marginTop: 10
    },
    viewPagerLoginBtnStyle: {
        width: 100,
        height: 50,
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderRadius: 50,
        backgroundColor: 'rgb(15, 113, 184)'
    },
    viewPaferLoginTextFont: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
        fontWeight: 'bold',
    },


    scancardparentview: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 10
    },
    scancloseicon: {
        width: 760,
        alignItems: "stretch",
        paddingTop: 10
    },

    scanimage: {
        paddingBottom: 15,
        textAlign: "center"
    },
    scancardaddtextviewparent: {
        flex: 2
    },
    scancardaddtext: {
        fontSize: 25,
        color: "black",
        paddingTop: 100
    },
    scancardpositiontext: {
        paddingTop: 10,
        fontSize: 15
    },
    scancardbuttonview: {
        flex: 2,
        justifyContent: "flex-end",
        paddingBottom: 8,
        margin: 15
    },
    scancardbutton: {
        margin: 30
    },
    scancarddetailstext: {
        textAlign: "center",
        paddingTop: 20
    },
    scantextalign: {
        textAlign: "center"
    },

    //Pre login
    homeContainer: {
        flex: 1,
        backgroundColor: "rgb(250,250,250)"
    },
    headerBackgroundcolor: {
        backgroundColor: '#fafafa',
        flex: 1,
    },
    homeHeader: {
        flex: 1,
        flexDirection: 'row',


    },
    homeHeaderHomeLogo: {
        flex: 3,
        flexDirection: 'row',
        padding: 10
    },
    homeImageHomeLogo: {
        width: '25%',
        height: 27,
    },
    stationsImage: {
        width: '50%',
        height: 50,
    },
    stationsView: {
        alignItems: 'flex-end',
        marginBottom: 50
    },
    homeHeaderText: {

    },

    homeHeaderTextFont: {
        color: '#ffffff',
        fontSize: 15,
    },
    homeHeaderTextFontShare: {
        color: '#ffffff',
        fontSize: 18,
        paddingRight: 10
    },
    homeHeaderTextFontWish: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',

    },
    homeHeaderBellicon: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 5
    },
    homeImageBellicon: {
        width: 21,
        height: 23,
        alignItems: "center"
    },
    linearGradient: {
        flexDirection: "row",
        alignItems: "center",
        height: 150
    },
    starBucks: {
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        height: 100,
        width: 100,
        marginLeft: 10
    },
    imageStarBucks: {
        height: 100,
        width: 100
    },
    burgerKing: {
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        height: 100,
        width: 100,
        marginLeft: 10
    },
    imageBurgerKing: {
        height: 100,
        width: 100
    },
    kfc: {
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        height: 100,
        width: 100,
        marginLeft: 10
    },
    imageKFC: {
        height: 100,
        width: 100
    },
    subway: {
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        height: 100,
        width: 100,
        marginLeft: 10
    },
    voucherImage: {
        flex: 2,
        flexDirection: 'row'
    },
    voucherImageColumn: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 16
    },

    voucherViewImage: {
        flex: 2,
        paddingTop: 20,
        backgroundColor: '#ffffff'
    },
    voucherViewImage1: {
        flex: 2,
        paddingTop: 20,
        backgroundColor: '#ffffff'
    },
    voucherImageTurkey: {
        borderWidth: 3,
        borderColor: '#333333'
    },
    voucherBurgerBackground: {
        height: 150,
        width: 175,
        borderRadius: 9
    },
    voucherViewBurger: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 110
    },
    vocherImageKText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
        height: 50,
        marginTop: 10,
        marginLeft: 20



    },
    vocherImageFamilyText: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginTop: 210
    },
    voucherImageEuro: {
        color: '#ffffff',
        alignItems: 'flex-end',
        fontSize: 12
    },
    voucherImageKfc: {
        marginTop: 3,
        borderWidth: 3,
        borderColor: '#333333'
    },
    voucherKfcBackground: {
        height: 250,
        width: 175,
        borderRadius: 9
    },
    voucherViewKfc: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 210
    },
    vocherImageKFCChizza: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    stationCardRow: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#F8F8F8'
    },
    hotOffPress: {


    },
    popularNearYou: {
        flex: 2,
        flexDirection: 'row',
        height: 150,

    },
    voucherImageColumnBurger: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 16
    },
    voucherImageColumnFamily: {
        flex: 1,
        flexDirection: 'column',
        paddingRight: 16
    },
    voucherImageFamily: {
        borderWidth: 3,
        borderColor: '#333333'
    },
    voucherFamilyBackground: {
        height: 250,
        width: 175,
        borderRadius: 9,
    },
    voucherViewFamily: {
        height: 250,
        width: 175,
        borderRadius: 9
    },
    voucherImageColumnStarBucks: {
        marginTop: 3,
        borderWidth: 3,
        borderColor: '#333333'
    },
    voucherStarBucksBackground: {
        height: 150,
        width: 175,
        borderRadius: 9,
    },
    voucherViewStarBucks: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: 110
    },
    textBp: {
        color: '#000000',
        fontSize: 13,
        fontWeight: 'bold',

    },
    startBucksTextMargin: {
        flex: 1,
        flexDirection: "row",
        paddingLeft: 15,
        alignSelf: 'flex-start',
        justifyContent: 'space-around',
        alignItems: 'center',


    },
    voucherSweetBackground: {
        flex: 1,
        height: 230,
        flexBasis: '50%',



    },
    voucherViewSweet: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 9,
        width: 100,
        height: 40
    },
    voucherViewSweetValid: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 170,
        marginRight: 20
    },
    voucherTextEnd: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        justifyContent: 'space-between'

    },
    voucherTextEndEuro: {
        flex: 1,
        flexDirection: "row",
    },
    voucherViewText: {
        flex: 1,
        flexDirection: "row"
    },
    voucherTextAll: {
        color: 'rgb(51, 51, 51)',
        fontSize: 17,
        paddingRight: 2,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    imageViewAll: {
        marginRight: 15,
        marginTop: 3,

    },
    voucherTextExplore: {
        color: 'rgb(51, 51, 51)',
        fontSize: 20,
        fontWeight: 'bold'
    },
    voucherTextExploreEurooff: {
        color: 'rgb(15, 113, 184)'
    },
    voucherTextExploreEuro: {
        color: '#979797',
        fontSize: 17,
        marginBottom: 10,
    },
    prefered: {
        flexDirection: 'column'
    },
    preferedText: {
        color: 'rgb(51, 51, 51)',
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 16,
        marginBottom: 10
    },

    itemSeperator: {
        marginLeft: 0,
        marginRight: 0,
        height: 10
    },
    loyaltyCardRenderItem: {
        flex: 1,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    renderItem1: {
        flex: 1,
        borderWidth: 3,
        borderColor: '#ffffff',
        borderRadius: 9

    },
    renderItem2: {
        flex: 1,
        borderWidth: 3,
        borderColor: '#ffffff',
        borderRadius: 9

    },
    preferedView: {

        flexDirection: 'row',
        borderRadius: 9,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height: 150,

        paddingLeft: 10,
        backgroundColor: "rgb(255, 255, 255)",
    },
    joinNowImageBackground: {
        padding: 10
    },
    joinOnPressLogin: {
        flex: 2,
        height: 40,
        borderRadius: 55,
        backgroundColor: 'rgb(15, 113, 184)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    itemNameFlatList: {
        color: '#333333',
        fontSize: 25,
        fontWeight: "bold",
        paddingTop: 10
    },
    addressFlatList: {
        fontSize: 15,
        paddingTop: 5
    },
    openFlatList: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',

    },
    hoursesFlatList: {
        fontSize: 12,
    },
    preferedStationImage: {
        height: 145,
        width: 132
    },
    stationsText: {

        backgroundColor: "rgb(255, 255, 255)",
    },
    preferedTextName: {
        backgroundColor: "rgb(255, 255, 255)",
    },
    preferedTextItemName: {
        marginLeft: 5,
        fontSize: 10,
        fontWeight: "bold"
    },
    ovalColor: {
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: "rgb(2551, 224, 224)"
    },
    preferedTextItemAddress: {
        marginLeft: 5,
        fontSize: 17,
        color: "rgb(123, 122, 118)"
    },
    preferedTextOpen: {
        marginLeft: 5,
        color: "rgb(15, 113, 184)",
        fontSize: 5
    },
    preferedTextItemHoures: {
        marginLeft: 5,
        fontSize: 7,
        fontWeight: "bold"
    },
    touchView: {
        flex: 1,
        backgroundColor: "rgb(255, 255, 255)",
        flexDirection: "row",
        justifyContent: "center"
    },
    touchText: {
        color: "black",
        fontSize: 15,
        alignSelf: "center"
    },
    touchImage: {
        width: 15,
        height: 15,
        alignSelf: "center"
    },
    brandView: {
        flex: 1
    },
    offerCardView: {
        flex: 1,
        backgroundColor: 'rgb(15,113,184)',
    },
    offerCardTextMain: {
        color: 'white',
        marginLeft: 20,
        marginTop: 15,
        fontSize: 15,
    },
    offerCardFlatlist: {
        marginBottom: 20,
        marginTop: 20,
        flexDirection: 'row'
    },
    offercardTextMainview: {
        flexDirection: 'row'
    },
    offercardTextSubview: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    offerCardText: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    offercardSubText: {
        color: 'rgb(128,128,128)',
        fontSize: 10
    },
    promoCode: {
        color: 'rgb(15,113,184)',
        marginTop: 10,
        fontSize: 10
    },
    validDateText: {
        color: 'rgb(15,113,184)',
        marginBottom: 5,
        fontSize: 10,
    },
    marginView: {
        marginRight: 40
    },
    starBucksView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10
    },
    StarbucksPointView: {
        width: 20,
        height: 20,
        borderRadius: 120,
        backgroundColor: 'rgb(251,224,224)'
    },
    StartbucksTextView: {
        marginLeft: 10,
        color: 'rgb(0,0,0)'
    },
    voucherTextEnduro: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10
    },

    // POST HOME SCREEN

    PostHomeContainer: {
        flex: 1,
        backgroundColor: "rgb(250,250,250)"

    },
    postHeaderBackground: {
        flex: 1,
        marginTop: 30
    },
    postHomeHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    postHeaderText: {
        flex: 1,
        flexDirection: 'column',

    },
    postVoucherSweetBackground: {
        flex: 1,
        height: 230,
        flexBasis: '50%'
    },
    postVoucherTextExploreEurooff: {
        color: 'rgb(15, 113, 184)'
    },
    postStationCardRow: {
        flex: 2,
        flexDirection: 'row',
        height: 200,

    },
    postVoucherViewSweet: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 9,
        width: 100,
        height: 40
    },
    postStartbucksTextView: {
        marginLeft: 10,
        color: 'rgb(0,0,0)'
    },
    postVoucherViewSweetValid: {
        flex: 1,
        alignItems: 'flex-end',
        marginTop: 170,
        marginRight: 20
    },
    postVoucherImageEuro: {
        color: '#ffffff',
        alignItems: 'flex-end',
        fontSize: 12
    },
    postVoucherTextExploreEuro: {
        color: 'rgb(51, 51, 51)',
        fontSize: 17,
        marginBottom: 10,
        marginLeft: 10
    },
    postHomeHeaderText: {
        color: "#000000",
        fontSize: 20,
        fontWeight: 'bold',
        //  fontFamily:"Roboto-Medium",
        marginLeft: 20
    },
    PostHomeNotificationImage: {
        width: 30,
        height: 30,
        marginRight: 20
    },
    postHomeHeaderImage: {
        flex: 1,
        flexDirection: 'row'
    },
    postHomeImage: {
        width: 30,
        height: 30
    },
    postItemNameFlatList: {
        color: 'black',
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 10
    },
    postPreferedStationImage: {
        height: 115,
        width: 135
    },
    postAddressFlatList: {
        fontSize: 12
    },
    postOpenFlatList: {
        fontSize: 12
    },
    postHeaderSubText: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 3,

    },
    postHeaderSubViewText: {
        flex: 2,
        flexDirection: 'row',

        marginTop: 3,
    },
    postHeaderSubTextView: {
        flex: 2,
        flexDirection: 'row',
        marginTop: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    postBronzeImage: {
        width: 20,
        height: 20
    },
    postHomeTextSubView: {
        flexDirection: 'row',
        marginTop: 3,
        marginBottom: 10
    },
    postHomeStationText: {
        color: "#000000",
        marginLeft: 20,
        fontSize: 12,
        //  fontFamily:'Roboto-Medium',
        marginTop: 10
    },

    postStarbucksPointView: {
        width: 20,
        height: 20,
        borderRadius: 120,
        marginLeft: 15

    },
    postHomePreferredStationText: {
        color: "#a7a7a7",
        marginLeft: 20,
        fontSize: 12,
        marginTop: 10,
        // fontFamily:'Roboto-Medium'
    },
    postIcons: {
        flex: 1,
        flexDirection: 'row',
        height: 150,
        paddingTop: 20,
        justifyContent: 'space-between',
        backgroundColor: '#fafafa',

    },
    postItemSeperator: {
        marginLeft: 0,
        marginRight: 0,
        height: 10
    },
    postHomeIcons: {
        flexDirection: 'column',
        marginLeft: 15
    },
    postIconsImages: {

        height: 30,
        width: 30,
        alignSelf: 'center'
    },
    postIconsText: {
        color: "#a7a7a7",
    },
    voucherImageRowSweet: {
        flex: 1,
        flexDirection: "column",
        margin: 15
    },

    postPreferedView: {
        flexDirection: 'row',
        borderRadius: 9,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        width: '100%',
        paddingLeft: 10,
        backgroundColor: "rgb(255, 255, 255)",
        elevation: 6
    },
    postHomeLoyaltyView: {
        flex: 1,
        backgroundColor: '#0f71b8',
    },
    postVoucherTextExplore: {
        color: 'rgb(0, 0, 0)',
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5
    },
    postHomeSubView: {
        backgroundColor: '#0f71b8',
        flex: 1,
        marginTop: 20,
        height: 100,
        marginBottom: 20,
        flexDirection: 'row'

    },
    postHomeSubTextView: {
        flex: 1,
        width: 400,
        height: 400,

    },
    postHomeSubMessageView: {
        flex: 1
    },
    postHomeImages: {
        flex: 1,
        flexDirection: 'row'
    },
    postHomeImagesText: {
        flexDirection: 'column',

    },
    postHotOffPress: {
        flex: 2,
        flexDirection: 'row',
        height: 150,

    },
    postStationsText: {
        width: 140,
        backgroundColor: "rgb(255, 255, 255)",
    },
    postVoucherTextEnd: {
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    postVoucherViewImage: {
        flex: 2,
        marginTop: 5,
        backgroundColor: '#ffffff'
    },


    postVoucherTextEnduro: {
        marginTop: 5,
        marginBottom: 5,
        marginRight: 15,
        marginLeft: 15,
    },

    postStarBucksView: {
        flex: 1,
        flexDirection: 'row',

        marginLeft: 15,
        marginBottom: 10

    },
    postVoucherImageRowSweet: {
        flex: 1,
        flexDirection: "column",
        margin: 10
    },
    postPrefered: {
        flex: 1,
    },
    postRenderItem: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        height: 100
    },
    postVocherImageKText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 12,
        height: 50,
        marginTop: 10,
        marginLeft: 20
    },
    postBronzeText: {
        color: "#000000",
        marginLeft: 5
    },
    postHoursesFlatList: {
        fontSize: 12
    },
    viewPagerDotStyle: {
        backgroundColor: 'rgb(211, 211, 211)',
        alignSelf: 'flex-start',
        bottom: 0,
        left: 0,
        height: 7,
        width: 7,
    },
    viewPagerDotSelectedStyle: {
        backgroundColor: 'rgb(15, 113, 184)',
        alignSelf: 'flex-start',
        bottom: 0,
        left: 0,
        height: 7,
        width: 7,
    },
    //SETTINGS
    sectionListContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "rgb(250,250,250)",
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "rgb(214, 215, 218)",
    },
    sectionListContainerMainView: {
        flex: 1,
        flexDirection: 'row'
    },
    sectionListContainerSubView: {
        flex: 1,
        margin: 11
    },
    sectionListText: {
        fontWeight: "bold",
        color: "rgb(51,51,51)",
        margin: 11,
        fontSize: 16,
    },
    sectionListView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 15
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
        marginLeft: 11,
        backgroundColor: "rgb(244,244,244)"
    },
    sectionHeaderTextView: {
        margin: 11,
        color: "rgb(51,51,51)",
        fontSize: 14,
    },
    settingsProfileView: {
        flex: 2,
        flexDirection: 'row',
    },
    settingsProfileSubView: {
        flex: 5,
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 10,
        marginBottom: 10
    },
    settingsRightArrowView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    settingsProfileTextView: {
        color: "rgb(51,51,51)",
        fontSize: 18
    },
    settingsProfileTextSubView: {
        color: "rgb(159,159,159)",
        fontSize: 13
    },
    settingsProfile: {
        flex: 1,
        width: 50,
        height: 50,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 10
    },

    settingsRightArrow: {
        flex: 1,
    },
    sectionList: {
        flex: 6
    },
    settingsLogoutView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(250,250,250)',
        marginTop: 5,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: "rgb(214, 215, 218)",
    },
    settingsLogoutTextView: {
        color: "rgb(232,65,86)",
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    settingsLogoutSubView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        width: 320,
        height: 50,
        borderWidth: 2,
        borderColor: "rgb(232,65,86)",
        borderRadius: 150,
    },
    //Go Fuel Card
    GofuelcontentView: {
        paddingTop: 20
    },
    gofuelcontentText: {
        textAlign: "center",
        paddingHorizontal: 32,
        fontSize: 16,
    },
    goFuelCardView: {
        paddingLeft: 10,
        paddingTop: 15,
        paddingRight: 20

    },
    goFuelCardText: {
        fontSize: 24,
        color: "black",
        fontWeight: 'bold'
    },
    goCardBodyView: {
        flex: 8,
        flexDirection: 'column',
        marginTop: -10,
    },
    goCardDetailsCardImage: {
        flex: 1,
    },
    GofueldetailCardImage: {
        width: Dimensions.get('window').width - 20,
        height: 200,
        marginTop: 10,
        borderRadius: 26,
        marginLeft: 10
    },
    goFuelCardImageWithDefault: {
        width: Dimensions.get('window').width - 20,
        height: Platform.OS === "ios" ? 205 : 210,
    },
    goCardImageView: {
        justifyContent: 'flex-start',
    },
    addButtonMainView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    addButtonView: {
        width: Dimensions.get('window').width - 40,
        marginLeft: 20
    },
    gofuelgoCardImage: {
        height: 200,
        marginTop: 15,
        width: Dimensions.get('window').width - 20,
        borderRadius: 3,
    },
    goFuelCardDefaultTextView: {
        marginLeft: Dimensions.get('window').width - 150,
        backgroundColor: '#000000',
        opacity: 0.4,
        paddingHorizontal: 5,
        borderRadius: 9,
        padding: 7,
        flexDirection: 'row',
        position: "absolute",
        top: 15,
    },


    //CreditAndDebitDetails
    debittitleContainer: {
        backgroundColor: "#efefef",
        padding: 10
    },
    debittitle: {
        fontSize: 10,
        color: "#000"
    },
    debitcontainer: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    creditCardDetailsListContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#FFF",
        paddingHorizontal: 8,
        paddingVertical: 15,
        justifyContent: "center",
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
    },
    debitsettingTitleView: {
        flex: 8,
        justifyContent: 'center',
        textAlign: 'center',
    },

    debitrightIconView: {
        justifyContent: "center",
        alignItems: "center",
    },
    debitsettingIcons: {
        height: 20,
        width: 20
    },
    hGap: {
        backgroundColor: '#fafafa',
        height: 20
    },
    deleteView: {
        flex: .45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF"
    },
    deleteTouch: {
        justifyContent: "center",
        width: Dimensions.get('window').width - 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#e84156',
        borderRadius: 3
    },
    deleteText: {
        fontSize: 20,
        color: '#e84156',
        textAlign: 'center',
        paddingVertical: 10,
    },
    settingSafeView: {
        flex: 1
    },
    goFuelCardSubLine: {
        fontSize: 12,
        paddingLeft: 10
    },
    //GoFuelCardDetails
    titleContainer: {
        padding: 8,
        backgroundColor: "#fafafa"
    },
    title: {
        fontSize: 12,
        color: "#000",
        paddingLeft: 10
    },
    item: {
        fontSize: 18,
        color: "#000",
        paddingLeft: 10
    },
    Gofueldetailcontainer: {
        flex: 2.8, backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 10,

    },
    goCardDetailsListContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#FFF",
        borderBottomColor: '#efefef',
        borderBottomWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 15,
        justifyContent: "center",
    },
    settingTitleView: {
        flex: 8,
        justifyContent: 'center',
        textAlign: 'center',
    },
    leftIconView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    rightIconView: {
        justifyContent: "center",
        alignItems: "center"
    },
    settingIcons: {
        height: 20,
        width: 20
    },

    hGapforGoCardDetails: {
        borderWidth: 1,
        borderColor: '#efefef',
        height: 5
    },
    deleteViewForGoCardDetails: {
        flex: .4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    deleteButtonView: {
        justifyContent: "center",
        width: Dimensions.get('window').width - 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#e84156',
        borderRadius: 18,
        paddingVertical: 10
    },
    debitdeleteText: {
        fontSize: 20,
        color: '#e84156',
        textAlign: 'center'
    },
    barcodeImageView: {
        justifyContent: "center",
        alignItems: "center",
    },

    //CreditAndDebitCardList

    creditcardcontentView: {
        marginTop: 20
    },
    creditcardcontentText: {
        textAlign: "center",
        paddingHorizontal: 32,
        fontSize: 14,
    },
    creditcardloyaltyCardsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    creditcardloyaltyCardText: {
        fontSize: 20,
        color: "black"
    },
    creditcardcardView: {
        flexDirection: 'row',
        position: "relative",
    },
    creditcardatmCardRow: {
        flex: 2,
        flexDirection: 'row',
        height: 150,
    },
    creditcardatmcardImage: {
        width: Dimensions.get('window').width - 35,
        resizeMode: "contain",
        height: 220,
    },
    creditcardatmcardImageWithDefault: {
        width: Dimensions.get('window').width - 20,
        height: 220,

    },
    creditcarditemSeperator: {
        marginLeft: 0,
        marginRight: 0,
        height: 5
    },
    loyaltyCarditemSeperator:{
        marginLeft: 0,
        marginRight: 0,
        height: 5,
    },
    creditcardrenderItem: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    creditcarddefaultTextView: {
        marginLeft: Dimensions.get('window').width - 150,
        backgroundColor: '#000000',
        opacity: 0.4,
        paddingHorizontal: 5,
        borderRadius: 9,
        padding: 7,
        flexDirection: 'row',
        position: "absolute",
        top: 15,
    },
    creditcarddefaultTextColor: {
        color: 'white',
        fontSize: 17,
    },
    // creditCard Details
    CreditCardtitleContainer: {
        padding: 10,
        backgroundColor: "#fafafa"
    },
    container: {
        backgroundColor: '#fafafa',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    CreditCardDetailsSettingTitleView: {
        flex: 8,
        justifyContent: 'center',
        textAlign: 'center',
    },
    creditCardDetailRightIconView: {
        justifyContent: "center",
        alignItems: "center",
    },
    creditCardDetailsDeleteView: {
        flex: .45,
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF"
    },
    creditCardDeleteTouch: {
        justifyContent: "center",
        width: Dimensions.get('window').width - 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#e84156',
        borderRadius: 18
    },
    creditCardDeleteText: {
        fontSize: 20,
        color: '#e84156',
        textAlign: 'center'
    },
    atmcardView: {
        marginBottom: 10
    },
    atmcardImage: {
        width: Dimensions.get('window').width - 20,
        height: 200,
        marginTop: 10,
        borderRadius: 26,
        marginLeft: 10
    },
    subtaglineText: { fontSize: 14, paddingLeft: 10 },
    addCardIconManual: { color: "#FFF", },
    addCardManualIconPlus: { backgroundColor: 'rgb(15, 113, 184)' },
    atmCardImageView: {
        marginTop: 25
    },
    contentView: {
        marginTop: 20
    },
    loyaltyContentText: {
        textAlign: "center",
        paddingHorizontal: 32
    },
    loyaltyCardsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },

    loyaltyCardText: {
        fontSize: 24,
        paddingLeft: 10,
        fontWeight: "500",
        color: "#000000",
        fontStyle: "normal",
    },
    goFuelCardFlatListView: {
        paddingTop: 10
    },

    loyaltyCardView: {
        flexDirection: "row",
    },

    atmCardRow: {
        flex: 2,
        flexDirection: 'row',
        height: 150,

    },
    loyaltyAtmcardImage: {
        width: Dimensions.get('window').width - 20,

    },
    loyaltyAtmcardImageWithDefault: {
        width: Dimensions.get('window').width - 20,
        position: 'absolute',
    },
    loyaltyCardrenderItem: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 16,
        height: 100,
        width: Dimensions.get('window').width - 60,
        marginRight: 30,
    },
    defaultTextView: {
        marginLeft: Dimensions.get('window').width - 150,
        marginTop: 30,
        backgroundColor: '#c42734',
        borderRadius: 8,
        padding: 5,
        position: 'relative',
        flexDirection: 'row'
    },
    defaultText: { color: '#FFF' },
    contentTextStyles: {
        paddingHorizontal: 32
    },


    //LoyaltyCardDetails

    gofueldetailtitleContainer: {
        padding: 10,
        backgroundColor: "#fafafa"
    },
    gofueldetailtitle: {
        fontSize: 10,
        color: "#000",
        paddingLeft: 10
    },

    loyatlyCardDetailsContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#FFF",
        paddingHorizontal: 8,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    gofueldetailsettingTitleView: {
        flex: 8,
        justifyContent: 'center',
        textAlign: 'center',
    },
    gofueldetailleftIconView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    gofueldetailrightIconView: {
        justifyContent: "center",
        alignItems: "center"
    },
    gofueldetailsettingIcons: {
        height: 20,
        width: 20
    },
    loyaltyCardImage: {
        width: Dimensions.get('window').width - 20,
        height: 250,
        marginTop: 10,
        borderRadius: 26,
        marginLeft: 10,
        resizeMode: "contain"
    },
    loyaltyCardImageView: {
        marginBottom: 20
    },
    loyaltyBarCodeImage: {
        width: 250,
        height: 100
    },
    loyaltyDeleteView: {
        flex: .6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF",
        paddingTop: 68,
        paddingBottom: 20
    },
    loyaltyDeleteBoxView: {
        justifyContent: "center",
        width: Dimensions.get('window').width - 40,
        height: 40,
        borderWidth: 1,
        borderColor: '#e84156',
        borderRadius: 18,
    },
    gofueldetaildeleteText: {
        fontSize: 20,
        color: '#e84156',
        textAlign: 'center',
    },

    //ScanCard
    scaningcardparentview: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 10
    },
    scaningcardlogotext: {
        borderRadius: 18,
        borderColor: "white",
        paddingTop: 100,
        marginRight: 10,
        height: 200,
        marginTop: 25,
        marginLeft: 10,
        borderWidth: 2
    },
    scaningcardimage: {
        flex: 2,
        marginRight: 5,
        marginLeft: 5,
        backgroundColor: "rgb(71,71,71)",
        borderRadius: 15
    },
    scaningcardcloseicon: {
        position: 'absolute',
        right: 10, top: 10
    },
    scancardaddtextview: {
        flex: 2
    },
    scaningcardaddtextchild: {
        fontSize: 25,
        color: "black",
        paddingTop: 100
    },
    scaningcardpositiontextchild: {
        paddingTop: 10,
        fontSize: 15
    },
    scaningcardbuttonview: {
        flex: 2,
        justifyContent: "flex-end",
        paddingBottom: 8,
        margin: 15
    },
    scaningcardbutton: {
        margin: 50,
    },
    scaningcarddetailstext: {
        textAlign: "center",
        paddingTop: 20
    },
    scaningtextalign: {
        textAlign: "center"
    },
    scaningview: {
        height: '70%',
        width: '90%',
        backgroundColor: 'rgb(71,71,71)',
        marginTop: "15%",
        alignSelf: 'center',
        borderRadius: 18,
        borderColor: "white",
        borderWidth: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    scaningviewcamera: {
        width: 40,
        height: 40,
        top: 20,
        alignSelf: 'center',
        marginBottom: 10
    },
    scaningparentviewcamera: {
        flex: 2.5
    },
    scaningaddbuttonparentview: {
        height: 90,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 10,
        left: 16,
        right: 16
    },
    scaningbuttonchildview: {
        height: 50,
        backgroundColor: 'rgb(15, 113, 184)',
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    scaningbuttontext: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    //CardAddManual
    addcarddetailstext: {
        textAlign: "center",
        paddingTop: 20
    },
    addcarddetailtext: {
        fontSize: 20,
        color: "black"
    },
    addcardfieldview: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(200, 199, 204)',
        paddingLeft: 3,
        paddingVertical: 3
    },
    addcardtextfield: {
        paddingTop: 13,
        fontSize: 15,
        color: "black"
    },
    addparentview: {
        flex: 1,
        margin: 15
    },
    nametextinput: {
        paddingLeft: 85,
    },
    cardnumberinputtext: {
        paddingLeft: 37
    },
    expirationfieldtext: {
        paddingRight: 140
    },
    securitycodeinputtext: {
        paddingLeft: 35
    },
    housenoinputtext: {
        paddingLeft: 61
    },
    streetinputfield: {
        paddingLeft: 45
    },
    cityinputfield: {
        paddingLeft: 105
    },
    stateinputfield: {
        paddingLeft: 30
    },
    zipcodeinputfield: {
        paddingLeft: 70
    },
    expirydateicon: {
        paddingLeft: 100,
        paddingTop: 30
    },
    expirydadeparentview: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(200, 199, 204)',
        paddingLeft: 5,
        paddingVertical: 3,
        justifyContent: 'space-between'
    },
    entermanualtext: {
        textAlign: "center", paddingBottom: 15
    },
    addtextcolor: {
        color: "rgb(15, 113, 184)",
        fontSize: 16,
        alignSelf: 'flex-start',
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium
  },
    onboardingDotStyle: {
        alignSelf: 'flex-end',
        justifyContent: 'flex-start',
        left: 16,
    },
    onboardingSlideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    ForgotButton: {
        width: Dimensions.get("window").width - 40,
        borderRadius: Platform.OS === "ios" ? 28 : 41,
        backgroundColor: "rgb(15,113,184)",
        justifyContent: "center",
        textAlign: "center",
        borderColor: "rgb(36,104,154)",
    },

    // ForgotButtonText: {
    //     color: "#fff",
    //     fontSize: dpToPx(8)
    // },
    forgotLogo: {
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 20,
        paddingBottom: 30

    },
    ForgotText: {
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#000000",
        lineHeight: 22,
        paddingTop: 30
    },
    forgotbuttonView: {
        flex: 3,
        justifyContent: "flex-end",
        alignItems: "center",
        alignSelf: "flex-end",
        paddingBottom: 20,
        paddingTop: 120
    },
    ForgotButtonTextStyle: {
        color: "#ffffff",
        fontSize: 22,
        letterSpacing: 0.83,
        justifyContent: "center",
        textAlign: "center",
        fontFamily: Platform.OS === "ios" ? SFProTextSemibold : RobotoMedium,
    },
    forgotChildView: {
        flex: 4,
        paddingTop: 20
    },
});

export default styles;