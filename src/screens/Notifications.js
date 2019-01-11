/**
* @author Sharangouda Konasirasagi<Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary Notification screen for the application.
* @description The screen shows the Notification  
* first login to application. using credentials email and password,
* this screen will be in UserSetting screen when you tap on Notification then this screen opens  
* The screen uses react npm modules.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, SectionList from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component
*/
import {connect} from "react-redux";
import React, {Component} from "react";
import {Text, View, Switch, ScrollView} from "react-native";


/**
* @import Toolbar for building our screen.
* @description  Toolbar is to Display on top screen and shows Title,
* @import {navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateBack:  It deletes the back history
* and no animation happens while screen transition.
* navigateBack(): It simply naviagates the user to the back screen.
*/
import {Toolbar} from "../components";
import {navigateBack, dpToPx} from "../helpers";

/**
* @import ConstantList object. This object have all the constant texts written for the screens.
* the constants have been defined in a file named "language_Constants" which is again importing
*/
import ConstantList from "../constants/lagunage_constant";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/Notifications";

/**
* @class Notifications
* @extends Component
* @summary Represents Notifications class.
* @description This is a Notifications class. It extands react Component class for using the functions comes along with it.
*/
class Notifications extends Component {

     /**
    * @constructor It is initializing the state with default properties.
    * switchValue: passing the true value for switch button  .
    */
    constructor(props) {
        super(props);
        this.state = {
            notificationforLableOne: [
                {id: 1, text: "Notification 1", toggle: false},
                {id: 2, text: "Notification 2", toggle: false}
              ],
              notificationforLableTwo: [
                {id: 1, text: "Notification 3", toggle: false},
                {id: 2, text: "Notification 4", toggle: false},
                {id: 3, text: "Notification 5", toggle: false}
              ],
              notificationforLableThree: [
                {id: 1, text: "Notification 6", toggle: false}
                
              ]
            };
        }
    

        rendernotificationListForLableOne() {
            const notificationListforLableOne = this.state.notificationforLableOne.map((data, i, dataArray) => 
                <View key={data.id} style={screenstyles.newsletterView}>
                    <View style={screenstyles.newsLetterTitleView}>
                        <Text style={screenstyles.newsLetterTitleText}>{data.text}</Text>
                    </View>
                    <View style={screenstyles.notificationRightIconView}>
                        <Switch
                           trackColor="#87B8DB"
                            thumbColor="#0F71B8"
                            onValueChange={(toggleValue) => {
                                dataArray[i].toggle = toggleValue;
                                this.setState({notificationforLableOne: dataArray});
                            }}
                            value={ data.toggle }
                            />
                    </View>
                </View>);
            return notificationListforLableOne;
          }

          rendernotificationListForLableTwo() {
            const notificationListforLableTwo = this.state.notificationforLableTwo.map((data, i, dataArray) =>
                <View key={data.id} style={screenstyles.newsletterView}>
                    <View style={screenstyles.newsLetterTitleView}>
                        <Text style={screenstyles.newsLetterTitleText}>{data.text}</Text>
                    </View>
                    <View style={screenstyles.notificationRightIconView}>
                        <Switch
                           trackColor="#87B8DB"
                            thumbColor="#0F71B8"
                            onValueChange={(toggleValue) => {
                                dataArray[i].toggle = toggleValue;
                                this.setState({notificationforLableTwo: dataArray});
                            }}
                            value={ data.toggle }
                            />
                    </View>
                </View>
            )
            return notificationListforLableTwo;
          }

          rendernotificationListForLableThree() {
            const notificationListThree = this.state.notificationforLableThree.map((data, i, dataArray) =>
                <View key={data.id} style={screenstyles.newsletterView}>
                        <View style={screenstyles.newsLetterTitleView}>
                            <Text style={screenstyles.newsLetterTitleText}>{data.text}</Text>
                        </View>
                        <View style={screenstyles.notificationRightIconView}>
                            <Switch
                               trackColor="#87B8DB"
                                thumbColor="#0F71B8"
                                onValueChange={(toggleValue) => {
                                    dataArray[i].toggle = toggleValue;
                                    this.setState({notificationforLableThree: dataArray});
                                }}
                                value={ data.toggle }
                                />
                        </View>
                </View>
            )
            return notificationListThree;
          }

     /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are fetching "toggleSwitch" from the toggle switch button 
    * onlcick on switch "toggleSwitch" it toggles the switch button.
    */
      render() {
        return (
            <View style={screenstyles.notificationContainer}>
                <Toolbar
                    onClickLeftIcon={navigateBack}
                    iconName="loginpage"
                    title={this.props.title} />
                <ScrollView>
                    <View style={screenstyles.notificationContentHeader}>
                        <Text style={screenstyles.newsLetterContentText}>
                            {ConstantList.notifications.notificationsContent}
                        </Text>
                    </View>
                    <View style={screenstyles.notificationListContainer}>
                        <View style={screenstyles.notificationSwitchView}>
                            <View styles={screenstyles.notificationLableHeader}>
                                <Text style={screenstyles.SectionHeaderStyle}>{ConstantList.notifications.lableOneText}</Text>
                            </View>
                            <View>
                                {this.rendernotificationListForLableOne()}
                            </View>
                        </View>
                        <View style={screenstyles.notificationSwitchView}>
                            <View styles={screenstyles.notificationLableHeader}>
                                <Text style={screenstyles.SectionHeaderStyle}>{ConstantList.notifications.lableTwoText}</Text>
                            </View>
                            <View>
                                {this.rendernotificationListForLableTwo()}
                            </View>
                        </View>
                        <View style={screenstyles.notificationSwitchView}>
                            <View styles={screenstyles.notificationLableHeader}>
                                <Text style={screenstyles.SectionHeaderStyle}>{ConstantList.notifications.lableThreeText}</Text>
                            </View>
                            <View style={screenstyles.notificationView}>
                                {this.rendernotificationListForLableThree()}
                            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

