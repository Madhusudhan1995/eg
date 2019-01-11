import {connect} from "react-redux";
import React, {Component} from "react";
import {ScrollView, View, Text, Image, Button, Dimensions, LayoutAnimation, UIManager, TouchableOpacity} from "react-native";

import LinkButton from "../LinkButton";
import {dpToPx} from "../../helpers";

import {styles, renderStyles} from "./styles";

const defaultProps = {
    voucherList: []
}

export default class GridListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewStyle: "gridView",
            imageHeight: 120
        }
    }

    onListView = () => {
        this.setState({
            viewStyle: "listView"
        }, () => {
            this._animate();
        });
    }

    onGridView = () => {
      this.setState({
          viewStyle: "gridView"
      }, () => {
          this._animate();
      });
    }

    measureView = event => {
        this.setState({
            imageHeight: event.nativeEvent.layout.height
        });
    }

    _animate = () => {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    arrayChunking = (num, arr) => {
        const newArr = [];
        let count = 0;
        arr.forEach(el => {
            if(newArr.length > 0 && count % num !== 0) {
                newArr[newArr.length - 1].push(el);
            } else {
                newArr.push([el]);
            }
            count++;
        });
        return newArr;
    }

    renderListContainer = () => {
        const {viewStyle} = this.state;
        return this.arrayChunking(2, this.props.voucherList).map((item, index) => {
            return(<View key={index} style={renderStyles(viewStyle).gridContainer}>
                {this.renderListItem(item)}
            </View>);
        });
    }

    renderListItem = (items) => {
        const imageContWidth = Dimensions.get('window').width/2 - dpToPx(7);
        const {viewStyle, imageHeight} = this.state;
        return items.map((item, index) => {
            return(
                <TouchableOpacity key={index} style={renderStyles(viewStyle).gridItemContainer} onPress={() => this.onCardClick(this.state.outletImg)}>
            <View style={[{transform: [{translateX: viewStyle === "gridView" ? imageContWidth : 0}]}, renderStyles(viewStyle).gridImageContainer]}>
                <Image source={{uri : item.image}} style={renderStyles(viewStyle, imageHeight).gridImageStyle} resizeMode="cover"/>
            </View>
            <View onLayout={(event) => this.measureView(event)}  style={[{transform: [{translateX: viewStyle === "gridView" ? -imageContWidth : 0}]}, renderStyles(viewStyle).gridItemContent]}>
                <Text style={styles.vouchersStoreName}>{item.vendor}</Text>
                <Text style={styles.vouchersOfferPrice}>{item.code}</Text>
                <Text style={styles.vouchersOfferText}>{item.desc}</Text>
                <Text style={styles.vouchersValidText}>{this.renderDateFromSecs(item.validityends)}</Text>
            </View>
        </TouchableOpacity>
        )
        })
    }

    renderDateFromSecs = (millisecs) => {
        if(millisecs === 0 || millisecs === null) {
            return "";
        }
        var date = new Date(millisecs);
        var textDate = date.toString("DD MMM YYYY");
        return "Valid till " + date.getDay() + " " + this.renderMonthString(date.getMonth()) + " " + date.getFullYear();
    }

    renderMonthString = (monthNum) => {
        switch(monthNum) {
            case 0:
            return "JAN";
            case 1:
            return "FEB";
            case 2:
            return "MAR";
            case 3:
            return "APR";
            case 4:
            return "MAY";
            case 5:
            return "JUN";
            case 6:
            return "JUL";
            case 7:
            return "AUG";
            case 8:
            return "SEP";
            case 9:
            return "OCT";
            case 10:
            return "NOV";
            case 11:
            return "DEC";
        }
    }

    render() {
        const {viewStyle} = this.state;
        return(
          <View style={renderStyles(viewStyle).container}>
              <View style={renderStyles(viewStyle).buttonContainer}>
                  <LinkButton
                      title="List View"
                      onPress={this.onGridView}
                      color={viewStyle === "listView" ? "#999999" : "#000000"}
                      containerStyle={renderStyles(viewStyle).listViewButton}
                      iconPath={require("../../assets/images/listViewIcon.png")}
                      iconStyle={{width: dpToPx(7), height: "auto", marginRight: dpToPx(4)}} />
                  <LinkButton
                      title="Grid View"
                      color={viewStyle === "gridView" ? "#999999" : "#000000"}
                      onPress={this.onListView}
                      containerStyle={renderStyles(viewStyle).gridViewButton}
                      iconPath={require("../../assets/images/gridViewIcon.png")}
                      iconStyle={{width: dpToPx(7), height: "auto", marginRight: dpToPx(4)}} />
              </View>
              <ScrollView>
                  <View style={renderStyles(viewStyle).gridContContainer}>
                      {this.props.voucherList.length > 0 && this.renderListContainer()}
                  </View>
              </ScrollView>
          </View>
        );
    }
}

GridListView.defaultProps = defaultProps;

