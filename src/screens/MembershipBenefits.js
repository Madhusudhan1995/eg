/**
* @author Sharangouda Konasirasagi<Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary MembershipBenefits screen for the application.
* @description The screen shows the MembershipBenefits 
* you can see this screen once you log into the app,
* The screen uses react npm modules.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import  Text, View, ScrollView, Image, FlatList, TouchableOpacity View from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
*/
import {connect} from "react-redux";
import React, {Component} from "react";
import { Text, View, ScrollView, Image, FlatList, TouchableOpacity } from "react-native";
import { navigateTo } from "../helpers";

/**
* @import memberBenStyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "memberBenefitStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import memberBenStyles from "../styles/MemberBenefitsStyles"

/**
* @class MembershipBenefits
* @extends Component
* @summary Represents MembershipBenefits class.
* @description This is a MembershipBenefits class. It extands react Component class for using the functions comes along with it.
*/
class MembershipBenefits extends Component {


  /**
    * @constructor It is initializing the state with default properties.
    * entries: String property for default Images.
    */
   constructor(props) {
    super(props);
    this.state = {
        entries: [
            {key: 1, card: require("../assets/images/home/images/group/petr.png"), content: "Find gas stations based on location, partners and services"},
            {key: 2, card: require("../assets/images/home/images/group/star.png"), content: "Save,select and find your favourite gas stations in your account."},
            {key: 3, card: require("../assets/images/home/images/group/heart.png"), content: "Family Sharing"},
            {key: 4, card: require("../assets/images/home/images/group/wallet.png"), content: "EG Wallet"},
            {key: 5, card: require("../assets/images/home/images/group/cup.png"), content: "Collect EG rewards every fill up.EG Club Points can be earned on fuel,convenience stores,products and car wash purchases."},
            {key: 6, card: require("../assets/images/home/images/group/network.png"), content: "Receive discounts and personalised offers from the EG partner network."},
        ]

    };

}
/**
    * @function onCloseClick
    * This method calls when user clicks on icon close
    */
   onCloseClick = () => {
    navigateTo("home");
}

  render() {
    return (
        <View style={memberBenStyles.mainView}>
          <ScrollView>
              <View style={memberBenStyles.container}>
                  <View style={memberBenStyles.viewPagerItemCloseIconConatinerStyle}>
                      <TouchableOpacity onPress={this.onCloseClick}>
                          <Image style={memberBenStyles.viewPagerCloseIcon} source={require('../assets/images/Onboarding_close.png')} />
                      </TouchableOpacity>
                  </View>
                  <Image  style={memberBenStyles.medalImage} source={require("../assets/images/home/images/screenTwo/second.png")}/>
                  <Text style={memberBenStyles.header}>Silver member</Text>
                  <Text style={memberBenStyles.subHeaderCountText}>10001 - 25000</Text>
              </View>
              <View style={memberBenStyles.para}>
                <Text style={memberBenStyles.contentText}>
                    Your Silver EG Club status is recognised across all partners in
                    Europe and the US and you are entitled to a range of
                    benefits,which are provided according to the following tier
                    levels.The EG program is unique because it includes a unique
                    coverage,convenience store purchases,further enhancing customers
                    benefits and experiences beyond the offerings of any competing
                    program.
                  </Text>
                  <Text style={memberBenStyles.reward}>Extra Silver Membership reward</Text>
              </View>
              <View style={memberBenStyles.containerTwo}>
                  <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.entries}
                        keyExtractor={(item, index) => index.toString()}
                        ref={(ref) => {
                            this.flatListRef = ref;
                    }}
                        ItemSeparatorComponent={() => <View style={memberBenStyles.membershipItemSeperator} />}
                        renderItem={({item, index}) => {
                        return (
                                <View style={memberBenStyles.listItemMainView}>
                                    <View style={memberBenStyles.icontListView}>
                                        <Image style={memberBenStyles.iconImages} source={item.card} />
                                    </View>
                                    <View style={memberBenStyles.listItemView}>
                                        <Text style={memberBenStyles.listItemViewText}>{item.content} </Text>
                                    </View>
                                </View>
                        );
                    }} />
              </View>
              <View style={memberBenStyles.memberShipDetails}>
                  <View style={memberBenStyles.memberShipDetailsSubView}>
                      <Text style={memberBenStyles.memberShipDetailsContentHeader}>You're 75% away from reaching </Text>
                      <Text style={memberBenStyles.memberShipDetailsContentHeader}>Gold!</Text>
                      <Text style={memberBenStyles.memberShipDetailsContentText}>Fuel up,purchase in the EG partner shops,spend your vouchers and reach the next level.</Text>
                      <Text style={memberBenStyles.memberShipDetailsContentTextLink}>Learn More</Text>
                  </View>
                  <View style={memberBenStyles.memberShipMedalView}>
                      <Image style={memberBenStyles.memberShipMedalImage} source={require("../assets/images/home/images/screenTwo/third.png")} />
                  </View>
              </View>
              <View style={memberBenStyles.imageListView}>
                <Image style={memberBenStyles.greenMedal} source={require("../assets/images/home/images/bottomMedals/green.png")}/>
                <Image style={memberBenStyles.whiteMedal} source={require("../assets/images/home/images/bottomMedals/white.png")}/>
                <Image  style={memberBenStyles.blueMedal} source={require("../assets/images/home/images/bottomMedals/blue.png")}/>
                <Image style={memberBenStyles.silverMedal} source={require("../assets/images/home/images/bottomMedals/silver.png")}/>
                <Image style={memberBenStyles.goldMedal} source={require("../assets/images/home/images/bottomMedals/gold.png")}/>
              </View>
          </ScrollView>
      </View>
    );
  }
}



/**
* Converting redux state to props for the Login component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({
  isLoggedin: state.auth.isLoggedin,
});

/**
* Converting functions to props for the Login component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({
});

/**
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component..
*/
export default connect(mapStateToProps, mapDispatchToProps)(MembershipBenefits);
