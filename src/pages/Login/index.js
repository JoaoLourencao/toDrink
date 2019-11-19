import React, { Component } from 'react';
import {View, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import Principal from '../Principal/index';
import Teste from '../Teste/index';
import Perfil from '../Perfil/index';

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
                    placeholder="Email"
                    placeholderTextColor= '#CECECE'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor= '#CECECE'
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                    style={styles.botao} 
                    onPress={ () => navigate('Teste')}>
                    <Text style={styles.botaoText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textoCadastro}>Ainda não possui uma conta?<Text style={styles.botaoCadastrar} onPress={() => navigate('Cadastro')}> Cadastrar</Text></Text>
                </TouchableOpacity>
            </View>
        );       
    }
}