import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../Principal/style';
import Login from '../Login';

export default class Principal extends Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>navigate('Login')}>
                    <Text>Hello world!</Text>
                </TouchableOpacity>
            </View>
        );       
    }
} 