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
import { Text, View, TouchableOpacity, UIManager, LayoutAnimation,FlatList } from 'react-native';
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
class StationDetailTimings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Open . Closes 11:00PM',
            timings :[{
                day : 'Monday',
                time : '6AM - 11PM'
            },
            {
                day : 'Tuesday',
                time : '6AM - 11PM'
            },
            {
                day : 'Wednesday',
                time : '6AM - 11PM'
            },
            {
                day : 'Thursday',
                time : '6AM - 11PM'
            },
            {
                day : 'Friday',
                time : '6AM - 11PM'
            },
            {
                day : 'Saturday',
                time : '6AM - 11PM'
            },
            {
                day : 'Sunday',
                time : '6AM - 11PM'
            },],

            expanded: false
        };
        this._animate = this._animate.bind(this)
    }

    /**
    * @function _animate
    * animates the list when it open/close.
    */
    _animate()  {
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
            <View style={{borderBottomWidth:1,borderColor:'rgb(239,239,239)'}}>
                <View>
                    <TouchableOpacity onPress={this.toggle.bind(this)}>
                        <View style={{flex:1,flexDirection:'row',alignItems:'center',borderTopWidth:1,borderBottomWidth:1,borderColor:'rgb(239,239,239)'}}>
                            <View style={{padding:20}}>
                                <Text style={componentstyles.faqListItemSubTitleTextStyle} >{this.state.title}</Text>
                            </View>
                            <View>
                                <Icon
                                    name={this.state.expanded ? "chevron-up" : "chevron-down"}
                                    type="material-community"
                                    color='#000000'
                                    iconStyle={{ marginLeft:10 }} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    {this.state.expanded &&
                        <FlatList
                        data={ this.state.timings }
                        renderItem={({item}) =>
                            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'#F4F4F4',paddingLeft:20,paddingRight:40,paddingTop:5,paddingBottom:5,}}>
                                <Text>{item.day}</Text>
                                <Text>{item.time}</Text>
                            </View>      
                        }
                        keyExtractor={(item) => item.day} />
                    }
                </View>
            </View>
        );
    }
}

export default StationDetailTimings;
