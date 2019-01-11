/**
* @author Megha H.U<megha.h@photoninfotech.net>
* @version 1.0.3
* @summary TermsAndConditions screen for the application.
* @description The screen shows the TermsAndConditions
* first login to application. using credentials email and password,
* this screen will be in UserSetting screen when you tap on termsAndCondition this screen opens
* The screen uses react npm modules.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, FlatList from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
*/
import { connect } from "react-redux";
import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

/**
* @import Toolbar for building our screen.
* @description  Toolbar is to Display on top screen and shows Title
* @import {navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateBack:  It deletes the back history
* and no animation happens while screen transition.
* navigateBack(): It simply naviagates the user to the back screen.
*/
import { Toolbar } from "../components";
import { navigateBack } from "../helpers";
import termsAndConditions from "../styles/termsAndConditions";

/**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import screenstyles from "../styles/screenStyles";

/**
* @class TermsAndConditions
* @extends Component
* @summary Represents TermsAndConditions class.
* @description This is a TermsAndConditions class. It extands react Component class for using the functions comes along with it.
*/
class TermsAndConditions extends Component {

    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * it shows the header title and Content Text
    */
    render() {
        return (
            <View style={screenstyles.PrivacytContainer}>
                <Toolbar
                    onClickLeftIcon={navigateBack}
                    iconName="loginpage"
                    title={this.props.title} />
                <ScrollView>
                    <View style={termsAndConditions.mainView}>
                        <View style={termsAndConditions.headerView}>
                            <Text style={termsAndConditions.headerText}>TERMS & CONDITIONS</Text>
                        </View>
                        <View style={termsAndConditions.subView}>
                            <View>
                                <Text>{"\n"}</Text>
                                <Text style={termsAndConditions.termsHeaderText}>1. Terms of use</Text>
                                <Text style={termsAndConditions.SubText}>By downloading, browsing, accessing or using this Euro Garages mobile application (“Mobile Application”), you agree to be
                                 bound by these Terms and Conditions of Use. We reserve the right to amend these terms and conditions at any time. If you disagree with any of these Terms and
                                 Conditions of Use, you must immediately discontinue your access to the Mobile Application and your use of the services offered on the
                                Mobile Application. Continued use of the Mobile Application will constitute acceptance of these Terms and Conditions of Use, as may be amended from time to time.
                                </Text>
                            </View>
                            <View>
                                <Text>{"\n"}</Text>
                                <Text style={termsAndConditions.defnitionsHeaderText}>2. Defnitions</Text>
                                <Text style={termsAndConditions.SubText}>
                                    In these Terms and Conditions of Use, the following capitalised terms shall have the following meanings, except where thecontext
                                     otherwise requires:
                                </Text>
                                <Text style={termsAndConditions.accountText}>&quot;Account&quot; means an account created by a User on the Mobile Application as
                                 part of Registration.
                                </Text>
                                <Text style={termsAndConditions.accountText}>&quot;Merchant&quot; refers to any entity whose products or Samples can be purchased
                                 and/or redeemed (as the case may be) via the Mobile Application.
                                </Text>
                                <Text style={termsAndConditions.accountText}>&quot;Privacy Policy&quot; means the privacy policy set out in Clause 14 of these Terms and Conditions of Use.</Text>
                                <Text style={termsAndConditions.accountText}>&quot;Redeem&quot; means to redeem a Merchant’s products or Samples on these Terms and Conditions of Use and</Text>
                                <Text style={termsAndConditions.accountText}>&quot;Redemption&quot; means the act of redeeming such products or Samples.</Text>
                                <Text style={termsAndConditions.accountText}>&quot;Register&quot; means to create an Account on the Mobile Application and &quot;Registration&quot;
                                means the act of creating such an Account.
                                </Text>
                                <Text style={termsAndConditions.accountText}>&quot;Services&quot; means all the services provided by Euro Garages via the Mobile Application to Users,and
                                &quot;Service&quot;means any one of them,
                                </Text>
                                <Text style={termsAndConditions.accountText}>&quot;Users&quot; means users of the Mobile Application, including you and &quot;User&quot; means any one of them.</Text>
                            </View>
                            <View>
                                <Text>{"\n"}</Text>
                                <Text style={termsAndConditions.defnitionsHeaderText}>3. General Issues about the Mobile Application and Services </Text>
                                <Text style={termsAndConditions.accountText}><Text style={termsAndConditions.generalIssuesHeaderText}>3.1 Applicability of terms and conditions:</Text>
                                    The use of any Services and/or the Mobile Application and the making of any Redemptions are subject to these Terms and Conditions of Use.
                                </Text>
                                <Text style={termsAndConditions.accountText}><Text style={termsAndConditions.generalIssuesHeaderText}>3.2 Location:</Text> The Mobile Application,
                                 the Services and any Redemptions are intended solely for use by Users who access the Mobile Application in the United Kingdom. We make no representation
                                 that the Services (or any goods or services) are available or otherwise suitable for use outside of Singapore. Notwithstanding the above, if you access the
                                  Mobile Application, use the Services or make any Redemptions from locations outside the United Kingdom, you do so on your own initiative and are responsible
                                   for the consequences and for compliance with all applicable laws.
                                </Text>
                                <Text style={termsAndConditions.accountText}><Text style={termsAndConditions.generalIssuesHeaderText}>3.3 Scope:</Text> The Mobile Application, the Services
                                 and any Redemptions are for your non-commercial, personal use only and must not be used for business purposes.
                                </Text>
                                <Text style={termsAndConditions.accountText}><Text style={termsAndConditions.generalIssuesHeaderText}>3.4 Prevention on use:</Text> We reserve the right to
                                prevent you using the Mobile Application and the Service (or any part of them) and to prevent you from making any Redemptions.
                                </Text>
                                <Text style={termsAndConditions.accountText}><Text style={termsAndConditions.generalIssuesHeaderText}>3.5 Equipment and Networks:</Text> The provision of the
                                 Services and the Mobile Application does not include the provision of a mobile telephone or handheld device or other necessary equipment to access the Mobile
                                 Application or the Services or make any Redemptions. To use the Mobile Application or Services or to make Redemptions, you will require Internet connectivity
                                 and appropriate telecommunication links. You acknowledge that the terms of agreement with your respective mobile network provider (&quot;Mobile Provider&quot;)
                                 will continue to apply when using the Mobile Application. As a result, you may be charged by the Mobile Provider for access to network connection services for
                                 the duration of the connection while accessing the Mobile Application or any such third party charges as may arise. You accept responsibility for any such charges
                                  that arise.
                                </Text>
                                <Text style={termsAndConditions.accountText}><Text style={termsAndConditions.generalIssuesHeaderText}>3.6 Permission to use Mobile Application: </Text>If you are not
                                 the bill payer for the mobile telephone or handheld device being used to access the Mobile Application, you will be assumed to have received permission from the bill
                                payer for using the Mobile Application.
                                </Text>
                                <Text style={termsAndConditions.accountText}><Text style={termsAndConditions.generalIssuesHeaderText}>3.7 License to Use Material:</Text> By submitting any text or
                                 images (including photographs) (“Material”) via the Application, you represent that you are the owner of the Material, or have proper authorization from the owner
                                 of the Material to use, reproduce and distribute it. You hereby grant us a worldwide, royalty-free, non-exclusive license to use the Material to promote any
                                products or services.
                                </Text>
                            </View>
                            <View>
                                <Text>{"\n"}</Text>
                                <Text style={termsAndConditions.defnitionsHeaderText}>4. LOCATION ALERTS AND NOTIFICATIONS</Text>
                                <Text style={termsAndConditions.accountText}><Text style={termsAndConditions.generalIssuesHeaderText}>4.1 You agree to receive pre-programmed notifications</Text>
                                    (“Location Alerts”) on the Mobile Application from Merchants if you have turned on locational services on your mobile telephone or other handheld devices
                                    (as the case may be).
                                </Text>
                            </View>
                            <View>
                                <Text style={termsAndConditions.defnitionsHeaderText}>5. YOUR OBLIGATIONS</Text>
                                <Text style={termsAndConditions.accountText}><Text style={termsAndConditions.generalIssuesHeaderText}>5.1 Merchant terms:</Text>You agree to (and shall)
                                abide by the terms and conditions of the relevant Merchant for which your Redemption relates to, as may be amended from time to time.
                                </Text>
                                <Text>{"\n"}</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(TermsAndConditions);

