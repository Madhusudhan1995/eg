/**
* @author Machavarapu Adinarayana <machavarapuadin@photoninfotech.net>
* @version 1.0.2
* @summary Adding PaymentSuccessfullStyles for the application.
* @description The screen will provide styles for payment successfully screen.
*/
import { StyleSheet, Platform } from 'react-native';

//Colors fot both Android & ios
const WhiteColorrgb = "rgb(255, 255, 255)"
const lightGrayColorrgb = "rgb(132, 132, 132)"
const bgLightGrayColorrgb = "rgb(250, 250, 250)"
const darkGrayColorrgb = "rgb(159, 159, 159)"
const darkGrayTextColor = "rgb(121, 121, 121)"
const lightGrayBorderColor = "rgb(239, 239, 239)"
const blackColorrgb = "rgb(51,51,51)"

const styles = StyleSheet.create({
      appContainer: {
            flex: 1
      },
      tranperantView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(52, 52, 52, 0.2)'
      },
      pickerViewStyles: {
            width: 280,
            height: 271,
            backgroundColor: 'white',
            zIndex: 10
      },
      headerView: {
            marginTop: 20,
            marginBottom: 24,
            marginLeft: 25,
            fontSize: 20,
            fontFamily: 'Roboto-Medium',
            fontWeight: 'bold'
      },
      bottomHeaderView: {
            height: 50,
            borderTopColor: 'gray',
            borderTopWidth: 1,
            flex: 1,
            flexDirection: 'row',
            paddingRight: 16,
            alignItems: 'center',
            justifyContent: 'flex-end'
      },
      cancelButtonStyles: {
            marginRight: 20,
            color: '#666666',
            fontFamily: 'Roboto-Medium',
            fontSize: 14
      },
      okButtonStyles: {
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
            color: '#0f71b8'
      },
      flatlistContainer :{
            flex:1,
            flexDirection:'row',
            paddingTop:10,
            paddingBottom:10
      },
      radioButtonView :{
            flex:1,
            marginLeft:25,
            justifyContent:'center'
      },
      radioImageStyles :{
            width:20,
            height:20,
            alignSelf:'flex-start'
      },
      textContentView:{
            flex:4,
            marginLeft:0,
            justifyContent:'center'
      },
      FLTextStyles :{
            alignSelf:'flex-start',
            fontSize:16,
            fontFamily:'Roboto-Regular'
      }

});

export default styles;