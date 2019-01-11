/**
* @author Megha <megha.h@photoninfotech.net>
* @version 1.0.3
* @summary Setting Screen for the application.
* @description Onclick of settings icon in navigation menu,user will be navigated to setting screen.
* In setting screen the user can be able to click on prefered stations,notifications,Newsletter,
* Help,FAQ,Terms and Conditions and privacy policy screens
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity, SectionList, Alert, ScrollView, from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convertour component as
* container component.
*/
import React, {Component} from "react";
import {Text, View, Image, SectionList, TouchableOpacity, ScrollView, Platform, Alert} from "react-native";
import {connect} from "react-redux";
import {LoginManager} from "react-native-fbsdk";

/**
* @import Toolbar for building our screen.
* @description Toolbar: renders toolbar in the screen.
* @import {navigateTo, redirectTo, navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* redirectTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* It deletes the back history
* and no animation happens while screen transition.
* navigateBack(): It simply naviagates the user to the back screen.
* @import {logoutUser} from "../actions/authActions". logoutUser(userObject): It logouts from the screen and navigate
* back to login screen
*/
import {Toolbar} from "../components";
import {navigateBack, navigateTo, redirectTo} from "../helpers";
import {logoutUser} from "../actions/authActions";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import userSettings from "../styles/userSettings";
import Constantlist from "./../constants/lagunage_constant";

/**
* Section list data and title
*/
const settingsData = [
    {
        data: [
            {
                name: "Preferred Stations",
                rightIconName: require("./../assets/images/settings/PreferedStation.png"),
                scene: "preferredStation"
            },
            {
                name: "Notifications",
                rightIconName: require("./../assets/images/settings/setting_notification.png"),
                scene: "notifications"
            },
            {
                name: "Newsletter",
                rightIconName: require("./../assets/images/settings/Newsletter_Settings.png"),
                scene: "newsLetters"
            }
        ],
        title: "SETTINGS"
    },
    {
        data: [
            {
                name: "Help",
                rightIconName: require("./../assets/images/settings/Help_Settings.png"),
                scene: "support"
            },
            {
                name: "FAQ",
                rightIconName: require("./../assets/images/settings/FAQ_Settings.png"),
                scene: "faqs"
            }
        ],
        title: "SUPPORT"
    },
    {
        data: [
            {
                name: "Terms & Conditions",
                rightIconName: require("./../assets/images/settings/badges/editProfile/Terms.png"),
                scene: "termsAndConditions"
            },
            {
                name: "Privacy Policy",
                rightIconName: require("./../assets/images/settings/badges/editProfile/privacy.png"),
                scene: "privacyPolicy"
            }
        ],
        title: "LEGAL"
    }

];
/**
* @class Settings
* @extends Component
* @summary Represents Settings class.
* @description This is a Settings class. It extends react Component class for using the functions comes along with it.
*/
class Settings extends Component {


    /**
    * @function logoutUser: Its called when user click on the logout button.
    * @function this.props.handleLogoutUser: It takes user details object as params and dispatchs "LogoutUser" actions.
    */
  logoutUser = () => {

      Alert.alert(
          "",
          "Please confirm if you want to logout of the application",
          [
              {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
              },
              {
                  text: "Confirm",
                  onPress: () => {
                      LoginManager.logOut();
                      this.props.handleLogoutUser();
                      navigateTo("login");
                  }
              }
          ],
          {cancelable: false}
      );
  };

  /**
    * @function _logoutButton: Based on platform logout button design changes
  */
  _logoutButton() {
      if (Platform.OS === "ios") {
          return (
            //   <View style={userSettings.settingsLogoutView}>
                  <View style={userSettings.settingsIosLogout}>
                      <TouchableOpacity onPress={this.logoutUser}>
                          <View>
                              <Text style={userSettings.settingsIosLogoutText}>Log Out</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
            //   </View>
          );
      }

      return (
          <View style={userSettings.settingsLogoutView}>
           <TouchableOpacity onPress={this.logoutUser}>
              <View style={userSettings.settingsLogoutSubView}>
                      <View>
                          <Text style={userSettings.settingsLogoutTextView}>Log Out</Text>
                      </View>
              </View>
            </TouchableOpacity>
          </View>
      );

  }

  /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
  */
  render() {
    const { user } = this.props;
    console.log(user);
      return (
          <View style={userSettings.settingContainer}>
              <Toolbar
                  style={[userSettings.settingsToolbar]}
                  onClickLeftIcon={navigateBack}
                  iconName="loginpage"
              />

              <ScrollView contentContainerStyle={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 60}}>
                  <View style={userSettings.settingsProfileView}>
                      <View>
                          <Image source={require("../assets/images/settings/Avatar.png")} style={userSettings.settingsProfile} />
                      </View>
                      <View style={userSettings.settingsProfileSubView}>
                          <TouchableOpacity onPress={() => navigateTo("editProfile")}>
                              <Text style={userSettings.settingsProfileTextView}>{user ? user.firstName : Constantlist.userHome.userName}</Text>
                              <Text style={userSettings.settingsProfileTextSubView}>View your profile</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={userSettings.settingsRightArrow}>
                          <Image style={userSettings.settingsRightArrowView} source={require("./../assets/images/settings/chevron_1.png")} /> 
                      </View>
                  </View>
                  <TouchableOpacity onPress={() => navigateTo("membershipDetails")}>
                  <View style={userSettings.settingsLoyaltyMainView}>
                      <View style={userSettings.settingsLoyaltyImageView}>
                          <Image style={userSettings.settingsLoyaltyImage} source={require("./../assets/images/settings/badges/editProfile/badges_1.png")} />
                      </View>
                      <View style={userSettings.settingsLoyaltyMainTextView}>
                          <Text style={userSettings.settingsFirstText}>EuroGarage Loyalty Program</Text>
                          <Text style={userSettings.settingsSecondText}>Need a coffee? Are you hungry? Join the </Text>
                          <Text style={userSettings.settingsThirdText}>EGClub and take advantage of all our</Text>
                          <Text style={userSettings.settingsFinalText}>exclusive vouchers.</Text>
                      </View>
                      <View style={userSettings.settingsRightArrow}>
                          <Image style={userSettings.settingsRightArrowView} source={require("./../assets/images/settings/rightArrow_1.png")} />
                      </View> 
                  </View>
                  </TouchableOpacity>
                  <View style={userSettings.sectionList}>
                      <SectionList
                          renderItem={({item}) => {
                              return (
                                  <TouchableOpacity onPress={() => navigateTo(item.scene)}>
                                      <View style={userSettings.sectionListContainer}>
                                          <View style={userSettings.sectionListContainerMainView}>
                                              <View style={userSettings.sectionListContainerSubView}>
                                                  <Text style={userSettings.sectionListText}>{item.name}
                                                  </Text>
                                              </View>
                                              <View style={userSettings.sectionListView}>
                                                  <Image source={item.rightIconName} style={userSettings.sectionListImageView} onPress={navigateBack} />
                                              </View>
                                          </View>
                                      </View>
                                  </TouchableOpacity>
                              );
                          }}
                          renderSectionHeader={({section}) => {
                              return (
                                  <View style={userSettings.sectionHeaderView}>
                                      <Text style={userSettings.sectionHeaderTextView}>{section.title} </Text>
                                  </View>
                              );
                          }}
                          sections={settingsData}

                      />
                      {this._logoutButton()}
                  </View>
              </ScrollView>

          </View>
      );
  }
}

/**
* Converting redux state to props for the Settings component
* @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
* @params {object} state: redux state fetched from store
* @returns {object} props: converted props which can be used in the above component.
*/
const mapStateToProps = state => ({
    user: state.auth.user,
});

/**
* Converting functions to props for the Settings component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Settings Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({

    /**
* @function handleLogoutUser: It takes user details object as params and dispatchs "LogoutUser" actions.
* which further makes api call for logout.
*/
    handleLogoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
