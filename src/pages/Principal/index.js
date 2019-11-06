import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class Principal extends Component {
    static navigationOptions = {
        title: "toDrink",
        headerStyle: {
            backgroundColor: '#8B4513',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
    };  
    render(){
        return(
            <View>
                <Text>Hello world!</Text>
            </View>
        );       
    }
}