/**
* @author Sharangouda Konasirasagi<Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary NewsLetter screen for the application.
* @description The screen shows the Newsletters  
* first login to application. using credentials email and password,
* this screen will be in UserSetting screen when you tap on NewsLetter then this screen opens  
* The screen uses react npm modules.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
*/
import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, Image, TouchableOpacity,Dimensions} from "react-native";

/**
* @import Toolbar,ToggleSwitch for building our screen.
* @import Button for toggle the newsletter Subscription
* @description  Toolbar is to Display on top screen and shows Title,
* @import {navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateBack:  It deletes the back history
* and no animation happens while screen transition.
* navigateBack(): It simply naviagates the user to the back screen.
*/
import {Toolbar, Button} from "../components";
import {navigateBack} from "../helpers";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";

/**
* @import ConstantList object. This object have all the constant texts written for the screens.
* the constants have been defined in a file named "language_Constants" which is again importing
*/
import ConstantList from "../constants/lagunage_constant";

/**
* @class NewsLetters
* @extends Component
* @summary Represents NewsLetters class.
* @description This is a NewsLetters class. It extands react Component class for using the functions comes along with it.
*/
class NewsLetters extends Component {

      /**
    * @constructor It is initializing the state with default properties.
    * switchValue: passing the true value for switch button  .
    */
    constructor(props) {
        super(props);
        this.state = {
                isSubscribedView: true,
         };
        this.newsLetterSubscribe = this.newsLetterSubscribe.bind(this);
        this.newsLetterUnSubscribe = this.newsLetterUnSubscribe.bind(this);
      }

      /**
    * @function newsLetterSubscribe: this function is called when user clicks the Subscribe button 
    * he can subscribe to recieve news letter to email .
    */
      newsLetterSubscribe() {
        this.setState({
            isSubscribedView: !this.state.isSubscribedView
        });
      }

         /**
    * @function newsLetterUnSubscribe: this function is called when user clicks the newsLetterUnSubscribe button 
    * he can unsubscribe to stop recieve news letter to email from company.
    */

      newsLetterUnSubscribe() {
        this.setState({
            isSubscribedView: !this.state.isSubscribedView
        });
      }

      /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    */
    render() {
        return (
            <View style={screenstyles.newsLetterContainer}>
                <Toolbar
                    onClickLeftIcon={navigateBack}
                    iconName="loginpage"
                    title={this.props.title} />
                <View style={screenstyles.newsLetterProfileView}>
                    <Image
                        resizeMode="contain"
                        style={screenstyles.newsLetterProfileImage}
                        source={require("../assets/images/settings/newsLetter.png")} />
                    <Text style={screenstyles.newsLetterText}>{ConstantList.newsLetters.newsLettersTitleText}</Text>
                    <Text style={screenstyles.newsLetterContentOne}>{ConstantList.newsLetters.newsLettersContent}</Text>
                    <Text style={screenstyles.newsLetterContentTwo}>{ConstantList.newsLetters.newsLetterContentTwo}.</Text>
                </View>
                <View style={screenstyles.newsletterEmailView}>
                    <View style={screenstyles.newsLetterEmailView}>
                        <View style={screenstyles.newsLetterEmailDetailView}>
                            <View style={screenstyles.newsLetterContactTextView}>
                                <Text style={screenstyles.newsLetterMainText}>{ConstantList.newsLetters.newsLetterEmailText}</Text>
                            </View>
                            <View style={screenstyles.newsLetterContactView}>
                                <Text style={screenstyles.newsLetterMainContactText}>{ConstantList.newsLetters.newsLetterEmail}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={screenstyles.newsLetterSubscribeButtonView}>
                    {this.state.isSubscribedView ? (
                        <TouchableOpacity onPress={this.newsLetterSubscribe}>
                            <View style={screenstyles.newsLetterSubscribeButton}>
                            <Text style={screenstyles.newsLetterSubscribeText}>{this.state.isSubscribedView ? "Subscribe" : "Unsubscribe"}</Text>
                            </View>
                            </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={this.newsLetterUnSubscribe}>
                            <View style={screenstyles.newsLetterSubscribeButton}>
                            <Text style={screenstyles.newsLetterSubscribeText}>{this.state.isSubscribedView ? "Subscribe" : "Unsubscribe"}</Text>
                            </View>
                            </TouchableOpacity>
                    )}
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
const mapStateToProps = state => ({});

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
export default connect(mapStateToProps, mapDispatchToProps)(NewsLetters);
