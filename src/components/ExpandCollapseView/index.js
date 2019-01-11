/**
* @author Aman Shekhar <aman.s@photoninfotech.net>
* @version 1.0.2
* @summary Custom CollapseView component.
* @description A custom CollapseView component is being made. This component will be getting used wherever this is required instead of creating a new one again and again.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity creating our view.
* @import Icon from "react-native-elements"" to use font icons in this screen whereever required.
*/

import React, { Component } from 'react';
import { Text, View, TouchableOpacity, UIManager, LayoutAnimation } from 'react-native';
import { Icon } from "react-native-elements";

/**
* @import componentstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import componentstyles from "../../styles/componentStyles";

/**
* Represents ExpandCollapseView.
* @class ExpandCollapseView
* @extends Component
*/
class ExpandCollapseView extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            key: props.key,
            title: props.title,
            faqDesc: props.faqDesc,
            expanded: false
        };
    }

    /**
    * @function _animate
    * animates the list when it open/close.
    */
    _animate = () => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    /**
    * @function toggle
    * this method used to open/close view.
    */
    toggle() {
        this.setState({
            expanded: !this.state.expanded
        }, () => {
            this._animate();
        });
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */
    render() {
        return (
            <View>
                <View>
                <TouchableOpacity onPress={this.toggle.bind(this)}>
                        <View style={[componentstyles.settingListContainer, {borderBottomWidth: this.state.expanded ? 1 :0,  borderBottomColor: 'rgb(239,239,239)', }]}>
                            <View style={componentstyles.settingTitleView}>
                                <Text style={componentstyles.faqListItemTitleTextStyle} >{this.state.title}</Text>
                            </View>
                            <View style={componentstyles.rightIconView}>
                            <Icon
                                name= { this.state.expanded ? "chevron-up" : "chevron-down"}
                                type="material-community"
                                color='rgb(128, 128, 128)'
                                iconStyle={{marginRight: 7}} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {this.state.expanded &&
                        <View style={[componentstyles.faqDescContainer]}>
                            <Text style={componentstyles.faqListItemDescTextStyle}>{this.state.faqDesc}</Text>
                        </View>
                    }
                </View>
            </View>
        );
    }
}

export default ExpandCollapseView;
