import React, { Component } from 'react';
import {Alert, View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import styles from './style';

export default class Login extends Component {

    click = () => {
        Alert.alert("Login", "Autenticando usuário...");
    }

    render(){
        return(
            <View style={styles.container}>
                <Image
                    source = {require('toDrink/src/img/transparente.png')}
                    style={styles.logo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email:"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha:"
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                    style={styles.botao} 
                    onPress={ ( ) => {this.click()}}>
                    <Text style={styles.botaoText}>Login</Text>
                </TouchableOpacity>
            </View>
        );       
    }
}