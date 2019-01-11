/**
 * @author Aman Shekhar <aman.s@photoninfotech.net>
 * @version 1.0.2
 * @summary Custom CardView component.
 * @description A custom CardView component is being made. This component will be getting used wherever the CardView is required instead of creating a new one again and again.
 */

/**
 * @import React compoment from "react" for creating custom react component and to use lifecycle
 * hooks come along with react.
 * @import View, Text, TouchableOpacity, StyleSheet, Image from react-native for creating our view.
 * @import LinearGradient from "react-native-linear-gradient" to use gradient.
 */

import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

/**
 * @import componentstyles object. This object have all the styles written for the screens.
 * the styles have been defined in a file named "componentStyles" which is again importing
 * an object from theme file when our theme related styles have been defined.
 */
import componentstyles from "../../styles/componentStyles";

/**
 * It is initializing the state with default Props properties.
 * title: Represents the title of the Button.
 * onPress: Handles the onPress of the Button.
 * color: Defines the color of the Card
 */
const defaultProps = {
  title: "Card",
  onPress: () => {},
  color: "#333333"
};

/**
 * @class CardItem
 * @extends Component
 * @summary Represents Custom CardView.
 * @description This is a Custom Component for CardView. It extends react Component class for using the functions comes along with it.
 */
class CardItem extends Component {
  /**
   * @function render: Its one of the main functions of react component. It renders the JSX on the screen
   * In render() we are making a view for the custom CardView.
   */

  renderItemView = () => {
    let {
      image,
      cashOff,
      voucherCode,
      voucherValidity,
      store,
      currencyIcon
    } = this.props;
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#339933", "#006666", "#003366"]}
        style={[componentstyles.cardViewForRedeemed, this.props.styles]}
      >
        <View style={[componentstyles.cardCoupenView, this.props.styles]}>
          <View style={componentstyles.imageView}>
            <View style={componentstyles.imageborderView}>
              <Image
                // source={image ? { uri: image } : require("./../../assets/images/noimage.jpg")}
                source={require("./../../assets/images/burgerQueen.jpg")}
                style={componentstyles.image}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={componentstyles.contentContainer}>
            <View style={componentstyles.containtStore}>
              <Text style={componentstyles.storeTextStyle}>
                {store ? store : "Undefined"}
              </Text>
            </View>
            <View style={componentstyles.containtText}>
              <Text style={componentstyles.cashoffTextStyle}>
                {currencyIcon ? currencyIcon : ""}
                {cashOff ? cashOff : "0"} OFF in your in your next purchase
              </Text>
            </View>
          </View>
          <View style={componentstyles.dottedView} />
          <View style={componentstyles.coupenCodeView}>
            <View style={componentstyles.CoupenCodeTextView}>
              <Text style={componentstyles.coupenCodeTextStyle}>
                Coupon Code
              </Text>
            </View>
            <View style={componentstyles.CoupenCodeText}>
              <Text style={componentstyles.codeTextStyle}>
                {voucherCode ? voucherCode : "Code Not Found"}
              </Text>
            </View>
          </View>
        </View>
        <View style={[componentstyles.cardValidityView]}>
          <View style={componentstyles.validityContentView}>
            <Text style={componentstyles.validityText}>
              Valid till {voucherValidity ? voucherValidity : "DD MMM YYYY"}
            </Text>
          </View>
        </View>
      </LinearGradient>
    );
  };

  render() {
    let { voucherUsed } = this.props;
    if (voucherUsed == "yes") {
      return (
        <View style={[componentstyles.cardcontainerForRedeemed]}>
          {this.renderItemView()}
        </View>
      );
    } else {
      return (
        <TouchableOpacity activeOpacity={0.5} onPress={this.props.onPress}>
          <View style={[componentstyles.cardcontainer]}>
            {this.renderItemView()}
          </View>
        </TouchableOpacity>
      );
    }
  }
}

CardItem.defaultProps = defaultProps;

export default CardItem;
