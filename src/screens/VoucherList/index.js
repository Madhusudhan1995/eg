import {connect} from "react-redux";
import React, {Component} from "react";
import {View, Text, Image, Dimensions, TouchableOpacity} from "react-native";

import {InputText, Button, LinkButton, Toolbar, Checkbox, GridListView} from "../../components";
import {navigateBack, navigateTo, dpToPx} from "../../helpers";
import {getVoucherListData} from "../../actions/voucherListActions";

import styles from "./styles";

const defaultProps = {
    token: "sfgsdg"
}

class VouchersList extends Component {


    constructor(props) {
        super(props);
         this.state = {
            pageNumber: 1,
          };
      }

    componentDidMount() {
        this.props.handleVoucherListDataRequest(this.props.token);
     }

    render() {
        const {voucherListData} = this.props;
        return(
          <View style={styles.container}>
              <Toolbar
                  style={{elevation: 0}}
                  onClickLeftIcon={navigateBack}
                  iconName="loginpage"
                  title="Exclusive Vouchers For New..."
              />
            <View style={styles.tabNavigatorStyle}>
                <View style={styles.tabButtonContainer1}>
                    <TouchableOpacity>
                        <View style={[styles.tabButtonContent1,  styles.tabbuttonBorder1]}>
                            <Text style={styles.tabButtonText1}>All</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabButtonContainer2}>
                    <TouchableOpacity>
                        <View style={styles.tabButtonContent2}>
                            <Image source={require("../../assets/images/Partner.png")} style={styles.tabButtonImage2} resizeMode="contain"/>
                        </View>
                        <View style={styles.vouchersNumber}>
                            <Text style={styles.vouchersNumberText}>21</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabButtonContainer3}>
                    <TouchableOpacity>
                        <View style={styles.tabButtonContent3}>
                            <Image source={require("../../assets/images/Partner2.png")} style={styles.tabButtonImage3} resizeMode="contain"/>
                        </View>
                        <View style={styles.vouchersNumber}>
                            <Text style={styles.vouchersNumberText}>17</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabButtonContainer4}>
                    <TouchableOpacity>
                        <View style={styles.tabButtonContent4}>
                            <Image source={require("../../assets/images/Partner4.png")} style={styles.tabButtonImage4} resizeMode="contain"/>
                        </View>
                        <View style={styles.vouchersNumber}>
                            <Text style={styles.vouchersNumberText}>14</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabButtonContainer5}>
                    <TouchableOpacity>
                        <View style={styles.tabButtonContent5}>
                            <Image source={require("../../assets/images/Partner3.png")} style={styles.tabButtonImage5} resizeMode="contain"/>
                        </View>
                        <View style={styles.vouchersNumber}>
                            <Text style={styles.vouchersNumberText}>8</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tabButtonContainer6}>
                    <TouchableOpacity>
                        <View style={styles.tabButtonContent6}>
                            <Image source={require("../../assets/images/Partner.png")} style={styles.tabButtonImage6} resizeMode="contain"/>
                        </View>
                        <View style={styles.vouchersNumber}>
                            <Text style={styles.vouchersNumberText}>21</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <GridListView voucherList={voucherListData}/>
          </View>
        );
    }
}

VouchersList.defaultProps = defaultProps;

const mapStateToProps = state => ({
    token: state.auth.token,
    voucherListData: state.voucherListReduc.voucherListData
});

const mapDispatchToProps = dispatch => ({
    handleVoucherListDataRequest: (token) => dispatch(getVoucherListData(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(VouchersList);
