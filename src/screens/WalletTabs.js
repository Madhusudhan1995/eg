/**
* @author Vineet Mishra <vineet_m@photoninfotech.net>
* @version 1.0.0
* @summary WalletTabs screen for the application in wallet.
* @description The screen shows the WalletTabs in wallet screen 
* first login to application. using credentials email and password
* The screen uses react npm modules and also few custom modules.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import Router, Scene from "react-native-router-flux" for navigation a screens
*/
import React, { Component } from "react";
import { Router, Scene } from "react-native-router-flux";

/**
* @import LoyaltyCards, creditAndDebitCardList, GoFuelCard from custom module 
*/
import LoyaltyCards from "./LoyaltyCards";
import creditAndDebitCardList from "./creditAndDebitCardList";
import GoFuelCard from "./GoFuelCard";

/**
* @class WalletTabs
* @extends Component
* @summary Represents WalletTabs class.
* @description This is a WalletTabs class. It extands react Component class for using the functions comes along with it.
*/
class WalletTabs extends Component {

    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * it is used in wallet screen
    */
    render() {
        return (
            <Router>
                <Scene tabs key="wallet" hideNavBar={true} swipeEnabled={true} tabBarPosition="top">
                    <Scene key="goFuelCard" hideNavBar={true} component={GoFuelCard} title="Go Fuel Card" />
                    <Scene key="creditDebitCards" hideNavBar={true} component={creditAndDebitCardList} title="Credit & Debit" />
                    <Scene key="loyaltyCards" hideNavBar={true} component={LoyaltyCards} title="Loyalty Cards" />
                </Scene>
            </Router>
        );
    }
}

export default WalletTabs;
