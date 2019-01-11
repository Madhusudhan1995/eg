/**
* @author Megha<megha.h@photoninfotech.net>
* @version 1.0.3
* @summary Edit Profile screen for the application.
* @description The screen shows the Edit Profile screen
* first login to application. using credentials email and password,
* this screen will be in UserSetting screen when you tap on view your profile this screen opens
* The screen uses react npm modules and also few custom components.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import Text, View, TouchableOpacity,Image,Alert from "react-native" for creating our view.
* @import compose,reduxForm from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
*/
import { connect } from "react-redux";
import React, { Component } from "react";
import { compose } from "redux";

import { View, ScrollView, Text, Image, TouchableOpacity, Alert,SafeAreaView } from "react-native";
import { LoginManager } from "react-native-fbsdk";
import ImagePicker from "react-native-image-picker";
import { Field, reduxForm, getFormValues } from "redux-form";
import validator from "validator";
import { InputText, ScanInput } from "../components";


import {postEditProfile} from "../actions/editprofileActions";
import {onAppInstall} from "../actions/onBoardingActions";
import { EDITPROFILE_URL } from "../constants/url-constants";

/**
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
import { navigateBack, navigateTo } from "../helpers";
import { logoutUser } from "../actions/authActions";




/**
* @import editProfile object. This object have all the styles written for the screens.
* the styles have been defined in a file named "editProfile" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import editProfile from "../styles/editProfile";
import screenstyles from "../styles/screenStyles";
import styles from "../styles/CardAddManualStyles";
import Constantlist from "./../constants/lagunage_constant";
/**
* @class EditProfile
* @extends Component
* @summary Represents EditProfile class.
* @description This is a EditProfile class. It extends react Component class for using the functions comes along with it.
*/
class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            ImageSource: null,

        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleBackPress = this.handleBackPress.bind(this);
        this.handleBackNavigation = this.handleBackNavigation.bind(this);
        this.renderTextInput = this.renderTextInput.bind(this);

    }


    /**
    * @function onSubmit
    * @description onClick of onSubmit method alert will popup
    */
    onSubmit = (values) => {
        var object = {
            "userName":"megha",
            "password":"megha@123",
            "email":"megha@gmail.com",
            "firstName":"megna",
            "lastName":"mahesh",
            "tncAcceptance":true,
            "pushNotificationEnabled":false,
            "deviceId":"1234",
            "addressLine1":"mansjd",
            "addressLine2":"qwerty",
            "city":"london",
            "country":"msbn",
            "zipCode":"123455",
            "mobileNo":"87633456645",
            "thumbnailUrl":""
        }
        console.log("object :: :: : :",object);
        this.props.updateEditProfileRequest(this.props.token, object, EDITPROFILE_URL)
    }
  

    onChange(key, value) {
        this.setState({
            [key]: value
        });
    }
    /**
   * @function handleBackNavigation: It gets called when user entered some text on fields ,
   * if user want to exit from the register screen then get alert to clear the all text  .
   */
    handleBackNavigation() {
        if (this.props.formValues && Object.keys(this.props.formValues).length > 0) {
            Alert.alert(
                "Alert",
                "“Please confirm, if you want to navigate away from this screen. Entered data will be lost.”",
                [
                    { text: "Close", onPress: () => { } }, // console.log('Cancel Pressed!') },
                    { text: "Confirm", onPress: () => navigateBack() }
                ],
                { cancelable: false }
            );
        } else {
            navigateBack();
         }
    }
    /**
    * @function handleBackPress: It gets called when user tap on back navigation
    * It will navigate to back.
    */
    handleBackPress() {
        this.handleBackNavigation();
        return true;
    }
    /**
    * @function selectPhotoTapped
    * @description selectPhotoTapped method will select the photo
    */
    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                //  console.log('ImagePicker Cancelled')
            } else if (response.error) {
                //  console.log('ImagePicker error')
            } else if (response.customButton) {
                // console.log('ImagePicker custom buttton')
            } else {
                const source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    ImageSource: source
                });
            }
        });
    }
    /**
        * @function renderScanInput: Its called in the render function and returns a input component.
        * @params {object} It takes field object which has input properties which further gets passed
        * to the input component.
        * @return {Compoenent} It returns a presenter input component.
        */
    renderScanInput = (field) => {
        const { meta: { touched, error }, labelStyle, inputStyle, placeholder, label, style, secureTextEntry, input: { onChange, ...restInput } } = field;
        return (
            <View >
                <ScanInput label={label}
                    labelStyle={labelStyle}
                    inputStyle={inputStyle}
                    placeholderTextColor="rgba(51, 51, 51, 0.6)"
                    selectionColor="rgb(51, 51, 51)"
                    returnKeyType={this.props.returnKeyType}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    keyboardType={this.props.keyboardType}
                    maxLength={this.props.maxLength}
                    value={this.props.value}
                    onChangeText={onChange}
                    style={style}
                    {...restInput}
                />
                <Text style={[screenstyles.errorText, { marginLeft: "40%", position: "absolute", bottom: 0 }]}>{touched ? error : ""}</Text>
            </View>
        );
    }

    /**
    * @function saveButtonTapped: It gets called when user presses the icon to see the Alert
    * It updates the state and updated to respective navigation screen.
    */
    saveButtonTapped() {
        console.log("values :: ",values);
        var object = {
            userName:values.userName,
            password:values.password,
            email:values.email,
            firstName:values.firstName,
            lastName:values.lastName,
            tncAcceptance:true,
            pushNotificationEnabled:false,
            deviceId:"1234",
            addressLine1:values.addressLine1,
            addressLine2:values.addressLine2,
            city:values.city,
            country:values.country,
            zipCode:values.zipCode,
            mobileNo:values.mobileNo,
            thumbnailUrl:""
        }
        console.log("object :: :: : :",object);
        this.props.updateEditProfileRequest(this.props.token, object, EDITPROFILE_URL)
    }
    renderTextInput = (field) => {
        const { meta: { touched, error }, placeholder, keyboardType, label, input: { onChange, ...restInput } } = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                    label={null}
                    placeholder={placeholder}
                    {...restInput} />
                <Text style={screenstyles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }
 
    /**
    * @function render
    * React render method for rendering the native elements
    */
    render() {
        const { user } = this.props;
        const {editprofileData} = this.props;
        // console.log("Test 3 ",editProfile);

        const { handleSubmit } = this.props;
        return (
            <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={editProfile.headerView}>
                    <TouchableOpacity onPress={this.handleBackNavigation}>
                        <Image style={{ marginTop: 20, marginLeft: 30 }} source={require("../assets/images/settings/back.png")} />
                    </TouchableOpacity>
                    <View style={editProfile.profilePic}>
                        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                            <Image
                                source={this.state.ImageSource === null ? require("../assets/images/settings/Avatar.png") : this.state.ImageSource}
                                style={editProfile.profilePicImage} />
                        </TouchableOpacity>
                        {this.state.ImageSource === null
                            ? <Text style={editProfile.editText}>{user ? user.firstName : Constantlist.userHome.userName}</Text>
                            : <Text style={editProfile.editText}>{user ? user.firstName : Constantlist.userHome.userName}</Text>
                        }
                    </View>
                </View>
                <View style={editProfile.egLoyaltyTextView}>
                    <Text style={editProfile.egLoyaltyText}>EG LOYALTY BADGES PROGRAM</Text>
                </View>
                <View style={editProfile.loyaltyBadgesView}>
                    <View style={editProfile.amentiesMainView}>
                        <View style={editProfile.amentiesSwiperSubView}>
                            <View style={editProfile.amentiesFirstSwiperMainView} />
                            <View style={editProfile.amentiesFirstSwiperSubView}>
                                <View>
                                    <Image style={editProfile.amentiesImageView} source={require("../assets/images/settings/badges/editProfile/badges_2.png")} />
                                </View>
                                <View>
                                    <Image style={editProfile.amentiesImageView} source={require("../assets/images/settings/badges/editProfile/badges_3.png")} />
                                </View>
                                <View>
                                    <Image style={editProfile.amentiesImageView} source={require("../assets/images/settings/badges/editProfile/badges_6.png")} />
                                </View>
                                <View>
                                    <Image style={editProfile.amentiesImageView} source={require("../assets/images/settings/badges/editProfile/badges_4.png")} />
                                </View>
                                <View>
                                    <Image style={editProfile.amentiesImageView} source={require("../assets/images/settings/badges/editProfile/badges_5.png")} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={editProfile.loyaltyBadgesPercentageView}>
                    <View style={editProfile.loyaltyBadgesPercentageTextView}>
                        <Text style={editProfile.loyaltyBadgesText}>You're 75% away from reaching</Text>
                        <Text style={editProfile.loyaltyBadgesGoldText}>Gold!</Text>
                        <Text style={editProfile.loyaltyBadgesMainText}>Fuel up,purchase in the EG partner shops,</Text>
                        <Text style={editProfile.loyaltyBadgesMainText}> spend your vouchers and reach the next level.</Text>
                        <TouchableOpacity onPress={() => navigateTo("membershipBenefits")}>
                        <Text style={editProfile.learnText}>Learn More</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={editProfile.loyaltyBadgesImageView}>
                        <Image style={editProfile.imageView} source={require("../assets/images/settings/badges/editProfile/badges_1.png")} />
                    </View>
                </View>
                <View style={editProfile.contactView}>
                    <View style={editProfile.contactHeaderView}>
                        <Text style={editProfile.contactInformationTextView}>CONTACT INFORMATION</Text>
                    </View>
                    <View style={[styles.filedHeight, styles.separatorTopandBottomColor]}>
                        <Field
                            name="email"
                            label="Email"
                            placeholder="mike.lee.jones@email.com"
                            maxLength={30}
                            style={editProfile.fieldStyles}
                            labelStyle={editProfile.labelStyles}
                            inputStyle={editProfile.inputStyles}
                            component={this.renderScanInput}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={[styles.filedHeight, styles.separatorTopandBottomColor]}>
                        <Field
                            name="mobileNo"
                            label="Phone Number"
                            placeholder="+1234 567 8901"
                            maxLength={30}
                            style={editProfile.fieldStyles}
                            labelStyle={editProfile.labelStyles}
                            inputStyle={editProfile.inputStyles}
                            component={this.renderScanInput}
                            keyboardType="Phone Number"
                        />
                    </View>
                    <View>
                        <View style={editProfile.contactHeaderView}>
                            <Text style={editProfile.addressText}>ADDRESS</Text>
                        </View>
                    </View>
                    <View style={[styles.filedHeight, styles.separatorTopandBottomColor]}>
                        <Field
                            name="addressLine1"
                            label="Address 1"
                            placeholder="1234 Main Street"
                            maxLength={30}
                            style={editProfile.fieldStyles}
                            labelStyle={editProfile.labelStyles}
                            inputStyle={editProfile.inputStyles}
                            component={this.renderScanInput}
                            keyboardType="address1"
                        />
                    </View>
                    <View style={[styles.filedHeight, styles.separatorTopandBottomColor]}>
                        <Field
                            name="addressLine2"
                            label="Address 2"
                            placeholder="FL.4"
                            maxLength={30}
                            style={editProfile.fieldStyles}
                            labelStyle={editProfile.labelStyles}
                            inputStyle={editProfile.inputStyles}
                            component={this.renderScanInput}
                            keyboardType="address2"
                        />
                    </View>
                    <View style={[styles.filedHeight, styles.separatorTopandBottomColor]}>
                        <Field
                            name="city"
                            label="City"
                            placeholder="London"
                            maxLength={30}
                            style={editProfile.fieldStyles}
                            labelStyle={editProfile.labelStyles}
                            inputStyle={editProfile.inputStyles}
                            component={this.renderScanInput}
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={[styles.filedHeight, styles.separatorTopandBottomColor]}>
                        <Field
                            name="country"
                            label="Country"
                            placeholder="UK"
                            maxLength={30}
                            style={editProfile.fieldStyles}
                            labelStyle={editProfile.labelStyles}
                            inputStyle={editProfile.inputStyles}
                            component={this.renderScanInput}
                            keyboardType="country"
                        />
                    </View>
                    <View style={[styles.filedHeight, styles.separatorTopandBottomColor]}>
                        <Field
                            name="zipCode"
                            label="Zip Code"
                            placeholder="12345"
                            maxLength={30}
                            style={editProfile.fieldStyles}
                            labelStyle={editProfile.labelStyles}
                            inputStyle={editProfile.inputStyles}
                            component={this.renderScanInput}
                            keyboardType="zipcode"
                        />
                    </View>
                    <View style={editProfile.submitButton}>
                        <View style={editProfile.saveButton}>
                            <Text style={editProfile.textButton} onPress={handleSubmit(this.onSubmit)}>Save</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            </SafeAreaView>
        );
    }
}
const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Required";
    } else if (!validator.isEmail(values.email)) {
        errors.email = "Required";
    }
    if (!values.mobileNo) {
        errors.mobileNo = "Required";
    }
    if (!values.addressLine1) {
        errors.addressLine1 = "Required";
    }
    if (!values.addressLine2) {
        errors.addressLine2 = "Required";
    }
    if (!values.city) {
        errors.city = "Required";
    }
    if (!values.country) {
        errors.country = "Required";
    }
    if (!values.zipCode) {
        errors.zipCode = "Required";
    }
    return errors;
};


/**
* Converting redux state to props for the EditProfile component
* @function mapStateToProps
* @params {object} state
* @returns {object} props
*/
const mapStateToProps = state => ({
    token: state.auth.token,
    formValues: getFormValues("goFuelCardAddManually")(state),
    user: state.auth.user,
    initialValues: {email: state.auth.user.email }
});

/**
* Converting redux state to props for the EditProfile component
* @function mapDispatchToProps
* @params {function} dispatch
* @returns {object} props
*/
const mapDispatchToProps = dispatch => ({
    updateEditProfileRequest: (token, payload) => dispatch(postEditProfile(token, payload)),
          onAppInstall: payload => dispatch(onAppInstall(payload))
         });


export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    reduxForm({
        form: "EditProfile",
        validate
    })
)(EditProfile);


