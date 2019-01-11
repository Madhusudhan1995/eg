/**
* @author Aman Shekhar <aman.s@photoninfotech.net>
* @version 1.0.2
* @summary Custom Loader component.
* @description A custom buttopn component is being made so that it can be used everywhere..
*/


import {ActivityIndicator, Modal, Text, StatusBar, View} from "react-native";
import {connect} from "react-redux";
import React, {Component} from "react";

/**
* @import componentstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import componentstyles from "../../styles/componentStyles";

class Loader extends Component<{}> {

    render() {
        if(this.props.loader) {
            return(
                <View style={componentstyles.modalContainer}>
                    <View style={componentstyles.modalDesign}>
                        <View style={componentstyles.modalCont}>
                            <ActivityIndicator size="large" />
                        </View>
                    </View>
                </View>
            );
        }
        return(
            <View></View>
        );
    }
}

const mapStateToProps = state => ({
    loader: state.utility.loader
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
