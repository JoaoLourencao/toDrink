import React, { Component } from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default class Distribuidoras extends Component {
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
            <View style={styles.container}>
                <Text></Text>
            </View>
        );       
    }
}