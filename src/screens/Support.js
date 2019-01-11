/**
* @author Sharangouda Konasirasagi<Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary Support screen for the application.
* @description The screen shows the Support 
* first login to application. using credentials email and password,
* this screen will be in UserSetting screen when you tap on Support this screen opens  
* The screen uses react npm modules.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import TLinking, Text, Image, TouchableOpacity, View from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
*/
import {connect} from "react-redux";
import React, {Component} from "react";
import {Linking, Text, Image, TouchableOpacity, View} from "react-native";

/**
* @import Toolbar for building our screen.
* @description  Toolbar is to Display on top screen and shows Title
* @import {navigateTo, navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* navigateBack(): It simply naviagates the user to the back screen.
*/
import {Toolbar} from "../components";
import {navigateBack} from "../helpers";
import {getConactUsData} from "../actions/contactusActions";

/**
* @import ConstantList object. This object have all the constant texts written for the screens.
* the constants have been defined in a file named "language_Constants" which is again importing
*/
import ConstantsList from "../constants/lagunage_constant";

/**
* @import styles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "styles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "../styles";
import screenstyles from "../styles/screenStyles"
/**
* @class Support
* @extends Component
* @summary Represents Support class.
* @description This is a Support class. It extands react Component class for using the functions comes along with it.
*/
class Support extends Component {

      /**
    * @constructor It is initializing the state with default properties.
    */
    constructor(props) {
        super(props);
        this.sendAnEmail = this.sendAnEmail.bind(this);
        this.makeACall = this.makeACall.bind(this);
    }

/**
 * @function componentDidMount: react native life cycle method
 * it is called to access the data from database 
 * 
 */
    componentDidMount() {
        this.props.handleContactUsRequest(this.props.token);
     }

     /**
    * @function sendAnEmail: Its called when you tap email address .
    * This function is take email address and opens a local email app.
    */
      // eslint-disable-next-line class-methods-use-this
      sendAnEmail(supportEmail) {
        const url = "mailto:?to="+supportEmail+"&subject=Feedback&body=";
        Linking.canOpenURL(url).then((supported) => {
            // eslint-disable-next-line no-empty
            if (!supported) {
            } else {
              return Linking.openURL(url);
            }
          }).catch((err) => {});
      }

       /**
    * @function makeACall: Its called when you tap number .
    * This function is take a number and opens the local call number app.
    */
      // eslint-disable-next-line class-methods-use-this
      makeACall(contactNumer) {
        const url = "tel:" + contactNumer;
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                   // console.error('Can\'t handle url: ' + url);
                } else {
                    return Linking.openURL(url)
                        .then((data) => {})
                        .catch((err) => { throw err; });
                }
            })
            .catch((err) => {});
           // .catch((err) => console.error('An error occurred', err));
      }

    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * render the view screen and it has two funtion in it and one for opening the local email and another is for opening the local call app
    */
    render() {
        const {contactusData} = this.props;
        console.log("test 1",contactusData);
        return (
            <View style={screenstyles.supportContainer}>
                <Toolbar
                    onClickLeftIcon={navigateBack}
                    iconName="loginpage"
                    title="Support" />
                <View style={screenstyles.supportProfileView}>
                    <Image
                        resizeMode="contain"
                        style={screenstyles.supportProfileImage}
                        source={require("../assets/images/settings/Support.png")} />
                    <Text style={screenstyles.supportTextTitle}>{ConstantsList.supportScreen.supportTitleText}</Text>
                    <Text style={screenstyles.supportContentOne}>{ConstantsList.supportScreen.supportContentOne}</Text>
                    <Text style={screenstyles.supportContentTwo}>{ConstantsList.supportScreen.supportContentTwo}</Text>
                </View>
                <View style={screenstyles.supportEmailNumberView}>
                    <View style={screenstyles.emailSupportDetailedView}>
                        <View style={screenstyles.contactTextView}>
                            <Text style={screenstyles.supportMainText}>{ConstantsList.newsLetters.newsLetterEmailText}</Text>
                        </View>
                        <View style={screenstyles.contactView}>
                            <TouchableOpacity onPress={() =>this.sendAnEmail(contactusData.supportEmail)}>
                                <Text style={[screenstyles.supportMainContactText, screenstyles.supportMainContactTextEmail]}>{contactusData.supportEmail}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={screenstyles.emailSupportDetailedViewforContact}>
                        <View style={screenstyles.contactTextView}>
                            <Text style={screenstyles.supportMainText}>{ConstantsList.supportScreen.mobileText}</Text>
                        </View>
                        <View style={screenstyles.contactView}>
                            <TouchableOpacity onPress={() => this.makeACall(contactusData.supportContact)}>
                                <Text style={screenstyles.supportMainContactText}>{contactusData.supportContact}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
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
    token: state.auth.token,
    contactusData:state.contactusRedu.contactusData
    
});

/**
* Converting functions to props for the Login component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods
*/
const mapDispatchToProps = dispatch => ({
    handleContactUsRequest : (token) => dispatch(getConactUsData(token))
});

/**
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(Support);


