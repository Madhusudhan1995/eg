/**
* @author Sharangouda Konasirasagi<Sharanagouda.k@photoninfotech.net>
* @version 1.0.3
* @summary Faq screen for the application.
* @description The screen shows the Faq 
* first login to application. using credentials email and password,
* this screen will be in UserSetting screen when you tap on Faq this screen opens  
* The screen uses react npm modules and also few custom components.
*/


/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, ScrollView, FlatList from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
*/
import {connect} from "react-redux";
import React, {Component} from "react";
import {View, ScrollView, FlatList} from "react-native";

/**
* @import Toolbar, ExpandCollapseViewHeader  for building our screen.
* @description  Toolbar is to Display on top screen and shows Title
* ExpandCollapseViewHeader is to expand the view when user taps on plus icon
* @import {navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateBack(): It simply naviagates the user to the back screen.
*/
import {Toolbar, ExpandCollapseView} from "../components";
import {navigateBack} from "../helpers";
import {getFaqData} from "../actions/faqactions";

/**
* @import Converter component and it is used for Converting from Km to miles
* the Converter have been defined in a file named "Converter" which is again importing
*/
import screenstyles from "../styles";

/**
* @class Faq
* @extends Component
* @summary Represents Faq class.
* @description This is a Faq class. It extands react Component class for using the functions comes along with it.
*/
class Faq extends Component {
      
    /**
    * @constructor It is initializing the state with default properties.
    * pageNumber: this is for showing the user questions screen number.
    * data object for passing the data to Flatlist to display the frequently asked questions
    */
  constructor(props) {
    super(props);
     this.state = {
        pageNumber: 1,
      };
      this.fetchList = this.fetchList.bind(this);
      this.onEndReached = this.onEndReached.bind(this);
  }

     /**
    * @function fetchList: Its called by "onEndReached" to fetch the quetions from Db .
    * this sets the pageNumber and access the data from database
    */
  // eslint-disable-next-line react/sort-comp
  fetchList() {
      this.setState({data: this.state.data, pageNumber: this.state.pageNumber + 1});

  }

    /**
    * @function onEndReached: Its called when FlatList loaded
    * to check whether the list item reached to end if it reached then it will reload the new quetions
    */
  onEndReached() {
    this.fetchList();
  }

  componentDidMount() {
     this.props.handleFaqDataRequest(this.props.token);
  }
  /**
    * @function render: Its one of the main functions of react component. It renders the JSX on the screen
    */
      render() {
        const {faqData} = this.props;
        return (
            <View style={[screenstyles.faqConatiner]}>
                <Toolbar
                    style={[screenstyles.faqToolbarStyle]}
                    onClickLeftIcon={navigateBack}
                    iconName="back-arrow"
                    title="Frequently Asked Questions"
                    rightButtonName="" />
                <ScrollView>
                    <FlatList
                        style = {screenstyles.faqListStyle}
                        data={faqData}
                        onEndReached={this.onEndReached}
                        onEndReachedThreshold={0.5}
                        renderItem={({item}) => (
                            <ExpandCollapseView
                                key ={item.sequence}
                                title={item.question}
                                faqDesc={item.answer} />)
                    }
                        keyExtractor={item => item.id}
                  />
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
const mapStateToProps = state => ({
    token: state.auth.token,
    faqData: state.faqReduc.faqData
});

/**
* Converting functions to props for the Login component
* @function mapDispatchToProps: It takes dispatch as params and further pass it to the methods
* with given payloads.
* The methods are converted into props and passed to the Login Component for use
* @params {function} dispatch: It dispatches action to the reducer
* @returns {object} props: Its converted props and have methods.
*/
const mapDispatchToProps = dispatch => ({
    handleFaqDataRequest: (token) => dispatch(getFaqData(token))
});

/**
* @function connect: It takes "mapStateToProps" and "mapDispatchToProps" which converts state and methods
* as props for the component.
*/
export default connect(mapStateToProps, mapDispatchToProps)(Faq);
