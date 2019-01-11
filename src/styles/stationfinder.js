import {
    StyleSheet,
    Platform,
    Dimensions
} from 'react-native';

const stylesheet = StyleSheet.create({
   stationfindercontainer : { 
       flex: 1, 
       backgroundColor: '#fff' 
    },
   mylocationbutton : {
        alignSelf: 'flex-end',
         zIndex: 2, 
         marginRight: 13, 
         marginBottom: 25 
        },
   listView : { 
       width: Dimensions.get('window').width,
       backgroundColor: '#fff',
       borderTopStartRadius: 25,
       borderTopEndRadius: 25,
       paddingTop: 10  
    },
   searchbarFlex :{ 
       justifyContent: 'center', 
       alignItems: 'center',
       marginTop:10
    },
   greybar : { 
       width: 100, 
       height: 5, 
       backgroundColor: 'rgb(244,244,244)', 
       borderRadius: 15 
    },
   searchbarcontainer :{ 
       flexDirection: 'row', 
       marginLeft: 15, 
       marginRight: 15, 
       backgroundColor: '#FFFFFF',
       borderRadius:10 ,
       marginTop: 10,
       alignItems:'center',
       justifyContent:'center'
    },
   backarrowcontainer : {
       flex:0.1,
       backgroundColor:'#FFFFFF'
    },
   textInputSearch : {
       height: 40,
       borderRadius:8,
       backgroundColor:'#F4F4F4',
       padding:10
    },
   filtering:{
       flex:0.1,
       justifyContent:"center",
       alignItems:"center"
    },
    flatlistContainerNearByStations : {  
       borderRadius: 9,
       borderWidth: 2,
       borderColor: 'rgba(0, 0, 0, 0.1)',
       backgroundColor: "rgb(255, 255, 255)", 
       elevation   : 6, 
       marginRight:15,
       marginLeft:15,
       marginTop:10,
       
    //    paddingRight:10,
    //    paddingLeft:10,
       marginBottom:15,
       width: Dimensions.get('window').width-80,
       height: Dimensions.get('window').height/3.5
    },
    flatlistContainerSearchResults : {  
        borderRadius: 9,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: "rgb(255, 255, 255)", 
        elevation   : 6, 
        marginRight:15,
        marginLeft:15,
        marginTop:10,
     //    paddingRight:10,
     //    paddingLeft:10,
        marginBottom:10,
      //  width: Dimensions.get('window').width-80,
        width: Dimensions.get('window').width-40,
        height: Dimensions.get('window').height/4
     },
   flatListLogo :{ 
       flex: 1,
       backgroundColor: 'rgb(255, 255, 255)',
       marginTop:12
    },
   stationName :{ 
       alignItems: 'flex-start', 
       marginLeft: 5 
    },
   listAddress : { 
       marginLeft: 42,
       marginBottom: 5, 
       color: 'rgb(123, 122, 118)', 
       fontSize: 12 ,
       fontWeight:"bold"
    },
   listTiming :{ 
        flexDirection: 'row', 
        marginLeft: 42, },
        time:{ marginBottom: 5, fontSize: 12,fontWeight:"bold" },
        close : {  color: 'rgb(123, 122, 118)', fontSize: 12 },
        fuelTypeContainer :{ flexDirection: 'row', marginLeft: 42, },
        fuelType : { marginBottom: 5, fontSize: 12,fontWeight:"bold" },
        fuelTypes:{  color: 'rgb(123, 122, 118)', fontSize: 12 },
        storedetailsContainer : {flex:1},
        storedetailsMapContainer : {flex:3},
   mapStyles : {
       flex:2, 
       width: Dimensions.get('window').width, 
       height: Dimensions.get('window').height/2, 
       left: 0, 
       right: 0, 
       top: 0, 
       bottom: 0, 
       position: 'absolute' 
    },
   stationAddressContainer:{
       flex:4,
       backgroundColor:'#ffffff',
       borderRadius:9
    },
   stationAddress :{
       paddingLeft:20,
       paddingTop:20,
       paddingBottom:10 
    },
   stationDetailstationName :{
       fontSize:28,
       fontWeight:'bold',
       color:'black',
       letterSpacing:1
    },
   stationAddressInDetail :{
       fontSize:14,
       color:'rgb(128,128,128)'
    },
   stationDetailFeatureSection:{
       justifyContent:'space-around',
       flexDirection:'row',
       borderTopWidth:1,borderColor:'rgb(239,239,239)',
       borderBottomWidth:1,
       alignItems:'center',
       paddingTop:15,
       paddingBottom:15
    },
   SavedSection:{
       justifyContent:'center',
       alignItems:'center',
       paddingLeft:30
    },
   walletSection : {
       height:30,
       borderWidth:1,
       borderColor:'rgb(239,239,239)'
    },
   walletImage:{width: 30, height: 24,},
   amenitiesContainer :{flexDirection:'row',
                        justifyContent:'space-around',
                        flex:4,
                        height:60,
                        paddingLeft:10,
                        paddingTop:10},
   amenity:{
            alignItems:'center',
            justifyContent:'center',
            flex:1
        },
   partnerShipContainer :{
       borderBottomWidth:1,
       borderColor:'rgb(239,239,239)',
       padding:20
    },
   partnerShipFlatlistContainer:{
       flex:1,
       flexDirection: 'row',
        justifyContent:'center', 
        alignItems:'center'
    },
   voucherContainer :{
       padding:20,
       borderTopWidth:1,
       borderBottomWidth:1,
       borderColor:'rgb(239,239,239)'
    },
   voucherText:{
       fontSize:18,
       color:'black'},
   voucherFlatlistContainer:{
       paddingBottom:20,
       paddingTop:20,
       backgroundColor:'#FFFFFF',
       elevation:9
    },
   flatlistContainerInVoucher : {  
       flexDirection: 'row', 
        borderRadius: 9,
        borderWidth: 2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: "rgb(255, 255, 255)", 
        elevation:9,
        marginLeft:15,
        marginRight:15,
        paddingLeft:10,
        height:180,
        width: Dimensions.get('window').width-70,
        flex:1 
     },
   voucherSeperator:{ marginLeft: 0, marginRight: 0, height: 0.5, backgroundColor: '#ffffff' },
   voucherImage:{ 
       height:'100%',
       width:'100%',
       borderTopRightRadius:9,
       borderBottomRightRadius:9,
       overflow:'hidden'
     },
   voucherImageContainer :{
       flex:0.4,
       borderRadius:9,
    },
   voucherTextinFlatlist : {fontSize:13},
   voucherOfferDetail:{fontSize:22,color:'black',fontWeight:'bold',paddingTop:10},
   voucherOffer:{fontSize:16},
   voucherValidity:{fontSize:10,marginTop:35},
   modalContainer : {flex: 1,flexDirection: 'column',justifyContent: 'center'},
   modalSearchbarContainer:{flexDirection:'row',backgroundColor: '#FFFFFF'},
   modalPrefferedStationContainer : {padding:15,},
   modalPrefferedStaionFlatlist : {backgroundColor:'#FFFFFF',flexDirection:'row',paddingLeft:50,padding:20},
   modalFlatlistItemseperator :{ marginLeft: 20, marginRight: 20, height: 0.5, backgroundColor: 'gray' },


});

export default stylesheet;