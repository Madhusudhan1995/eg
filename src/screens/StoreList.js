import React, { Component } from "react";
import { View, Text, FlatList,TouchableOpacity,Alert } from "react-native";

class StoreList extends Component {

    constructor(props) {
        super(props);
        this.selectedStore = this.selectedStore.bind(this);
    }

    selectedStore(item) {
        Alert.alert(item.name);
        this.props.selectedStore(item.coordinates,item.name);
    }

    render(){
        return(
            <View style={{ flex: 1, justifyContent: "center" }}>
                    <FlatList style={{marginTop:10}}
                           data={this.props.data}
                           renderItem={({ item }) => (
                            <TouchableOpacity onPress={this.selectedStore.bind(this, item)}>
                            <View style={{backgroundColor:"rgb(255,255,255)",flex:1,padding:10}} >

                                      <Text  style={{color:'black'}}>{item.name}</Text>

                            </View>
                            </TouchableOpacity>
                          )}
                          keyExtractor={item => item.name}
                          ItemSeparatorComponent= {()=>(<View style={{
                            height: 1,
                            width: "86%",
                            backgroundColor: "gray",
                            marginLeft: "14%"
                          }}></View>)}
                        />


            </View>
        )
    }

}

export default StoreList;
