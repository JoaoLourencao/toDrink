import React, { Component } from 'react';
import {View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import Principal from '../Principal/index';

export default class Login extends Component {
    
    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style={styles.container}>
                <Image
                    source = {require('toDrink/src/img/logo.png')}
                    style={styles.logo}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    placeholderTextColor= '#CECECE'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor= '#CECECE'
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                    style={styles.botao} 
                    onPress={ () => navigate('Principal')}>
                    <Text style={styles.botaoText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textoCadastro}>Ainda não possui uma conta?<Text style={styles.botaoCadastrar} onPress={() => navigate('Cadastro')}> Cadastrar</Text></Text>
                </TouchableOpacity>
            </View>
        );       
    }
}