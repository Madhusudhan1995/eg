import { StyleSheet, Platform, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;


//Fonts fot both Android & ios
const SFProTextMedium = "SFProText-Medium";
const SFProTextRegular = "SFProText-Regular";
const RobotoMedium = "Roboto-Medium";
const RobotoRegular = "Roboto-Regular";


const termsAndConditions = StyleSheet.create({
    mainView: {
        flex: 1
    },

    noBorderToolbar: {
        elevation: 0,
        marginTop: ((Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 30 : 0)
    },

    headerView: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingVertical: 8,
        backgroundColor: "#fafafa"
    },
    headerText: {
        fontSize: 12,
        marginLeft: 15,
        marginTop: 10,
        color: "#333333"
    },
    subView: {
        flex: 3,
        backgroundColor: "#FFFFFF"
    },
    termsHeaderText: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium,
    },
    SubText: {
        color: "#848484",
        fontSize: 18,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        fontFamily: Platform.OS === "ios" ? SFProTextRegular : RobotoRegular,

    },
    accountText: {
        color: "#848484",
        fontSize: 18,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10
    },
    defnitionsHeaderText: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginTop: 15,
        fontFamily: Platform.OS === "ios" ? SFProTextMedium : RobotoMedium
    },
    generalIssuesHeaderText: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15
    },

});

export default termsAndConditions;
