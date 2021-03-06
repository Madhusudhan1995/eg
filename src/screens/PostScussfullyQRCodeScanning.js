/**
 * @author Machavarapu Adinarayana <machavarapuadin@photoninfotech.net>
 * @version 1.0.2
 * @summary Adding PostScussfullyQRCodeScanning  for the application.
 * @description The screen would be able to scan the QR code on the fuel station and know which pump am I using for fuelling
 * The screen uses react and third party npm modules and also few custom components.
 */

/**
@import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import Text, TouchableOpacity, Linking, Alert, View, SafeAreaView, ScrollView, Image, FlatList
* from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import compose from "redux" for removing the complexicity of higher order components used in the screen.
* @import Permissions from "react-native-permissions" for adding React-native permissions.
* @import QRCodeScanner from "react-native-qrcode-scanner" for adding QrCodeScanner Permissions.
* @import Field, reduxForm from "redux-form" and getFormValuesfor composing the form and for getting the form value in
* and object. also it simplifies form validation.
*/

import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  Alert,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import { compose } from "redux";
import Permissions from "react-native-permissions";
import { reduxForm, getFormValues } from "redux-form";

/**
 * @import {navigateTo} from "helpers" file. "helpers" file has
 * reusable functions written in it.
 * @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
 * user goes to the FuelFilling screen and it updates on the client side as the app has been installed so that we
 * make sure user does not see the onboarding screen every time it launches the app.
 */
import { navigateTo, navigateBack } from "../helpers";
import ConstantsList from "../constants/lagunage_constant";

/**
 * @import screenstyles object. This object have all the styles written for the screens.
 * the styles have been defined in a file named "screenStyles" which is again importing
 * an object from theme file when our theme related styles have been defined.
 */
import screenStyles from "../styles";

/**
 * @class PostScussfullyQRCodeScanning
 * @extends Component
 * @summary Represents PostScussfullyQRCodeScanning class.
 * @description This is a PostScussfullyQRCodeScanning class. It extands react Component class for using the functions comes along with it.
 */

class PostScussfullyQRCodeScanning extends Component {
  //Test
  constructor(props) {
    super(props);
    this.state = {
      data: this.initialState,
      qrcodeScanningStatus: false,
      currentScene: ""
    };
    this.hideAndShowConfirmButton = this.hideAndShowConfirmButton.bind(this);
    this._requestPermission = this._requestPermission.bind(this);
    this._checkCameraAndPhotos = this._checkCameraAndPhotos.bind(this);
  }
  get initialState() {
    return ConstantsList.QRCodeScanning.scanningQRCodeData;
  }
  resetBuilder() {
    this.setState({ data: this.initialState, qrcodeScanningStatus: false });
  }
  /**
   * @function onSuccess
   * QR Code Scanning successfully it will returns the datails of QR Code
   * QR Code Scanning fails it will throw a error
   */
  onSuccess(e) {
    var dataList = [...this.state.data];
    console.log("data after:: ", this.state.data);
    var pumpDetails = {
      cardName: "Shell Station, 1234 Main St. London, UK",
      cardNumber: "Pump 3",
      image: require("../assets/images/QRCodeScanning/pumpDetailsLatest.png")
    };
    console.log("data after:: ", this.state.data.length);
    if (this.state.data.length == 1) {
      var dataList = [...this.state.data];
      dataList.push(pumpDetails);
      this.setState({ data: dataList });
      this.setState({ qrcodeScanningStatus: true });
    }
    console.log("data after:: ", this.state.data);
  }

  /**
   * @function componentDidMount: React lifecycle function. It gets called before render() and first
   * time when component loads.
   * @function Permissions: It returns the QR Code Scanner Permissions
   */
  componentDidMount() {
    var dataList = [...this.state.data];
    console.log("data after:: ", this.state.data);
    var pumpDetails = {
      cardName: "Shell Station, 1234 Main St. London, UK",
      cardNumber: "Pump 3",
      image: require("../assets/images/QRCodeScanning/pumpDetailsLatest.png")
    };
    console.log("data after:: ", this.state.data.length);
    if (this.state.data.length == 1) {
      var dataList = [...this.state.data];
      dataList.push(pumpDetails);
      this.setState({ data: dataList });
      this.setState({ qrcodeScanningStatus: true });
    }
    console.log("data after:: ", this.state.data);
    Permissions.check("photo").then(response => {
      this.setState({ photoPermission: response });
    });
    const { navigation } = this.props;
    navigation.addListener("willFocus", () =>
      this.setState({ focusedScreen: true })
    );
    navigation.addListener("willBlur", () =>
      this.setState({ focusedScreen: false })
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentScene === "_qRCodeScanning") {
      this.setState({
        currentScene: nextProps.currentScene
      });
    }
  }

  /**
   * @function _requestPermission: Its called when user taps the scan Barcode/QR code.and
   * It updates the state and it will go to respective navigation screen.
   */
  _requestPermission() {
    Permissions.request("photo").then(response => {
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      this.setState({ photoPermission: response });
    });
  }

  /**
   * @function _checkCameraAndPhotos: Its called when the user taps Camera
   * Check the status of multiple Camera and Photo permissions
   */
  _checkCameraAndPhotos() {
    Permissions.checkMultiple(["camera", "photo"]).then(response => {
      //response is an object mapping type to permission
      this.setState({
        cameraPermission: response.camera,
        photoPermission: response.photo
      });
    });
  }

  /**
   * @function _alertForPhotosPermission
   * This is a common pattern when asking for permissions.
   * iOS only gives you once chance to show the permission dialog,
   * after which the user needs to manually enable them from settings.
   * The idea here is to explain why we need access and determine if
   * the user will say no, so that we don't blow our one chance.
   * If the user already denied access, we can ask them to enable it from settings.
   */
  _alertForPhotosPermission() {
    Alert.alert(
      "Can we access your photos?",
      "We need access so you can set your profile pic",
      [
        {
          text: "No way",
          onPress: () => {}, 
          style: "cancel"
        },
        this.state.photoPermission == "undetermined"
          ? { text: "OK", onPress: this._requestPermission }
          : { text: "Open Settings", onPress: Permissions.openSettings }
      ]
    );
  }

  /**
   * @function closeButtonTapped: Its called when the user taps Clicks Close Button
   * It updates the state  and Navigate to Respective Home Screen
   */
  closeButtonTapped() {
    navigateBack();
  }

  /**
   * @function confirmButtonTapped: Its called when the user tap on Confirm Button.
   * It updates the state and Navigate to Respective FuelFilling Screen.
   */
  confirmButtonTapped() {
    navigateTo("fuelFilling");
  }

  scanQrcodeAgainTapped() {
    navigateBack();
  }
  /**
   * @function paymentUpdateDetailsBtntapped: Its called when the user tap on the payment section in flatlist
   * It updates the state and Navigate to Respective wallet Screen to update payment details
   */
  paymentUpdateDetailsBtntapped(item, index) {}
  /**
   * @function hideAndShowConfirmButton: By defaults this method will call
   * It depands on the qrcodescanning status show & hide confirm button
   */
  hideAndShowConfirmButton() {
    return (
      <View style={screenStyles.QRSconfirmButton}>
        <TouchableOpacity onPress={this.confirmButtonTapped}>
          <Text style={screenStyles.QRSconfirmTextBold}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  }

  /**
   * @function render: Its one of the main functions of react component. It renders the JSX on the screen
   * In render() we are fetching data from the props and passing it to "onPress" event of then
   */
  render() {
    return (
      <SafeAreaView style={screenStyles.QRScontainerStyle}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={screenStyles.QRScloseButton}
            onPress={this.closeButtonTapped}
          >
            <Image
              source={require("../assets/images/Close.png")}
              style={screenStyles.QRScloseImage}
            />
          </TouchableOpacity>
          <View style={screenStyles.QRScontainerStyle2}>
            <ScrollView>
              <View style={screenStyles.QRScontainerStyle1}>
                <Image
                  source={require("../assets/images/QRCodeScanning/ScanqrcodeLatest.png")}
                  style={screenStyles.QRSqrcodeImage}
                />
                <TouchableOpacity onPress={this.scanQrcodeAgainTapped}>
                  <View style={screenStyles.QRSscanqrcodeText1}>
                    <Text style={screenStyles.ScanQrCodeAgainStyles}>
                      {ConstantsList.QRCodeScanning.ScanQRCodeAgain}
                    </Text>
                  </View>
                </TouchableOpacity>
                <FlatList
                  style={screenStyles.QRSflatListStyle1}
                  data={this.state.data}
                  keyExtractor={(item, index) => index.toString()}
                  ref={ref => {
                    this.flatListRef = ref;
                  }}
                  renderItem={({ item, index }) => (
                    <View style={screenStyles.QRSflatlistContainer}>
                      <View style={screenStyles.QRSflatlistSubView}>
                        <View style={screenStyles.QRSflatListcontentView}>
                          <Text style={screenStyles.QRSflatlistBoldText}>
                            {item.cardNumber}
                          </Text>
                          <Text style={screenStyles.QRSflatListNormalTextColor}>
                            {item.cardName}
                          </Text>
                        </View>
                        <View style={screenStyles.QRSflatlistContainerSubview}>
                          <Image
                            source={item.image}
                            style={screenStyles.QRSpumpImage}
                          />
                        </View>
                      </View>
                    </View>
                  )}
                />
              </View>
            </ScrollView>
            {this.hideAndShowConfirmButton()}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

/**
 * Converting redux state to props for the qRCodeScanning component
 * @function mapStateToProps: It takes redux state as params and converts it as props for the above component.
 * @params {object} state: redux state fetched from store
 * @returns {object} props: converted props which can be used in the above component.
 */
const mapStateToProps = state => ({
  formValues: getFormValues("postScussfullyQRCodeScanning")(state),
  currentScene: state.utility.currentScene
});

/**
 * Converting functions to props for the qRCodeScanning component
 * @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
 * with given payloads.
 * The methods are converted into props and passed to the Login Component for use
 * @params {function} dispatch: It dispatches action to the reducer
 * @returns {object} props: Its converted props and have methods.
 */
const mapDispatchToProps = dispatch => ({});

/**
 * @function compose: It takes higher order function as params in order and returns one HOC which again takes
 * component and as param and returns an updated component.
 * @params {function} connect, reduxForm
 * @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
 * as props for the component.
 * @function reduxForm: It takes an object as params which has the form name and "validate" function as
 * properties. It internally creates a reducer and validates the form.
 */
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: "PostScussfullyQRCodeScanning" })
)(PostScussfullyQRCodeScanning);
