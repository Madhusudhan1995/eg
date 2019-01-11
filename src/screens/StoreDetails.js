import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, FlatList, Alert, Image, Platform,Linking,ScrollView,ImageBackground } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import StationDetailTimings from '../components/StationDetailTimings';
import { Toolbar, Button } from "../components";
import { navigateBack, navigateTo } from "../helpers";
import Globals, {checkLocationPermission } from "./../constants/Globals";

import { Icon } from 'react-native-elements';
import ConstantList from "./../constants/lagunage_constant";
const { width, height } = Dimensions.get('window');
import stylesheet from "../styles/stationfinder";
import styles from './../styles';

const aspectRatio = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * aspectRatio

class StoreDetails extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  lat: 12.9428,
                  lng: 77.6966,
                  markercoords: {
                        latitude: 12.951902,
                        longitude: 77.698961
                  },
                  data: [],
                  stationdata: [
                        {
                              "name": "ESSO",
                              "address": "Marnixstraat 250, 1016 TL Amsterdam",
                              "Houres": "Today's Hours: 11 AM TO 4 PM",
                              "Distance": "0.16 km",

                        }
                  ],
                  iconName: 'search',
                  textInputValue: '',
                  brandsandvoucherdata: [{id:1},{id:2},{id:3},{id:4}]
            }
      }

      componentDidMount() {
           //this.setState({stationdata:this.props.navigation.state.params});
        //   this.getCurrentLocation();
           checkLocationPermission();
      }
      /**
       * distanceButtonTapped function is invoked when user press on distance button and this will open external maps app with respect to there platform
       */
      distanceButtonTapped = () => {
            const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
            const latLng = `${this.state.markercoords.latitude},${this.state.markercoords.longitude}`;
            const label = 'Custom Label';
            const url = Platform.select({
              ios: `${scheme}${label}@${latLng}`,
              android: `${scheme}${latLng}(${label}`});
            Linking.openURL(url);
      }

      getCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                  this.setState({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                  });
            },
            (error)=>{
                  console.log(error);
            },
            {
                  timeout : 20000,
                  maximumAge : 0,
                  enableHighAccuracy : true
            }
            );
      }

      /**
            * @function render
            * React render method for rendering the native elements
      */

      render() {
            return (
                  <View style={stylesheet.storedetailsContainer}>
                         <View style={stylesheet.storedetailsMapContainer}>
                         <View style={{zIndex:10}}>
                         <Toolbar
                                    style={[styles.noBorderToolbar,{backgroundColor:'transparent'}]}
                                    onClickLeftIcon={navigateBack}
                                    iconName="loginpage"
                                    />
                              </View>
                         <MapView style={stylesheet.mapStyles}
                                      provider={PROVIDER_GOOGLE}
                                      showsUserLocation={true}
                                      region={{
                                            latitude: this.state.lat,
                                            longitude: this.state.lng,
                                            latitudeDelta: 0.0900,
                                            longitudeDelta: 0.0500,
                                      }}>
                                      <MapView.Marker
                                                coordinate={{ latitude: this.state.markercoords.latitude, longitude: this.state.markercoords.longitude }}
                                                description={this.state.address}
                                          >
                                                <Image style={{ width: 20, height: 30, alignSelf: 'center' }} source={require('../assets/images/esso_logo.png')} />
                                          </MapView.Marker>
                                      
                        </MapView>
                         </View>
                         <TouchableOpacity style={stylesheet.mylocationbutton} onPress={this.getCurrentLocation}>
                                                <View style={{ backgroundColor: 'white',  width: 45, height: 45, borderRadius: 50, justifyContent: 'center', zIndex: 2 }}>
                                                <Icon name="my-location" size={20} color='#0f71b8' />
                                                </View>
                                                <View>
                                                </View>
                        </TouchableOpacity>
                         <View style={stylesheet.stationAddressContainer}>
                         <ScrollView showsVerticalScrollIndicator={false}>
                               <View style={stylesheet.stationAddress}>
                                    <View>
                                          <Text style={stylesheet.stationDetailstationName}>BP Gas Station #34</Text>
                                    </View>
                                    <View>     
                                          <Text style={stylesheet.stationAddressInDetail}>1234 Main St. London UK.</Text>
                                          <Text style={stylesheet.stationAddressInDetail}><Text style={{fontWeight:'bold'}}>Open . </Text>Closes at 11:00 PM</Text>
                                          <Text style={stylesheet.stationAddressInDetail}><Text style={{fontWeight:'bold'}}>Fuel Type</Text> Super Gasoline / Diesel</Text>
                                    </View>
                               </View>
                               <View style={stylesheet.stationDetailFeatureSection}> 
                                      <View style={stylesheet.SavedSection}>
                                          <Image style={{width: 24, height: 24,}}  source={require('../assets/images/Preferred.png')} />
                                          <Text style={{fontSize:10}}>Saved</Text>
                                      </View>
                                      <View style={stylesheet.walletSection}/>
                                      <View style={{justifyContent:'center',alignItems:'center'}}>
                                          <Image style={stylesheet.walletImage}  source={require('../assets/images/wallet.png')} />
                                          <Text style={{fontSize:10}}>Pay Fuel</Text>
                                      </View>
                                      <View style={{height:30,borderWidth:1,borderColor:'rgb(239,239,239)'}}/>
                                      <TouchableOpacity onPress={this.distanceButtonTapped}>
                                      <View style={{justifyContent:'center',alignItems:'center',paddingRight:30}}>
                                      <Image style={{width: 24, height: 24,}}  source={require('../assets/images/directions.png')} />
                                            <Text style={{fontSize:10}}>Get Directions</Text>
                                      </View>
                                      </TouchableOpacity>

                               </View>
                               <View style={{paddingTop:20,paddingBottom:20,paddingLeft:20,borderBottomWidth:1,borderColor:'rgb(239,239,239)'}}>
                                     <Text style={{fontSize:14}}>Station Services</Text>
                               </View>
                               <View style={stylesheet.amenitiesContainer}>
                                     <View style={stylesheet.amenity}>
                                          <Image style={{width: 26, height: 26,}} resizeMode='contain' source={require('../assets/images/restroom.png')} />
                                           <Text style={{fontSize:10}}>Restroom</Text>
                                     </View>
                                     <View style={stylesheet.amenity}>
                                     <Image style={{width: 26, height: 26,}} resizeMode='contain' source={require('../assets/images/restaurant.png')} />
                                           <Text style={{fontSize:10}}>Restaurant</Text>
                                     </View>
                                     <View style={stylesheet.amenity}>
                                     <Image style={{width: 26, height: 26,}} resizeMode='contain' source={require('../assets/images/Carwash.png')} />
                                           <Text style={{fontSize:10}}>Car Wash</Text>
                                     </View>
                                     <View style={stylesheet.amenity}>
                                     <Image style={{width: 26, height: 26,}} resizeMode='contain' source={require('../assets/images/shopping.png')} />
                                           <Text style={{fontSize:10}}>Shopping</Text>
                                     </View>
                                     <View style={stylesheet.amenity}>
                                     <Image style={{width: 26, height: 26,}} resizeMode='contain' source={require('../assets/images/twentyfourhours.png')} />
                                           <Text style={{fontSize:10}}t>24/7</Text>
                                     </View>
                               </View>
                               <View style={stylesheet.amenitiesContainer}>
                                     <View style={stylesheet.amenity}>
                                          <Image style={{width: 26, height: 26,}} resizeMode='contain' source={require('../assets/images/truckshop.png')} />
                                          <Text style={{fontSize:10}}>Truck Stop</Text>
                                     </View>
                                     <View style={stylesheet.amenity}>
                                          <Image style={{width: 26, height: 26,}} resizeMode='contain' source={require('../assets/images/coffee.png')} />
                                           <Text style={{fontSize:10}}>Coffee</Text>
                                     </View>
                                     <View style={stylesheet.amenity}>
                                          <Image style={{width: 26, height: 26,}} resizeMode='contain' source={require('../assets/images/freewifi.png')} />
                                           <Text style={{fontSize:10}}>Free Wifi</Text>
                                     </View>
                                     <View style={stylesheet.amenity}>
                                          <Image style={{width: 26, height: 26,}} resizeMode='contain' source={require('../assets/images/electriccharge.png')} />
                                           <Text style={{fontSize:10}}>Elec. Charge</Text>
                                     </View>
                                     <View style={stylesheet.amenity}>
                                          <Image style={{width: 26, height: 26,}} resizeMode='contain' source={require('../assets/images/parking.png')} />
                                           <Text style={{fontSize:10}}>Parking</Text>
                                     </View>
                                     
                               </View>
                               
                               <StationDetailTimings />
                                <View style={stylesheet.partnerShipContainer}>
                                    <Text>Partnerships</Text>
                              </View>
                              <View >
                              <FlatList
                                    horizontal
                                    data={this.state.brandsandvoucherdata}
                                    showsHorizontalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item, index }) =>
                                    <View style={{padding:10}}>
                                            <View style={stylesheet.partnerShipFlatlistContainer}>
                                                <View style={{padding:10}}> 
                                                    <Image style={{ height: 80, width: 80, }} source={require('../assets/images/home/Logo-Macd.png')} />
                                                </View >
                                                <View style={{padding:10}}>
                                                    <Image style={{ height: 80, width: 80, }} source={require('../assets/images/home/Logo-Starbucks.png')} />
                                                </View>
                                                <View style={{padding:10}}>
                                                    <Image style={{ height: 80, width: 80, }} source={require('../assets/images/home/Logo-Subway.png')} />
                                                </View>
                                                <View style={{padding:10}}>
                                                    <Image style={{ height: 80, width: 80, }} source={require('../assets/images/home/Logo-BurgerKing.png')} />
                                                </View>
                                            </View>
                                    </View>

                                    } />
                              </View>
                              <View style={stylesheet.voucherContainer}>
                                    <Text style={stylesheet.voucherText}>Station Vouchers</Text>
                              </View>
                              <View style={stylesheet.voucherFlatlistContainer}>
                                    <FlatList
                                     horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={this.state.brandsandvoucherdata}
                                          keyExtractor={(item, index) => index.toString()}
                                          ref={(ref) => { this.flatListRef = ref; }}
                                          ItemSeparatorComponent={() => <View style={stylesheet.voucherSeperator} />}
                                          renderItem={({ item, index }) =>

                                                      <View style={stylesheet.flatlistContainerInVoucher}>
                                                             <View style={{flex:0.6,paddingTop:13}}>
                                                                  <Text style={stylesheet.voucherTextinFlatlist}>STARBUCKS</Text>
                                                                  <Text style={stylesheet.voucherOfferDetail}>&euro;2 OFF.</Text>
                                                                  <Text style={stylesheet.voucherOffer}>Buy one get the second <Text style={{color:'rgb(15,113,184)'}}>&euro;2 OFF.</Text></Text>
                                                                  <Text style={stylesheet.voucherValidity}>Valid till 02 Nov 2018</Text>
                                                            </View>
                                                            <View style={stylesheet.voucherImageContainer}>
                                                                  <ImageBackground style={[stylesheet.voucherImage]}  source={require('../assets/images/StarBucks.png')} />
                                                            </View>
                                                            
                                                      </View>
                                          }
                                    />
                              </View>

                         </ScrollView>      
                         </View>
                  </View>
            )
      }
}

export default StoreDetails;