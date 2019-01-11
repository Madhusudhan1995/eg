/**
* @author machavarapuadin <machavarapuadin@photoninfotech.net>
* @version 1.0.2
* @summary Custom LunguagePickerAndroid component.
* @description A custom LunguagePickerAndroid component is being made so that it can be used everywhere..
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View,StyleSheet,Text, ScrollView,TextInput,DeviceEventEmitter
* from "react-native" for creating our view.
*/
import React, {Component} from 'react';
import {Text, View,Image,FlatList,TouchableOpacity, DeviceEventEmitter} from 'react-native';

 /**
* @import screenstyles object. This object have all the styles written for the screens.
* the styles have been defined in a file named "screenStyles" which is again importing
* an object from theme file when our theme related styles have been defined.
*/
import styles from "../../styles/LunguagePickerAndroidStyles";

var getIndexFromFlatList = -1

const lanaguageData = [
  {
    languageName : "English (EN)",
    image : require('../../assets/images/Login/Group.png'),
  },
  {
    languageName : "Dutch (DU)",
    image : require('../../assets/images/Login/Oval.png'),
  },
  {
    languageName : "French (FR)",
    image : require('../../assets/images/Login/Oval.png'),
  }
];

/**
* @class LunguagePickerAndroid
* @extends Component
* @summary Represents LunguagePickerAndroid Component.
* @description This is a LunguagePickerAndroid Component. It extands react Component class for using the functions comes along with it.
*/
 class LunguagePickerAndroid extends Component {
    /**
    * @constructor It is initializing the state with default properties.
    */
  constructor(props) {
    super(props);
    this.state = {
    modalVisible: false,
    data : lanaguageData,
    lanaguageText:"English (EN)",
    showdatePicker : false 
  }
};

/**
    * @function lungugaePikerOkButtonTapped: When user selected item from lunaguage picker and user needs to confirm with clik on Ok Button.
    * It send action using DeviceEventEmitter to login screen with selected values from lunguage picker.
    */
  lungugaePikerOkButtonTapped = () =>  {
    var lanaguageSelectedText = "";
    var postdata = [...this.state.data];
    postdata.forEach(function(element,index) {
      var targetPost = postdata[getIndexFromFlatList];
      if (getIndexFromFlatList === index){
        lanaguageSelectedText = targetPost.languageName
      }
    });
    if (lanaguageSelectedText === ""){
      lanaguageSelectedText  = this.state.lanaguageText;
    }
    this.setState({lanaguageText:lanaguageSelectedText,showdatePicker:true });
      DeviceEventEmitter.emit("okClicked", lanaguageSelectedText);
  }
   /**
    * @function lungugaePikerCancelButtonTapped: It gets called when user tapped on cancel
    * It send action using DeviceEventEmitter to login screen along with parameter lanaguageText value.
    * Hide the lunguage picker after that.
    */
  lungugaePikerCancelButtonTapped = () => {
    this.setState({showdatePicker:true });

    DeviceEventEmitter.emit("okClicked", this.state.lanaguageText);
  }
  /**
    * @function selectedItemFromFlatList:It get called When user selected item from in the flatlist.
    * It will return the item & particular index values from flatlist.
    */
   selectedItemFromFlatList(item,indexValues){
         getIndexFromFlatList = indexValues;
        var postdata = [...this.state.data];
        postdata.forEach(function(element,index) {
          var targetPost = postdata[index];
          if (indexValues === index){
            targetPost.image = require('../../assets/images/Login/Group.png')
          }else{
            targetPost.image = require('../../assets/images/Login/Oval.png')
          }
        });
        this.setState({ data: postdata });
  }
  /**
    * @function renderMessageForFlatList : It get called whe the render method called.
    * It will return the UI with radio & text conetent to flatlist.
    */
  renderMessageForFlatList ( item, index ) {   
      return(
        <TouchableOpacity onPress={() => this.selectedItemFromFlatList(item,index)}>
        <View style={styles.flatlistContainer}>
            <View style={styles.radioButtonView}>
            <Image source={item.image} style={styles.radioImageStyles} /> 
            </View>
            <View style={styles.textContentView}>
              <Text style={styles.FLTextStyles}>{item.languageName}</Text>
            </View>
          </View>
          </TouchableOpacity>
       )
  }
  /**
    * @function renderDatePickerFlatList : It get called whe the render method called.
    * It will return the FlatList.
    */
   renderDatePickerFlatList(){
     return(
      <FlatList style={{backgroundColor:'white'}}
      data={this.state.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={( {item, index} ) => this.renderMessageForFlatList(item,index)}
    />
     )
   }
    /**
    * @function renderAndroidDataPickerBottomBar : It get called whe the render method called.
    * It will return the UI for bottom headerbar with ok & cancel buttons for lunguage picker.
    */
   renderAndroidDataPickerBottomBar(){
     return(
      <View style={styles.bottomHeaderView}>
     
      <TouchableOpacity onPress={this.lungugaePikerCancelButtonTapped}>
      <Text style={styles.cancelButtonStyles}>CANCEL</Text>
      </TouchableOpacity>
     
      <TouchableOpacity onPress={this.lungugaePikerOkButtonTapped}>
      <Text style={styles.okButtonStyles}>OK</Text>
      </TouchableOpacity>
    </View>
     )
   }
   /**
    * @function renderDatePickerView : It get called whe the render method called.
    * It will return the UI and transperant background view with lunguage picker.
    */
   renderDatePickerView(){
    if(!this.state.showdatePicker){
     return(
    <View style={styles.tranperantView}>
    <View style={styles.pickerViewStyles}>
    <Text style={styles.headerView}>Select Languages</Text>
      {this.renderDatePickerFlatList()}
      {this.renderAndroidDataPickerBottomBar()}
     </View>
     </View>
     )
    }
   }
    /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    * In render() we are calling "renderDatePickerView" to lunguage picker for android.
    */
  render() {
    return (
      <View style={styles.appContainer}>
             {this.renderDatePickerView()}
      </View>
    );
  }
}

export default LunguagePickerAndroid;

