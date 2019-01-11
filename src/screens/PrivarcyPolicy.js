/**
* @author Sharangouda Konasirasagi<Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary PrivacyPolicy screen for the application.
* @description The screen shows the PrivacyPolicy 
* first login to application. using credentials email and password,
* this screen will be in UserSetting screen when you tap on PrivacyPolicy this screen opens  
* The screen uses react npm modules.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import Icon from "react-native-elements" to use font icons in this screen whereever required.
*/
import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
/**
* @import Toolbar for building our screen.
* @description  Toolbar is to Display on top screen and shows Title
* @import { navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateBack(): It simply naviagates the user to the back screen.
*/
import { Toolbar } from "../components";
import { navigateBack } from "../helpers";

/**
* @import ConstantList object. This object have all the constant texts written for the screens.
* the constants have been defined in a file named "language_Constants" which is again importing
*/
import ConstantsList from "../constants/lagunage_constant";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";
/**
* @class PrivacyPolicy
* @extends Component
* @summary Represents PrivacyPolicy class.
* @description This is a PrivacyPolicy class. It extands react Component class for using the functions comes along with it.
*/
class PrivacyPolicy extends Component {

    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    */
    render() {
        return (
            <View style={screenstyles.PrivacytContainer}>
                <Toolbar
                    onClickLeftIcon={navigateBack}
                    iconName="loginpage"
                    title={this.props.title} />
                <ScrollView>
                    <View style={screenstyles.privacyPolicyTopHeader}>
                        <Text style={screenstyles.policyText}>{ConstantsList.privacyPolicy.privacyPolicyText}</Text>
                    </View>
                    <View style={screenstyles.privacyPolicyView}>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.IntroductionText}</Text>
                        </View>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.IntroductionContentOne}</Text>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.IntroductionContentTwo}</Text>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.IntroductionContentThree}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.privacyPolicyHeaderOne}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.privacyPolicyHeaderOneContent}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.privacyPolicyHeaderTwo}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.privacyPolicyHeaderTwoContent}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.privacyPolicyAddress}</Text>
                        </View>
                        <View style={screenstyles.policyAddress}>
                            <Text style={screenstyles.policyAddressDetailText}>{ConstantsList.privacyPolicy.headOfficeAddressOne}</Text>
                        </View>
                        <View style={screenstyles.policyAddress}>
                            <Text style={screenstyles.policyAddressDetailText}>{ConstantsList.privacyPolicy.headOfficeAddressTwo}</Text>
                        </View>
                        <View style={screenstyles.policyAddress}>
                            <Text style={screenstyles.policyEmailAddress}>{ConstantsList.privacyPolicy.headOfficeAddressThree}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.privacyPolicyQuestion}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.questionOneAns}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.questionTwoAns}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.questionThreeAns}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.questionFourAns}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.privacyPolicyQuestionTwo}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.answerOneForQuestionTwo}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.answerTwoForQuestionTwo}</Text>
                        </View>
                        <View style={screenstyles.privacyListDataView}>
                            <View>
                                <Icon
                                    raised
                                    name="circle"
                                    type="font-awesome"
                                    iconStyle={screenstyles.privacyIcon}
                                    containerStyle={screenstyles.privacyInnerIconPlus}
                                    size={5} />
                            </View>
                            <View style={screenstyles.privacyDataList}>
                                <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.answerTwoForQuestionTwoListOne}</Text>
                            </View>
                        </View>
                        <View style={screenstyles.privacyListDataView}>
                            <View>
                                <Icon
                                    raised
                                    name="circle"
                                    type="font-awesome"
                                    iconStyle={screenstyles.privacyIcon}
                                    containerStyle={screenstyles.privacyInnerIconPlus}
                                    size={5} />
                            </View>
                            <View style={screenstyles.privacyDataList}>
                                <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.answerTwoForQuestionTwoListTwo}</Text>
                            </View>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.answerThreeForQuestionTwo}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.answerFourForQuestionTwo}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.informationHeader}</Text>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.informationHeaderTwo}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.informationHeaderContent}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.thirdpartiHeader}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentTextForThirdParty}>{ConstantsList.privacyPolicy.thirdpartiHeaderContent}</Text>
                            <Text style={screenstyles.policyEmailAddressForWebSite}>{ConstantsList.privacyPolicy.thirdpartiHeaderContentUrl}</Text>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.thirdpartiHeaderContentLast}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.hyperLinkHeader}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.hyperLinkHeaderContentOne}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.hyperLinkHeaderContentTwo}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.hyperLinkHeaderContentThree}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.hyperLinkHeaderContentFour}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.sharingHeader}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.sharingHeaderContent}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.sharingHeaderContentTwo}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.dataHeadingText}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.dataHeadingTextContent}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.dataContentHeading}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.dataHeadingTextContent}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.optforHeading}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.optforHeadingContent}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.yourHeading}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.yourHeadingContent}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.yourHeadingContentListOne}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.yourHeadingContentListTwo}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.yourHeadingContentListThree}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.privacyPolicyHeader}>
                            <Text style={screenstyles.policyHeaderText}>{ConstantsList.privacyPolicy.dataRetention}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.dataRetentionContent}</Text>
                        </View>
                        <View style={screenstyles.policyContentView}>
                            <Text style={screenstyles.policyContentText}>{ConstantsList.privacyPolicy.dataRetentionContentTwo}</Text>
                        </View>
                        <Text>{"\n"}</Text>
                        <View style={screenstyles.policyContentViewForFooter}>
                            <Text style={screenstyles.copyrightText}>{ConstantsList.privacyPolicy.copyRightFooter}</Text>
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
* with given payloads..
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({});

/**
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(PrivacyPolicy);
