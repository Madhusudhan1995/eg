import {
    StyleSheet,
} from 'react-native';

const memberBenStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      marginTop: 40,
      backgroundColor: "#FFFFFF"
    },
    viewPagerItemCloseIconConatinerStyle: {
      alignSelf: 'flex-end',
      position: 'absolute',
      paddingRight : 16,
      paddingTop:-5
  },
  viewPagerCloseIcon: {
    width: 32,
    height: 32,
    resizeMode : 'contain',
    justifyContent: 'flex-end'
  },
    header: {
      fontSize: 20,
      fontWeight: "600",
      color: "#000"
    },
    para: {
      flex:1,
      marginTop: 30,
      paddingLeft:20
    },
    reward: {
      fontSize: 17,
      fontWeight: "600",
      color: "#000",
      marginTop: 20,
      paddingLeft:2
    },
    containerTwo: {
      flex: 1,
      backgroundColor: "#fafafa",
      marginTop: 10,
      paddingBottom:20
    },
    medalImage: {
      height: 50,
      width: 50
    },
    share: {
      flexDirection: "row",
     
    },
    Image: {
      height: 30,
      width: 25,
      marginLeft: 10
    }
  });

  export default memberBenStyles;
  
  export const localStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
       marginTop:50,
    },
    mainContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      marginTop: 40,
    },

  memberDetailCloseIconConatinerStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    paddingRight : 16,
    paddingTop:-5,
    },
    memberDetailCloseIcon: {
      width: 32,
      height: 32,
      resizeMode : 'contain',
      justifyContent: 'flex-end'
    },
    memberSeperator: {
      marginLeft: 0,
      marginRight: 0,
      height: 10
  },
    header:{
        fontSize:20,
        fontWeight:'600',
        color:'#000',
        width:190
    },
    headerTwo:{
        fontWeight:'600',
        color:'#000',   
    },
    button:{
        marginTop:10,     
        borderRadius:15,
        paddingVertical:8,
        paddingHorizontal:15,
    },
    share: {
        flexDirection: "row"
      },
})