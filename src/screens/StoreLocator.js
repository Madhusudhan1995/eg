/**
* @author Arun Kukkudapu <kukkudapu.arun@photoninfotech.net>
* @version 1.0.2
* @summary station finder for the application.
* @description In this screen user can search for the stations and by default he can see user's near by stations.
* user can search for stations based on state,zip code & city.
* user will  be able to set filters while searching for stations.
* user would be able to view the stations in a map as well as in flatlist.
* user, would be able to view the details of the stations on clicking a station from the list.
* on tap of geo location icon,auto-detect user’s current location and will be able to see results based on the current location
* user would be able to see station icons in the map.
* If user has not selected any range from the filter, system to search for the stations within 15 KMS radius of the device location.
* If no results found, system to display an message “No Results found. Please search with different search term” in a pop up.
* On tap of the any station, user will be navigated to station details screen.
* User would be able to swipe left or right to view next or previous station carousel.
*/

/**
* @import React compoment from "react" for creating custom react component and to use lifecycle
* hooks come along with react.
* @import View, Text, TouchableOpacity, Image, Alert, ScrollView, Platform, KeyboardAvoidingView,
* SafeAreaView from "react-native" for creating our view.
* @import connect from "react-redux" for connecting react compoenent with redux which will convert
* our component as container component.
* @import compose from "redux" for removing the complexicity of higher order components used in the screen.
* @import Icon from "react-native-vector-icons/FontAwesome" to use font icons in this screen whereever required.
* @import SearchBar from "react-native-elements" to see the search bar with basic required styles.
* import MapView from 'react-native-maps'; to see the map on screen.
*/
import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, FlatList, Image, KeyboardAvoidingView, Platform,TextInput,Picker,ScrollView,LayoutAnimation, UIManager,ImageBackground,Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Icon } from 'react-native-elements';
import {connect} from "react-redux";

/**
* @import Button, Toolbar for building our screen.
* @description Button: renders custom button in the screen.
* @import {navigateTo, redirectTo, navigateBack} from "helpers" file. "helpers" file has
* reusable functions written in it.
* @description navigateTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* redirectTo(scene): It takes screen name as a parameter and navigates to the respective screen.
* It deletes the back history
* and no animation happens while screen transition.
* navigateBack(): It simply naviagates the user to the back screen.
*/
import {handleGetStations} from "../actions/stationFinderActions";
import { Toolbar } from "../components";
import { navigateBack, navigateTo } from "../helpers";
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import ConstantList from "./../constants/lagunage_constant";
import styles from './../styles'
import Converter from './Converter';

import stylesheet from "../styles/stationfinder";

const { width, height } = Dimensions.get('window');

const aspectRatio = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * aspectRatio;

/**
* @class StoreLocator
* @extends Component
* @summary Represents station finder.
* @description This is a StoreLocator class. It extands react Component class for using the functions comes along with it.
*/
class StoreLocator extends Component {
       /**
    * @constructor It is initializing the state with default properties.
    * searchStation: Boolean property for hiding and showing password value.
    * prefferedStations: Array of preffered stations
    * distance: Number property for selecting the range default is 20.
    * distanceType: String property for allowing user to  switch between miles and km to see the distance.
    *
    */
  
      constructor(props) {
            super(props);
            this.searchbar = React.createRef();
            this.state = {
                  address : 'Neitherland',
                  searchStation:false,
                  prefferedStations :  ConstantList.storeLocator.prefferedStations,
                  distance : 20,
                  modalVisible: false,
                  distanceType: 'km',
                  lat: 12.9317,
                  lng: 77.6914,
                  data: [],
                  markercoords: {
                        latitude: 12.9428,
                        longitude: 77.6966
                  },
                  stationdata: ConstantList.storeLocator.stationdata,
                  searchedResultsData :ConstantList.storeLocator.searchedResultsData,
                  textInputValue: '',
                  filterParking : false,
                  filterRestaurant:false,
                  filterCarwash: false,
                  filterShopping:false,
                  filterOpenAllTimes : false,
                  filterRestrooms : false,
                  filterCoffeeAvailablity:false,
                  filterWifiAvailability:false,
                  filterCarCharge:false,
                  filterTruckStop:false,
                  searchBarHeight: Dimensions.get('window').height/2 - 30,
                  displayBackArrow : 'none',
                  displayFilterIcon : 'flex',
                  fiterOptionsInScrollView : false,
                  showNearbyStations : true,
                  showSearchedResultStations : false
            }
      }
      
 

      /**
    * @function componentDidMount: React lifecycle function. It gets called before render() and first
    * time when component loads.
    * @function this.getCurrentLocation(): It returns a current location value with latitude and longitude if location services on and display on map view.
    */
      componentDidMount() {
            this.getCurrentLocation();
            this.props.getStations();
            // this.props.actions.getStations();
      }

      /**
       * @function searchStore: This function is invoked when user searches for any station in search bar.
       * with help of searched text this function will filter the data
       * @params {any} text: this is the word which user searched in search bar.
      */
      searchStore = (text) =>{
            let searchedStore = text.toLowerCase();
            this.setState({ textInputValue: text });

            if (text.length > 0) {
                  var sampleData = ConstantList.storeLocator.sampleData;
                  var farray = sampleData.filter((item) => {
                        return item.zipCode.toLowerCase().startsWith(searchedStore) || item.city.toLowerCase().startsWith(searchedStore) || item.stateName.toLowerCase().startsWith(searchedStore);
                  })
                  this.setState({ data: farray });
            }
            else {
                  this.setState({ data: [] });
            }
      }
      getCurrentLocation = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                  console.log("position",position)
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

      searchButtonPressed = ()=>{
            this.setState({showSearchedResultStations:true
                  ,fiterOptionsInScrollView :false,
                  displayBackArrow : 'none',
                  displayFilterIcon:'flex',
                  searchBarHeight: Dimensions.get('window').height/2 - 30},
                  () => {
                        this._animate();
                    });
      }
      backArrowPressed = ()=>{
            this.setState({
                  searchBarHeight: Dimensions.get('window').height/2 - 30,
                  fiterOptionsInScrollView :false,
                  displayBackArrow : 'none',
                  displayFilterIcon:'flex',
                  showNearbyStations:true   
            },
            () => {
                  this._animate();
              })
      }
      /**
       * @function selectedStore: This function is invoked whenever user is select any of the station from searched stations results.
       * from searched stations results.
       * @params {object} coordinates: coordinates of user selected statuion.
      */
      selectedStore = (coordinates, name) => {
            this.setState({ lat: coordinates.latitude, lng: coordinates.longitude, data: [], textInputValue: name })
      }

      /**
       * @function selectedDistype: This function is invoked whenever user is select km to miles component,if user selects km then
       * it display distance in kilometers,else in miles.
       * @params {string} dist: distance type km or miles.
      */
      selectedDistype = (dist) => {
            this.setState({ distanceType: dist })
      }

      _animate = () => {
            UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
            LayoutAnimation.easeInEaseOut();
        }

        onFocusSearchBar = () => {
            this.setState({
              searchBarHeight: Dimensions.get('window').height - 50,
              displayBackArrow : 'flex',
              displayFilterIcon:'none',
              fiterOptionsInScrollView : true,
              showNearbyStations : false,
              showSearchedResultStations:false
            }, () => {
                this._animate();
            })
        }
  
      distanceButtonTappedToMap = () => {
            const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
            const latLng = `${this.state.markercoords.latitude},${this.state.markercoords.longitude}`;
            const label = 'Custom Label';
            const url = Platform.select({
              ios: `${scheme}${label}@${latLng}`,
              android: `${scheme}${latLng}(${label}`});
            Linking.openURL(url);
      }

      filterWith = (key)=> {
            this.setState({
                  [key]: !this.state[key]
            });
        }

      /**
       * @function selectedDistype: This function is invoked whenever user clicks on filter icon a modal is popup.
       * @params {boolean} visible: if user clicks on .
      */
     emptySearchBar = ()=>{
      this.setState({textInputValue:''},() => {
            this._animate();
        });
     }
      /**
            * @function render
            * React render method for rendering the native elements
      */

      render() {
            return (
                  <View style={stylesheet.stationfindercontainer}>
                        <View style={styles.mapContainer}>
                              <View style={{ flex: 1 }}>
                              <View style={{flexDirection:'row',position:'relative',zIndex:30}}>
                                    <Toolbar
                                          style={[styles.noBorderToolbar,{backgroundColor:'tranparant',width:100,zIndex:30}]}
                                          onClickLeftIcon={navigateBack}
                                          iconName="loginpage"
                                          />
                                    <View style={{width:80,alignSelf:'flex-end',position:'absolute',right:30,height:40,zIndex:30,top:40}}> 
                                          <Converter selectedDistype={this.selectedDistype}/>
                                    </View>
                              </View>
                                    <MapView style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height / 2, left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
                                          provider={MapView.PROVIDER_GOOGLE}
                                          showsMyLocationButton={false}
                                          showsUserLocation={true}
                                          region={{
                                                latitude: this.state.lat,
                                                longitude: this.state.lng,
                                                latitudeDelta: 0.0900,
                                                longitudeDelta: 0.0500
                                          }}>
                                          <MapView.Marker
                                                coordinate={{ latitude: this.state.markercoords.latitude, longitude: this.state.markercoords.longitude }}
                                                description={this.state.address}
                                          >
                                                <Image style={{ width: 20, height: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/esso_logo.png')} />
                                          </MapView.Marker>
                                    </MapView>
                              </View>
                              <KeyboardAvoidingView behavior="height" enabled>
                                          <TouchableOpacity style={stylesheet.mylocationbutton} onPress={this.getCurrentLocation}>
                                                <View style={{ backgroundColor: 'white',  width: 45, height: 45, borderRadius: 50, justifyContent: 'center', zIndex: 2 }}>
                                                <Icon name="my-location" size={20} color='#0f71b8' />
                                                </View>
                                                <View>
                                                </View>
                                          </TouchableOpacity>
                              </KeyboardAvoidingView>
                              <View style={[stylesheet.listView,{height: this.state.searchBarHeight}]}>
                              <View style={stylesheet.searchbarFlex}>
                                                      <Text style={stylesheet.greybar}></Text>
                                                </View>

                                                 <View style={stylesheet.searchbarcontainer}>
                                                 
                                                      <View style={[stylesheet.backarrowcontainer,{display:this.state.displayBackArrow,zIndex:40}]}>
                                                            <Icon onPress={this.backArrowPressed} name="arrow-left" type="material-community" size={25} color='black' />
                                                      </View>
                                                
                                                      <View style={{ flex:1}}>
                                                      <TextInput
                                                            ref={this.searchbar}
                                                            style={stylesheet.textInputSearch}
                                                            placeholder="Search" 
                                                            onChangeText={this.searchStore}
                                                            onFocus={this.onFocusSearchBar}
                                                            onBlur={this.onBlurSearchBar}
                                                            value={this.state.textInputValue}
                                                      /> 
                                                      { this.state.textInputValue.length > 0 &&
                                                      <TouchableOpacity onPress={this.emptySearchBar}>
                                                      <View style={{zIndex:10}}>
                                                      <Image style={{zIndex:10,height:20,width:20,position:"absolute",bottom:10,right:10}} resizeMode='contain' source={require('../assets/images/closeButtonSearchBar.png')} /> 
                                                      </View>
                                                      </TouchableOpacity>
                                                      }
                                                      </View>
                                                      <View style={stylesheet.filtering}>
                                                            <TouchableOpacity onPress={() => {
                                                                  this.onFocusSearchBar()}} >
                                                                  <Image style={{ height:23,width:25,display:this.state.displayFilterIcon,alignSelf:'center'}} source={require('../assets/images/filter.png')} /> 
                                                            </TouchableOpacity>
                                                      </View>
                                                </View>
                                   {this.state.showNearbyStations && <FlatList
                                     horizontal = {this.state.data.length == 0 && true  }
                                    showsHorizontalScrollIndicator={false}
                                          data={this.state.data.length > 0 ?    this.state.data : this.state.stationdata}
                                          keyExtractor={(item, index) => index.toString()}
                                          ref={(ref) => { this.flatListRef = ref; }}
                                          ItemSeparatorComponent={() => <View style={{ marginLeft: 0, marginRight: 0, height: 0.5, backgroundColor: '#ffffff' }} />}
                                          renderItem={({ item, index }) =>
                                                      <View style={stylesheet.flatlistContainerNearByStations}>
                                                            
                                                                  <View style={{flex:1,flexDirection:'row'}}>
                                                                        <TouchableOpacity style={{flexDirection:'row',flex:1}} onPress={() => navigateTo("storeDetails",item)}>
                                                                              <View style={{flex:0.6,padding:10}}>
                                                                                    <Text style={{color:'black',fontWeight:'bold',fontSize:22}}>Esso</Text>
                                                                                    <Text style={{color:'#808080',fontWeight:'600'}}>1234 Main St. London</Text>
                                                                                    <Text style={{color:'#808080',fontWeight:'700'}}>UK.</Text>
                                                                                    <Text style={{fontSize:10,color:'#808080'}}><Text style={{fontSize:10,color:'#808080',fontWeight:'700'}}>OPEN <Text style={{fontSize:20}}>.</Text> </Text>24 Hours</Text>
                                                                                    <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                                                                                          <Image style={{ height: 12, width: 12}} source={require('../assets/images/home/FuelCard.png')}/>
                                                                                          <Text style={{paddingLeft:5,fontSize: 10,color:'#808080'}}>Fuel Card Accepted</Text>
                                                                                    </View>
                                                                              </View>
                                                                              <View style={{flex:0.4}}>
                                                                              <ImageBackground style={{ height: "100%", width: "100%", borderTopRightRadius: 9, overflow: 'hidden' }} resizeMode='cover' source={require('../assets/images/Prefered-Staion-Android.png')} >
                                                                                    { item.category == 'esso' ?
                                                                                    <Image style={{ height: 40, width: 40,  marginLeft:30,marginTop:40 }} source={require('../assets/images/home/EssoGoFuel.png')}/>
                                                                                    :
                                                                                    <Image style={{ height: 40, width: 40,  marginLeft:30,marginTop:40 }} source={require('../assets/images/home/ShellGoFuel.png')}/>
                                                                                    }                                                                 
                                                                              </ImageBackground>
                                                                              </View> 
                                                                        </TouchableOpacity>
                                                                  </View>
                                                                  <View style={{flex:0.5,}}>
                                                                  <Swiper paginationStyle={{ height:65 }}>
                                                                        <View style={{ flex: 1,  borderBottomLeftRadius: 9, borderBottomRightRadius: 9, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
                                                                              <View style={{ flex: 4, flexDirection: 'row', borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 25, width: 25, alignSelf: 'center' }} resizeMode='contain'  source={require('../assets/images/home-Restroom-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Restroom</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 25, width: 25, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-restaurant-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Restaurant</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 25, width: 25, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-carwash-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Carwash</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 25, width: 25, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-24-7-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>24/7</Text>
                                                                                    </View>
                                                                              </View>
                                                                        </View>
                                                                        <View style={{ flex: 1,  borderBottomLeftRadius: 9, borderBottomRightRadius: 9, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
                                                                              <View style={{ flex: 4, flexDirection: 'row', borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 25, width: 25, alignSelf: 'center' }} resizeMode='contain'  source={require('../assets/images/home-Restroom-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Restroom</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 25, width: 25, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-restaurant-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Restaurant</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 25, width: 25, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-carwash-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Carwash</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 25, width: 25, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-24-7-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>24/7</Text>
                                                                                    </View>
                                                                              </View>
                                                                        </View>
                                                                  </Swiper>
                                                                  </View>
                                                           
                                                      </View>
                                          }
                                    />}
                                    {this.state.showSearchedResultStations && <FlatList 
                                    data={ this.state.searchedResultsData}
                                    showsVerticalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                    ref={(ref) => { this.flatListRef = ref; }}
                                    ItemSeparatorComponent={() => <View style={{ marginLeft: 0, marginRight: 0, height: 0.5, backgroundColor: '#ffffff' }} />}
                                    renderItem={({ item, index }) =>
                                          <View style={stylesheet.flatlistContainerSearchResults}>
                                                <View style={{flexDirection:'row',backgroundColor:'#FFFFFF',borderRadius:9,flex:0.7}}>
                                                      <View style={{flex:0.6,paddingLeft:10,paddingTop:10,}}>
                                                            <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>Esso</Text>
                                                            <Text style={{color:'#808080',fontWeight:'600',paddingTop:5}}>1234 Main St.London UK.</Text>
                                                            <Text style={{fontSize:10,color:'#808080',paddingTop:5}}><Text style={{fontSize:10,color:'#808080',fontWeight:'700'}}>OPEN <Text style={{fontWeight:'bold'}}>.</Text> </Text>Closes 11:00 PM</Text>
                                                            <Text style={{fontSize:12,color:'#808080',paddingTop:5}}><Text style={{color:'#808080',fontWeight:'600'}}>Fule Type</Text> Super Gasoline / Diesel</Text>
                                                      </View>
                                                      <View style={{flex:0.4,alignItems:'center',paddingTop:10}}>
                                                      <TouchableOpacity onPress={this.distanceButtonTappedToMap}>
                                                            <View style={{backgroundColor:'#0D71B8',borderRadius:20,padding:10}}>                 
                                                                  <Text style={{color:'#FFFFFF',fontSize:12}}>Directions</Text>
                                                            </View>
                                                            </TouchableOpacity>
                                                            <Text style={{fontSize:10,paddingTop:5,color:'#808080'}}>{this.state.distanceType == 'km'? 0.16 +' KM' : (1/1.609).toFixed(2) +' Miles'}</Text>
                                                      </View>
                                                </View>
                                                <View style={{flex:0.4}}>
                                                <Swiper paginationStyle={{ height:60, alignSelf: 'center', justifyContent: 'center' }}>
                                                                        <View style={{ flex: 1,  borderBottomLeftRadius: 9, borderBottomRightRadius: 9, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
                                                                              <View style={{ flex: 4, flexDirection: 'row', borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 30, width: 30, alignSelf: 'center' }} resizeMode='contain'  source={require('../assets/images/home-Restroom-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Restroom</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 30, width: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-restaurant-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Restaurant</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 30, width: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-carwash-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Carwash</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 30, width: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/home-24-7-android.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>24/7</Text>
                                                                                    </View>
                                                                              </View>
                                                                        </View>
                                                                        <View style={{ flex: 1,  borderBottomLeftRadius: 9, borderBottomRightRadius: 9, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
                                                                              <View style={{ flex: 4, flexDirection: 'row', borderBottomLeftRadius: 23, borderBottomRightRadius: 23, justifyContent: 'space-around', backgroundColor: 'rgb(248,248,248)' }}>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 30, width: 30, alignSelf: 'center' }} resizeMode='contain'  source={require('../assets/images/truckshop.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Truck Stop</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 30, width: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/coffee.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Coffee</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 30, width: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/freewifi.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Free Wifi</Text>
                                                                                    </View>
                                                                                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                                                                          <Image style={{ height: 30, width: 30, alignSelf: 'center' }} resizeMode='contain' source={require('../assets/images/parking.png')} />
                                                                                          <Text style={{ fontSize: 13, }}>Parking</Text>
                                                                                    </View>
                                                                              </View>
                                                                        </View>
                                                                  </Swiper>
                                                </View>
                                          </View>
                                          }
                                    />}
                  {this.state.fiterOptionsInScrollView && 
                  <View style={stylesheet.modalContainer}>
                  
                  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}} onScroll={(e)=>{this.searchbar.blur}} >
                  <View style={{flex:1}}>
                        <View style={stylesheet.modalPrefferedStationContainer}>
                              <Text style={{color:'black'}}>{ConstantList.storeLocator.preferredStation}</Text>
                        </View>
                        <View>
                              <FlatList
                                  data={this.state.prefferedStations}
                                  keyExtractor={(index,item)=>index.toString()}
                                  ItemSeparatorComponent={() => <View style={stylesheet.modalFlatlistItemseperator} />}
                                  renderItem={({item})=>
                                        <View style={stylesheet.modalPrefferedStaionFlatlist}>
                                              <View>
                                                    {
                                                      item.category == 'esso' ? 
                                                      <Image style={{ width: 40, height: 40}} source={ require('../assets/images/esso_logo.png')}/>
                                                      :
                                                      <Image style={{ width: 40, height: 40}} source={ require('../assets/images/shell_logo.png')}/>
                                                      }
                                              </View>
                                              <View style={{paddingLeft:10}}>
                                                    <Text style={{color:'black'}}>{item.title}</Text>
                                                    <Text>{item.address}</Text>
                                              </View>
                                        </View>
                                  }
                              />
                        </View>
                        <View style={{padding:15}}>
                              <Text style={{color:'black'}}>{ConstantList.storeLocator.filterOptions}</Text>
                        </View>
                        <View style={{backgroundColor:'#FFFFFF',padding:15,flexDirection:'row',justifyContent:'space-between'}}>
                              <Text style={{color:'black',fontSize:20,alignSelf:'center'}}>{ConstantList.storeLocator.distance}</Text>
                              <Picker style={{ width: 106}}
                                    selectedValue={this.state.distance}
                                    onValueChange={(itemValue, itemIndex) => this.setState({distance: itemValue})}>
                                    <Picker.Item label="20KM" value="20" />
                                    <Picker.Item label="15KM" value="15" />
                                    <Picker.Item label="10KM" value="10" />
                                    <Picker.Item label="5KM" value="5" />
                                    <Picker.Item label="1KM" value="1" />
                              </Picker>
                        </View>
                        <View style={{padding:15}}>
                              <Text style={{color:'black'}}>{ConstantList.storeLocator.amenities}</Text>
                        </View>
                        <View style={{flexDirection:'row',padding:10,alignItems:'center',backgroundColor:'#FFFFFF',borderBottomWidth:2,borderColor:'#FAFAFA'}}>
                              <View style={{flex:0.3}}>
                                    <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/images/parking.png')} />
                              </View>
                              <View style={{flex:1.7}}>
                                    <Text style={{color:'black',fontSize:20,textAlign:'left'}}>{ConstantList.storeLocator.parking}</Text>
                              </View>
                              <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Checkbox iconColor="#0f71b8" onPress={(e) => this.filterWith("filterParking")} checked={this.state.filterParking} />
                              </View>
                        </View>
                        <View style={{flexDirection:'row',padding:10,alignItems:'center',backgroundColor:'#FFFFFF',borderBottomWidth:2,borderColor:'#FAFAFA'}}>
                              <View style={{flex:0.3}}>
                                    <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/images/restaurant.png')} />
                              </View>
                              <View style={{flex:1.7}}>
                                    <Text style={{color:'black',fontSize:20,textAlign:'left'}}>Restaurant</Text>
                              </View>
                              <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Checkbox iconColor="#0f71b8" onPress={(e) => this.filterWith("filterRestaurant")} checked={this.state.filterRestaurant} />
                              </View>
                        </View>
                        <View style={{flexDirection:'row',padding:10,alignItems:'center',backgroundColor:'#FFFFFF',borderBottomWidth:2,borderColor:'#FAFAFA'}}>
                              <View style={{flex:0.3}}>
                              <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/images/Carwash.png')} />
                              </View>
                              <View style={{flex:1.7}}>
                                    <Text style={{color:'black',fontSize:20,textAlign:'left'}}>{ConstantList.storeLocator.carwash}</Text>
                              </View>
                              <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Checkbox iconColor="#0f71b8" onPress={(e) => this.filterWith("filterCarwash")}  checked={this.state.filterCarwash} />
                              </View>
                        </View>
                        <View style={{flexDirection:'row',padding:10,alignItems:'center',backgroundColor:'#FFFFFF',borderBottomWidth:2,borderColor:'#FAFAFA'}}>
                              <View style={{flex:0.3}}>
                                    <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/images/shopping.png')} />
                              </View>
                              <View style={{flex:1.7}}>
                                    <Text style={{color:'black',fontSize:20,textAlign:'left'}}>{ConstantList.storeLocator.shopping}</Text>
                              </View>
                              <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Checkbox iconColor="#0f71b8" onPress={(e) => this.filterWith("filterShopping")} checked={this.state.filterShopping} />
                              </View>
                        </View>
                        <View style={{flexDirection:'row',padding:10,alignItems:'center',backgroundColor:'#FFFFFF',borderBottomWidth:2,borderColor:'#FAFAFA'}}>
                              <View style={{flex:0.3}}>
                                    <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/images/twentyfourhours.png')} />
                              </View>
                              <View style={{flex:1.7}}>
                                    <Text style={{color:'black',fontSize:20,textAlign:'left'}}>{ConstantList.storeLocator.open}</Text>
                              </View>
                              <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Checkbox iconColor="#0f71b8" onPress={(e) => this.filterWith("filterOpenAllTimes")} checked={this.state.filterOpenAllTimes} />
                              </View>
                        </View>
                        <View style={{flexDirection:'row',padding:10,alignItems:'center',backgroundColor:'#FFFFFF',borderBottomWidth:2,borderColor:'#FAFAFA'}}>
                              <View style={{flex:0.3,}}>
                                    <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/images/restroom.png')} />
                              </View>
                              <View style={{flex:1.7,}}>
                                    <Text style={{color:'black',fontSize:20,textAlign:'left',alignItems:'baseline'}}>{ConstantList.storeLocator.restRoom}</Text>
                              </View>
                              <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Checkbox iconColor="#0f71b8" onPress={(e) => this.filterWith("filterRestrooms")}  checked={this.state.filterRestrooms} />
                              </View>
                        </View>
                        <View style={{flexDirection:'row',padding:10,alignItems:'center',backgroundColor:'#FFFFFF',borderBottomWidth:2,borderColor:'#FAFAFA'}}>
                              <View style={{flex:0.3}}>
                                    <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/images/coffee.png')} />
                              </View>
                              <View style={{flex:1.7}}>
                                    <Text style={{color:'black',fontSize:20,textAlign:'left'}}>Coffee</Text>
                              </View>
                              <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Checkbox iconColor="#0f71b8" onPress={(e) => this.filterWith("filterCoffeeAvailablity")} checked={this.state.filterCoffeeAvailablity} />
                              </View>
                        </View>
                        <View style={{flexDirection:'row',padding:10,alignItems:'center',backgroundColor:'#FFFFFF',borderBottomWidth:2,borderColor:'#FAFAFA'}}>
                              <View style={{flex:0.3}}>
                                    <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/images/freewifi.png')} />
                              </View>
                              <View style={{flex:1.7}}>
                                    <Text style={{color:'black',fontSize:20,textAlign:'left'}}>Free Wifi</Text>
                              </View>
                              <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Checkbox iconColor="#0f71b8" onPress={(e) => this.filterWith("filterWifiAvailability")} checked={this.state.filterWifiAvailability} />
                              </View>
                        </View>
                        <View style={{flexDirection:'row',padding:10,alignItems:'center',backgroundColor:'#FFFFFF',borderBottomWidth:2,borderColor:'#FAFAFA'}}>
                              <View style={{flex:0.3}}>
                                    <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/images/electriccharge.png')} />
                              </View>
                              <View style={{flex:1.7}}>
                                    <Text style={{color:'black',fontSize:20,textAlign:'left'}}>Electric Car Charge</Text>
                              </View>
                              <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Checkbox iconColor="#0f71b8" onPress={(e) => this.filterWith("filterCarCharge")} checked={this.state.filterCarCharge} />
                              </View>
                        </View>
                        <View style={{flexDirection:'row',padding:10,alignItems:'center',backgroundColor:'#FFFFFF',borderBottomWidth:2,borderColor:'#FAFAFA'}}>
                              <View style={{flex:0.3}}>
                                    <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={require('../assets/images/truckshop.png')} />
                              </View>
                              <View style={{flex:1.7}}>
                                    <Text style={{color:'black',fontSize:20,textAlign:'left'}}>Truck Stop</Text>
                              </View>
                              <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Checkbox iconColor="#0f71b8" onPress={(e) => this.filterWith("filterTruckStop")} checked={this.state.filterTruckStop} />
                              </View>
                        </View>
                        <View style={{backgroundColor:"#FFFFFF",paddingBottom:40}}>
                              <Button title="Search" style={{borderRadius:20}} backgroundColor="#0f71b8" onPress={this.searchButtonPressed}
                                     />
                        </View>
                  </View>
                  </ScrollView>
                  </View>
                }
                              </View>
                        </View>
                       
                  </View>
            );
      }
}

const mapStateToProps = state => ({
      stations : state.stationsReducer.allStations
});

const mapDispatchToProps = dispatch => ({
      getStations : () => dispatch(handleGetStations())
});

export default connect(mapStateToProps,mapDispatchToProps)(StoreLocator);