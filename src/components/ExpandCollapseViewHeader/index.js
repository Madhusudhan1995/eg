/**
* @author Aman Shekhar <aman.s@photoninfotech.net>
* @version 1.0.2
* @summary Custom CardItem component.
* @description A custom buttopn component is being made so that it can be used everywhere..
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity creating our view.
* @import Icon from "react-native-vector-icons/FontAwesome" to use font icons in this screen whereever required.
*/

import React, { Component } from 'react';
import {Text,View,TouchableOpacity, UIManager, LayoutAnimation, FlatList} from 'react-native';
import { Icon } from "react-native-elements";
import {ExpandCollapseView} from "../../components";

/**
* @import componentstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "componentStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import componentstyles from "../../styles/componentStyles";

/**
* Represents ExpandCollapseViewHeader.
* @class ExpandCollapseViewHeader
* @extends Component
*/
class ExpandCollapseViewHeader extends Component {

    constructor(props){
        super(props);
        this.state = {
            title       : props.title,
            faqData     : props.faqData,
            expanded    : false
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
    toggle(){
        this.setState({
            expanded : !this.state.expanded
        }, () => {
          this._animate();
        });
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */
    render(){
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={this.toggle.bind(this)}>
                        <View style={componentstyles.settingListContainer}>
                            <View style={componentstyles.settingTitleView}>
                                <Text style={componentstyles.faqListItemTitleTextStyle} >{this.state.title}</Text>
                            </View>
                            <View style={componentstyles.rightIconView}>
                            <Icon
                                name= { this.state.expanded ? "chevron-up" : "chevron-down"}
                                type="material-community"
                                color='#000000'
                                iconStyle={{marginRight: 7}} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    </View>
                    <View>
                    { this.state.expanded &&
                      <FlatList
                        data={ this.state.faqData }
                        renderItem={({item}) =>
                            <ExpandCollapseView
                                title = {item.subQues}
                                subTitle = {item.subTitle}
                                subDesc = {item.subDesc} />        
                        }
                        keyExtractor={(item) => item.faqData} />
                    }
                </View>
            </View>
        );
    }
}

export default ExpandCollapseViewHeader;
