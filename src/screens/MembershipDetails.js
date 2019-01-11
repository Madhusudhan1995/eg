/**
 * @author Sharangouda Konasirasagi<Sharanagouda.k@photoninfotech.net>
 * @version 1.0.3
 * @summary MembershipDetails screen for the application.
 * @description The screen shows the MembershipDetails
 * this screen is visible for both loggedin user and Guest user,
 * The screen uses react npm modules.
 */

/**
 * @import React compoment from "react" for creating custom react component and to use lifecycle
 * hooks come along with react.
 * @import Text, View,ScrollView,Image,TouchableOpacity,UIManager,LayoutAnimation, FlatList from "react-native" for creating our view.
 * @import connect from "react-redux" for connecting react compoenent with redux which will convert
 * our component as container component.
 */
import { connect } from "react-redux";
import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  UIManager,
  LayoutAnimation,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

/**
 * @import styles object. This object have all the styles written for the screens.
 * the styles have been defined in a file named "styles" which is again importing
 * an object from theme file when our theme related styles have been defined.
 * @import Toolbar, ExpandCollapseViewHeader  for building our screen.
 * @description  Toolbar is to Display on top screen and shows Title
 * ExpandCollapseViewHeader is to expand the view when user taps on plus icon
 * navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
 * reusable functions written in it.
 */
import { navigateTo } from "../helpers";
import { localStyles } from "../styles/memberShipStyles";

/**
 * @class MembershipDetails
 * @extends Component
 * @summary Represents MembershipDetails class.
 * @description This is a MembershipDetails class. It extands react Component class for using the functions comes along with it.
 */
class MembershipDetails extends Component {
  /**
   * @constructor It is initializing the state with default properties.
   * entries: String property for default Images
   */
  constructor(props) {
    super(props);
    this.state = {
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      mainEntries: [
        {
          key: 1,
          mainBadge: require("../assets/images/home/images/screenTwo/fifth.png"),
          medelContent: "EG Executive Member",
          points: "100000+",
          arrowRight: "expanded5"
        },
        {
          key: 1,
          mainBadge: require("../assets/images/home/images/screenTwo/fourth.png"),
          medelContent: "Platinum Member",
          points: "50001-100000",
          arrowRight: "expanded4"
        },
        {
          key: 1,
          mainBadge: require("../assets/images/home/images/screenTwo/third.png"),
          medelContent: "Gold Member",
          points: "25001-50000",
          arrowRight: "expanded3"
        },
        {
          key: 1,
          mainBadge: require("../assets/images/home/images/screenTwo/second.png"),
          medelContent: "Silver Member",
          points: "10001-25000",
          arrowRight: "expanded2"
        },
        {
          key: 1,
          mainBadge: require("../assets/images/home/images/screenTwo/first.png"),
          medelContent: "Bronze Member",
          points: "0-10000",
          arrowRight: "expanded1"
        }
      ],

      entries: [
        {
          key: 1,
          card: require("../assets/images/home/images/group/petr.png"),
          content: "Find gas stations based on location, partners and services"
        },
        {
          key: 2,
          card: require("../assets/images/home/images/group/star.png"),
          content:
            "Save,select and find your favourite gas stations in your account."
        },
        {
          key: 3,
          card: require("../assets/images/home/images/group/heart.png"),
          content: "Family Sharing"
        },
        {
          key: 4,
          card: require("../assets/images/home/images/group/wallet.png"),
          content: "EG Wallet"
        },
        {
          key: 5,
          card: require("../assets/images/home/images/group/cup.png"),
          content:
            "Collect EG rewards every fill up.EG Club Points can be earned on fuel,convenience stores,products and car wash purchases."
        },
        {
          key: 6,
          card: require("../assets/images/home/images/group/network.png"),
          content:
            "Receive discounts and personalised offers from the EG partner network."
        }
      ]
    };
    this.navigateToRegisterScreen = this.navigateToRegisterScreen.bind(this);
  }

  _animate = () => {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.easeInEaseOut();
  };

  toggle = key => {
    if (key === "expanded1") {
      this.setState(
        {
          expanded1: !this.state.expanded1
        },
        () => {
          this._animate();
        }
      );
    } else if (key === "expanded2") {
      this.setState(
        {
          expanded2: !this.state.expanded2
        },
        () => {
          this._animate();
        }
      );
    } else if (key === "expanded3") {
      this.setState(
        {
          expanded3: !this.state.expanded3
        },
        () => {
          this._animate();
        }
      );
    } else if (key === "expanded4") {
      this.setState(
        {
          expanded4: !this.state.expanded4
        },
        () => {
          this._animate();
        }
      );
    } else {
      this.setState(
        {
          expanded5: !this.state.expanded5
        },
        () => {
          this._animate();
        }
      );
    }
  };

  /**
   * @function navigateToRegisterScreen: It gets called when user presses the joinNow button
   * It will navigate through the respected screen.
   */
  // eslint-disable-next-line class-methods-use-this
  navigateToRegisterScreen() {
    navigateTo("register");
  }

  /**
   * @function onCloseClick
   * This method calls when user clicks on icon close
   */
  onCloseClick = () => {
    navigateTo("home");
  };

  render() {
    const { isLoggedin } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView>
          <View style={localStyles.mainContainer}>
            <View style={localStyles.memberDetailCloseIconConatinerStyle}>
              <TouchableOpacity onPress={this.onCloseClick}>
                <Image
                  style={localStyles.memberDetailCloseIcon}
                  source={require("../assets/images/Onboarding_close.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={localStyles.container}>
              <Image
                style={{ height: 40, width: 20, marginLeft: -50 }}
                source={require("../assets/images/home/images/greenM.png")}
              />
              <Image
                style={{ height: 40, width: 22, marginLeft: 8 }}
                source={require("../assets/images/home/images/blueMedal.png")}
              />
              <Image
                style={{ height: 40, width: 23, marginLeft: 8 }}
                source={require("../assets/images/home/images/redM.png")}
              />
              <Image
                style={{ height: 40, width: 22, marginLeft: 8 }}
                source={require("../assets/images/home/images/silver.png")}
              />
              <Image
                style={{
                  height: 41,
                  width: 22,
                  marginLeft: 5,
                  marginRight: -50
                }}
                source={require("../assets/images/home/images/goldM.png")}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "center",
              marginTop: 12
            }}
          >
            <Text style={localStyles.header}>The EG Loyalty Club</Text>
            <Text style={localStyles.headerTwo}>
              More privileges, recognition and rewards.
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 10,
                borderRadius: 15,
                paddingVertical: 8,
                paddingHorizontal: 15,
                backgroundColor: isLoggedin ? "#ffffff" : "#237bc4"
              }}
              onPress={this.navigateToRegisterScreen}
            >
              <Text style={{ color: "#fff", fontSize: 10 }}>
                {isLoggedin ? " " : "Join Now"}{" "}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 18, marginLeft: 15, marginRight: 15 }}>
            <Text
              style={{
                paddingHorizontal: 7,
                fontSize: 15,
                color: "rgb(132,132,132)"
              }}
            >
              As a member of the EG Loyalty Club you can enjoy many
              privileges,including discounts from our partners and get you get
              access to the best offers and discount vouchers no matter where
              you are.
            </Text>
            <Text
              style={{
                marginTop: 10,
                paddingHorizontal: 7,
                fontSize: 15,
                color: "rgb(132,132,132)"
              }}
            >
              Your EG Club status is recognized across all partners in Europe
              and the US and you are entitled to a range of benefits,which are
              provided according to the following tier levels. The EG program is
              unique coverage,convenience store purchases,further enhancing
              customers benefits and experiences beyond the offerings of any
              competing program.
            </Text>
            <Text
              style={{
                marginTop: 10,
                paddingLeft: 6,
                fontWeight: "500",
                color: "#000"
              }}
            >
              Start earning and save with EG Loyalty.
            </Text>
          </View>

          <View
            style={{
              marginTop: 30,
              borderTopWidth: 0.8,
              borderTopColor: "rgb(239, 239, 239)",
              borderBottomColor: "rgb(239, 239, 239)",
              borderBottomWidth: 0.8
            }}
          >
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
              <TouchableOpacity
                value={this.state.expanded5}
                onPress={() => this.toggle("expanded5")}
              >
                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                        marginLeft: 10,
                        marginRight: -50
                      }}
                      source={require("../assets/images/home/images/screenTwo/fifth.png")}
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        marginLeft: -70,
                        paddingTop: 5,
                        paddingLeft: 25
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          color: "#000"
                        }}
                      >
                        EG Executive Member
                      </Text>
                      <Text>100000+</Text>
                    </View>
                    <Icon
                      name={
                        this.state.expanded5 ? "chevron-up" : "chevron-down"
                      }
                      size={35}
                      color="rgb(128, 128, 128)"
                      style={{ marginTop: 10, paddingRight: 10 }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              {this.state.expanded5 && (
                <View style={{ backgroundColor: "#fafafa", paddingBottom: 20 }}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.entries}
                    keyExtractor={(item, index) => index.toString()}
                    ref={ref => {
                      this.flatListRef = ref;
                    }}
                    ItemSeparatorComponent={() => (
                      <View style={localStyles.memberSeperator} />
                    )}
                    renderItem={({ item, index }) => {
                      return (
                        <View style={localStyles.share}>
                          <View style={{ justifyContent: "flex-start" }}>
                            <Image
                              style={{
                                height: 25,
                                width: 25,
                                marginLeft: 30,
                                marginTop: 25
                              }}
                              source={item.card}
                            />
                          </View>
                          <View style={{ justifyContent: "flex-end" }}>
                            <Text
                              style={{
                                width: 250,
                                flexWrap: "wrap",
                                marginLeft: 20,
                                paddingTop: 25
                              }}
                            >
                              {item.content}{" "}
                            </Text>
                          </View>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "rgb(239, 239, 239)",
              borderBottomWidth: 0.8
            }}
          >
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
              <TouchableOpacity
                value={this.state.expanded4}
                onPress={() => this.toggle("expanded4")}
              >
                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                        marginLeft: 10,
                        marginRight: -50
                      }}
                      source={require("../assets/images/home/images/screenTwo/fourth.png")}
                    />

                    <View
                      style={{
                        flexDirection: "column",
                        marginLeft: -90,
                        paddingTop: 5,
                        paddingLeft: 20
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          color: "#000"
                        }}
                      >
                        Platinum Member
                      </Text>
                      <Text>50001 - 100000</Text>
                    </View>
                    <Icon
                      name={
                        this.state.expanded4 ? "chevron-up" : "chevron-down"
                      }
                      size={35}
                      color="rgb(128, 128, 128)"
                      style={{ marginTop: 10, paddingRight: 10 }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              {this.state.expanded4 && (
                <View style={{ backgroundColor: "#fafafa", paddingBottom: 20 }}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.entries}
                    keyExtractor={(item, index) => index.toString()}
                    ref={ref => {
                      this.flatListRef = ref;
                    }}
                    ItemSeparatorComponent={() => (
                      <View style={localStyles.memberSeperator} />
                    )}
                    renderItem={({ item, index }) => {
                      return (
                        <View style={localStyles.share}>
                          <View style={{ justifyContent: "flex-start" }}>
                            <Image
                              style={{
                                height: 25,
                                width: 25,
                                marginLeft: 30,
                                marginTop: 25
                              }}
                              source={item.card}
                            />
                          </View>
                          <View style={{ justifyContent: "flex-end" }}>
                            <Text
                              style={{
                                width: 250,
                                flexWrap: "wrap",
                                marginLeft: 20,
                                paddingTop: 25
                              }}
                            >
                              {item.content}{" "}
                            </Text>
                          </View>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "rgb(239, 239, 239)",
              borderBottomWidth: 0.8
            }}
          >
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
              <TouchableOpacity
                value={this.state.expanded3}
                onPress={() => this.toggle("expanded3")}
              >
                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                        marginLeft: 10,
                        marginRight: -50
                      }}
                      source={require("../assets/images/home/images/screenTwo/third.png")}
                    />

                    <View
                      style={{
                        flexDirection: "column",
                        marginLeft: -120,
                        paddingTop: 5,
                        paddingLeft: 20
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          color: "#000"
                        }}
                      >
                        Gold Member
                      </Text>
                      <Text>25001 - 50000</Text>
                    </View>
                    <Icon
                      name={
                        this.state.expanded3 ? "chevron-up" : "chevron-down"
                      }
                      size={35}
                      color="rgb(128, 128, 128)"
                      style={{ marginTop: 10, paddingRight: 10 }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              {this.state.expanded3 && (
                <View style={{ backgroundColor: "#fafafa", paddingBottom: 20 }}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.entries}
                    keyExtractor={(item, index) => index.toString()}
                    ref={ref => {
                      this.flatListRef = ref;
                    }}
                    ItemSeparatorComponent={() => (
                      <View style={localStyles.memberSeperator} />
                    )}
                    renderItem={({ item, index }) => {
                      return (
                        <View style={localStyles.share}>
                          <View style={{ justifyContent: "flex-start" }}>
                            <Image
                              style={{
                                height: 25,
                                width: 25,
                                marginLeft: 30,
                                marginTop: 25
                              }}
                              source={item.card}
                            />
                          </View>
                          <View style={{ justifyContent: "flex-end" }}>
                            <Text
                              style={{
                                width: 250,
                                flexWrap: "wrap",
                                marginLeft: 20,
                                paddingTop: 25
                              }}
                            >
                              {item.content}{" "}
                            </Text>
                          </View>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "rgb(239, 239, 239)",
              borderBottomWidth: 0.8
            }}
          >
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
              <TouchableOpacity
                value={this.state.expanded2}
                onPress={() => this.toggle("expanded2")}
              >
                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                        marginLeft: 10,
                        marginRight: -50
                      }}
                      source={require("../assets/images/home/images/screenTwo/second.png")}
                    />

                    <View
                      style={{
                        flexDirection: "column",
                        marginLeft: -110,
                        paddingTop: 5,
                        paddingLeft: 20
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          color: "#000"
                        }}
                      >
                        Silver Member
                      </Text>
                      <Text>10001 - 25000</Text>
                    </View>
                    <Icon
                      name={
                        this.state.expanded2 ? "chevron-up" : "chevron-down"
                      }
                      size={35}
                      color="rgb(128, 128, 128)"
                      style={{ marginTop: 10, paddingRight: 10 }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              {this.state.expanded2 && (
                <View style={{ backgroundColor: "#fafafa", paddingBottom: 20 }}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.entries}
                    keyExtractor={(item, index) => index.toString()}
                    ref={ref => {
                      this.flatListRef = ref;
                    }}
                    ItemSeparatorComponent={() => (
                      <View style={localStyles.memberSeperator} />
                    )}
                    renderItem={({ item, index }) => {
                      return (
                        <View style={localStyles.share}>
                          <View style={{ justifyContent: "flex-start" }}>
                            <Image
                              style={{
                                height: 25,
                                width: 25,
                                marginLeft: 30,
                                marginTop: 25
                              }}
                              source={item.card}
                            />
                          </View>
                          <View style={{ justifyContent: "flex-end" }}>
                            <Text
                              style={{
                                width: 250,
                                flexWrap: "wrap",
                                marginLeft: 20,
                                paddingTop: 25
                              }}
                            >
                              {item.content}{" "}
                            </Text>
                          </View>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </View>
          </View>

          <View
            style={{
              borderBottomColor: "rgb(239, 239, 239)",
              borderBottomWidth: 0.8
            }}
          >
            <View style={{ paddingTop: 20, paddingBottom: 20 }}>
              <TouchableOpacity
                value={this.state.expanded1}
                onPress={() => this.toggle("expanded1")}
              >
                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Image
                      style={{
                        height: 50,
                        width: 50,
                        marginLeft: 10,
                        marginRight: -50
                      }}
                      source={require("../assets/images/home/images/screenTwo/first.png")}
                    />

                    <View
                      style={{
                        flexDirection: "column",
                        marginLeft: -100,
                        paddingTop: 5,
                        paddingLeft: 20
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          color: "#000"
                        }}
                      >
                        Bronze Member
                      </Text>
                      <Text>0 - 10000</Text>
                    </View>
                    <Icon
                      name={
                        this.state.expanded1 ? "chevron-up" : "chevron-down"
                      }
                      size={35}
                      color="rgb(128, 128, 128)"
                      style={{ marginTop: 10, paddingRight: 10 }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              {this.state.expanded1 && (
                <View style={{ backgroundColor: "#fafafa", paddingBottom: 20 }}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.entries}
                    keyExtractor={(item, index) => index.toString()}
                    ref={ref => {
                      this.flatListRef = ref;
                    }}
                    ItemSeparatorComponent={() => (
                      <View style={localStyles.memberSeperator} />
                    )}
                    renderItem={({ item, index }) => {
                      return (
                        <View style={localStyles.share}>
                          <View style={{ justifyContent: "flex-start" }}>
                            <Image
                              style={{
                                height: 25,
                                width: 25,
                                marginLeft: 30,
                                marginTop: 25
                              }}
                              source={item.card}
                            />
                          </View>
                          <View style={{ justifyContent: "flex-end" }}>
                            <Text
                              style={{
                                width: 250,
                                flexWrap: "wrap",
                                marginLeft: 20,
                                paddingTop: 25
                              }}
                            >
                              {item.content}{" "}
                            </Text>
                          </View>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </View>
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
  isLoggedin: state.auth.isLoggedin
});

/**
 * Converting functions to props for the Login component
 * @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
 * with given payloads.
 * The methods are converted into props and passed to the Login Component for use
 * @params {function} dispatch: It dispatches action to the reducer
 * @returns {object} props: Its converted props and have methods.
 */
const mapDispatchToProps = dispatch => ({});

/**
 * @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
 * as props for the component.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembershipDetails);
