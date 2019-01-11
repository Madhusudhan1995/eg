import { StyleSheet, Platform, Dimensions } from 'react-native';

const SFProTextMedium = "SFProText-Medium";
const SFProTextRegular = "SFProText-Regular";
const SFProTextSemibold = "SFProText-Semibold";
const SFProTextbold = "SFProText-Bold";
const RobotoMedium = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";
const RobotoBold = "Roboto-Bold";


let deviceWidth = Dimensions.get('window').width

const homeStyles = StyleSheet.create({

    homeHeader: {
        backgroundColor: 'rgb(15,113,184)',
        flex: 1,
        flexDirection: 'column',
        height: 184
    },
    homeLogo: {
        flex: 1,
        alignSelf: 'center'
    },
    logoImage: {
        height: 42,
        width: 62,
        marginTop: 20
    },
    homeHeaderTextImage: {
        flex: 1,
        flexDirection: 'row',
        paddingBottom: 20,
        justifyContent: 'space-between'
    },
    homeHeaderText: {
        flex: 3,
        flexDirection: 'column',
        paddingLeft: 16
    },
    homeHeaderWish: {
        color: '#ffffff',
        fontSize: 22
    },
    homeHeaderViewMember: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5
    },
    homeHeaderTextMember: {
        color: '#ffffff',
        fontSize: 12
    },
    homeHeaderMember: {
        color: '#ffffff',
        fontSize: 14
    },
    homeHeaderViewInfo: {
        paddingLeft: 5
    },
    homeHeaderImageInfo: {
        height: 15,
        width: 15,
        marginTop: 2
    },
    homeHeaderViewWeather: {
        flex: 0.8,
    },
    homeHeaderImageWeather: {
        height: 53,
        width: 53
    },
    homeBannerSwiper: {
        borderLeftColor: '#ffffff',
        borderRightColor: '#ffffff',
        borderTopColor: '#ffffff',
        borderBottomColor: 'rgb(239,239,239)',
        borderBottomWidth: 10,
        height: 250
    },
    homeBannerView: {
        flex: 1,
        flexDirection: 'row',
        height: 250
    },
    homeBannerViewText: {
        flex: 2
    },
    homeBannerImage: {
        height: Platform.OS === 'ios' ? 240 : 250,
        width: 370
    },
    homeBannerEarnText: {
        color: '#ffffff',
        fontSize: 27
    },
    homeBannerDiscoveryText: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        paddingTop: Platform.OS === 'ios' ? 20 : 10
    },
    homeBannerLevelText: {
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold'
    },
    homeBannerViewInfo: {
        paddingTop: 60,
        paddingLeft: 13
    },

    // VOUCHERS
    homeVoucherRecommeneTop: {
        paddingTop: 20,
    },
    homeVoucherHeaderRecommened:
        {
            flex: 1,
            flexDirection: 'row'
        },
    homeVoucherVewHeader: {
        paddingLeft: 16,
        paddingBottom: 20
    },
    homeVocherViewImage: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 16
    },
    homeVoucherViewAll: {
        color: 'rgb(15,113,184)',
        fontSize: 17
    },
    homeVoucherTextRecommened: {
        fontSize: 18,
        color: 'black'
    },
    homeVoucherImageSize: {
        flex: 1,
        height: 380
    },
    homeVoucherRenderItem: { 
        width: deviceWidth - 52, 
        marginLeft: 10, 
        marginRight: 10, 
        marginTop: 10, 
        borderRadius: 18 
    },
    homeVoucherImageBackgroundAndroid: { 
        height: 230, 
        borderTopLeftRadius: 18, 
        borderTopRightRadius: 18, 
        overflow: "hidden" 
    },
    homeVoucherImageBackgroundios: { 
        borderTopLeftRadius: 18, 
        borderTopRightRadius: 18, 
        overflow: "hidden" 
    },
    homeVoucherViewDetail: { 
        flex: 1, 
        alignItems: 'flex-end', 
        marginTop: 170, 
        paddingRight: 10 
    },
    homeVoucherViewImageDetail: { 
        backgroundColor: 'rgb(15,113,184)', 
        borderRadius: 15, 
        width: 120, 
        height: 40 
    },
    homeVoucherTextDetail: { 
        color: '#ffffff', 
        fontWeight: 'bold', 
        fontSize: 15, 
        height: 50, 
        marginTop: 10, 
        marginLeft: 20 
    },
    homeVoucherValidDate: { 
        color: '#ffffff', 
        fontSize: 12, 
        paddingRight: 12 
    },
    homeVoucherViewText: { 
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: '#ffffff', 
        paddingLeft: 16, 
        borderBottomColor: 'rgb(239, 239, 239)', 
        borderLeftColor: 'rgb(239, 239, 239)', 
        borderRightColor: 'rgb(239, 239, 239)', 
        borderLeftWidth: 1, 
        borderRightWidth: 1, 
        borderBottomWidth: 1, 
        borderBottomLeftRadius: 18, 
        borderBottomRightRadius: 18, 
        marginBottom: 20 },
    homeVoucherSubViewText: { 
        flex: 1, 
        marginBottom: 10 
    },
    homeVoucherTextCaffe: { 
        color: 'rgb(51, 51, 51)', 
        fontSize: 25, 
        fontWeight: 'bold', 
        marginTop: 10, 
        marginBottom: 10 
    },
    homeVoucherTextBuy: { 
        color: '#979797', 
        fontSize: 17, 
        marginBottom: 10 
    },
    homeVoucherTextColor: { 
        color: 'rgb(15, 113, 184)' 
    },
    homeVoucherTextStarBucks: { 
        color: '#000000', 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
    homeBrowseView: { 
        flex: 1, 
        backgroundColor: '#fafafa', 
        height: 200, 
        padding: 16 }
        ,
    homeBrowseByView: { 
        flex: 0.3, 
    },
    homeBrowseByText: { 
        color: 'black', 
        fontSize: 18, 
    },





    // Burger 

    borderBurgerColor: {
        borderLeftColor: '#ffffff', borderRightColor:'#ffffff', borderTopColor:'rgb(239,239,239)', borderBottomColor:'rgb(239,239,239)', 
        
    },
    paddingBurger: {
        paddingTop: 30,
        backgroundColor: '#ffffff'
    },
    burgerView: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff'
    },
    contentView: {
        paddingLeft: 16,
        paddingBottom: 20
    },
    contentText:{
        fontSize: 18, 
        color: 'black', 
        fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium
    },
    moreView:{ 
        flex: 1, 
        alignItems: 'flex-end', 
        paddingRight: 16 
    },
    moreText:{ 
        color: '#0f71b8', 
        fontSize: 14,
        fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium
    },
    voucherHeight:{ 
        flex: 1, 
        height: 330,
        paddingLeft:10, 
        paddingRight:10
    },
    renderVoucher:{ 
        width: deviceWidth - 52,
        marginLeft: 15,
       
        backgroundColor: '#ffffff'
       
    },
    burgerImageBackground:{ 
        height: 195,       
        overflow: "hidden",
        borderTopLeftRadius:12,
        borderTopRightRadius:12
    },
    iosBurgerImageBackground:{         
        overflow: "hidden",
        borderTopLeftRadius:12,
        borderTopRightRadius:12
    },
    burgerViewVoucher:{ 
        flex: 1, 
        alignItems: 'flex-end',
        marginTop: 120, 
        paddingRight: 10 
    },
    joinNowButton:{ 
        backgroundColor: 'rgb(15,113,184)',
         height: 34, 
         width: 94,
          borderRadius: 60, 
          justifyContent: 'center', 
          alignItems: 'center' 
        },
        joinNowButtonText:{ 
            color: '#ffffff', 
            fontWeight: '600', 
            fontSize: 12 
        },
        validTillView:{ 
            flex: 1, 
            alignItems: 'flex-end', 
            paddingRight: 10 
        },
        validTillText:{ 
            color: '#ffffff', 
            fontSize: 10, 
        },
        macDMainView:{ 
            flex: 1, 
            flexDirection: 'column', 
            backgroundColor: '#ffffff', 
            paddingLeft: 16, 
            borderBottomColor: 'rgb(239, 239, 239)', 
            borderLeftColor: 'rgb(239, 239, 239)', 
            borderRightColor: 'rgb(239, 239, 239)', 
            borderLeftWidth: 1, 
            borderRightWidth: 1, 
            borderBottomWidth: 1, 
            borderBottomLeftRadius: 18, 
            borderBottomRightRadius: 18,
            marginBottom: 20 
        },
        macDSubView:{ 
            flex: 1,
            marginBottom: 10 
        },
        macDChickenText:{ 
            color: '#333333', 
            fontSize: 22, 
            fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
            marginTop: 10, 
            marginBottom: 10 
        },
        getOneFreeMainText:{ 
            color: '#979797', 
            fontSize: 16,
            fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
            marginBottom: 10 
        },
        euroOffText:{
             color: 'rgb(15, 113, 184)' 
        },
        macDText : {
            color: '#000000', 
            fontSize: 12, 
            fontFamily : Platform.OS === "ios" ? SFProTextSemibold : RobotoMedium
        },
        welcomeNote:{ 
            color: '#ffffff', 
            fontSize: 22 , 
            fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium 
        },
        welcomeUser:{ 
            color: '#ffffff', 
            fontSize: 22 
        },
        memberofText:{ 
            color: '#ffffff', 
            fontSize: 12,
            fontFamily : Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,
        },
        medalText:{ 
            color: '#ffffff', 
            fontSize: 14,
            fontFamily : Platform.OS === "ios" ? SFProTextMedium : RobotoMedium  
        },
        searchIcon:{ 
            height: 27, 
            width: 38 
        }




});


export default homeStyles;