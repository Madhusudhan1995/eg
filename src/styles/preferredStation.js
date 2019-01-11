import { StyleSheet, Platform, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const preferredStation = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    subView: {
        flex: 1
    },
    headerTextView: {
        flex: 1,
        marginTop: 3
    },
    mainHeaderText: {
        color: "rgb(132,132,132)",
        fontSize: 18,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        textAlign: "center"
    },
    subHeaderText: {
        color: "rgb(132,132,132)",
        fontSize: 18,
        marginLeft: 30,
        marginRight: 20,
        textAlign: "center"
    },
    mainFlatlistView: {
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        height: 230,
        borderRadius: 30,
        padding: 10,
        marginRight: 15,
        marginLeft: 15,
    },
    amentiesView: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    dotsMainView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dotsView: {
        width: 7,
        height: 7,
        marginLeft: 10,
        borderRadius: 14,
        backgroundColor: '#ffffff',
        borderColor: 'gray',
        borderWidth: 2
    },
    noBorderToolbar: {
        elevation: 0,
        marginTop: ((Platform.OS === 'ios' && deviceHeight === 896 && deviceWidth === 414) || (Platform.OS === 'ios' && deviceHeight === 812 && deviceWidth === 375) ? 30 : 0)
    },
    dotView: {
        width: 7,
        height: 7,
        borderRadius: 14,
        backgroundColor: '#0f71b8'
    },
    mainFlatlistSubView: {
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        marginTop: 10,
        height: 230,
        borderRadius: 30,
        padding: 10,
        marginRight: 15,
        marginLeft: 15,
    },
    flatlistSeperator: {
        marginTop: 20
    },
    shellView: {
        flex: 1.4,
        // elevation: 12,
    },
    shellSubView: {
        flex: 1.5,

        flexDirection: "row"
    },
    shellTextView: {
        flex: 1,
        marginLeft: 15
    },
    shellItem: {
        color: "rgb(51,51,51)",
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    swipeoutButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    },
    directionsMainView: {
        flex: 1,
        paddingLeft: 40
    },
    directionsSubView: {
        width: 100,
        marginLeft: 20,
        marginTop: 20,
        height: 32,
        borderRadius: 25,
        backgroundColor: "rgb(15,113,184)"
    },
    directionsText: {
        color: "rgb(255,255,255)",
        marginTop: 8,
        fontSize: 16,
        textAlign: "center"
    },
    directionsDistance: {
        marginLeft: 50,
        marginTop: 5
    },
    itemFlatlistView: {
        flex: 3,
    },
    removeText: {
        color: "#df4e4e",
        marginTop: 5,
    },
    itemAddressView: {
        color: "rgb(128,128,128)",
        fontSize: 16,
        marginLeft: 15,
        marginTop: 18,
        fontWeight: "bold"
    },
    itemOpenMainView: {
        flexDirection: "row"
    },
    itemOpen: {
        color: "rgb(128,128,128)",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 15
    },
    itemTime: {
        color: "rgb(128,128,128)",
        fontSize: 14
    },
    itemMainFuelView: {
        flexDirection: "row"
    },
    itemFuel: {
        color: "rgb(128,128,128)",
        fontSize: 14,
        fontWeight: "bold",
        marginLeft: 15
    },
    itemType: {
        color: "rgb(128,128,128)",
        fontSize: 14,
        marginLeft: 10
    },
    amentiesMainView: {
        flex: 0.4,
    },
    amentiesSwiper: {
        height: 50,
        alignSelf: "flex-start",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    amentiesSwiperSubView: {
        flex: 1,
        height: 160,
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23,
        justifyContent: "space-around",
        backgroundColor: "rgb(248,248,248)"
    },
    amentiesFirstSwiperMainView: {
        flex: 1,
        flexDirection: "row",
        height: 20,
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23,
        justifyContent: "space-around",
        backgroundColor: "rgb(248,248,248)"
    },
    amentiesFirstSwiperSubView: {
        flex: 4,
        flexDirection: "row",
        borderBottomLeftRadius: 23,
        borderBottomRightRadius: 23,
        justifyContent: "space-around",
        backgroundColor: "rgb(248,248,248)"
    },
    amentiesImage: {
        height: 40,
        width: 40,
        alignSelf: "center",
        backgroundColor: '#fafafa'
    },
    amentiesText: {
        fontSize: 13,
        backgroundColor: '#fafafa'

    },
    amentiesImageView: {
        height: 40,
        width: 40
    },
    amentiesTextView: {
        fontSize: 13,
        marginLeft: 10
    },
    footerView: {
        flex: 1
    },
    footerSubView: {
        marginTop: 60,
        marginLeft: 110,
        width: 180,
        borderRadius: 20,
        height: 8,
        backgroundColor: "black"
    }
});

export default preferredStation;