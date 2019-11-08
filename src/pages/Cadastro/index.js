import React, { Component } from 'react';
import {View, Text, Button, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from '../Cadastro/style';
import Login from '../Login';

export default class Cadastro extends Component {
    render(){
        const { navigate } = this.props.navigation;

        return(
            <View style={styles.container}>
                <Image
                    source = {require('toDrink/src/img/logo.png')}
                    style={styles.logo}
                />
                <TextInput style={styles.input}
                    placeholder="Nome:"
                    placeholderTextColor= '#CECECE'>
                </TextInput>
                <TextInput style={styles.input}
                    placeholder="CPF:"
                    placeholderTextColor= '#CECECE'>
                </TextInput>
                <TextInput style={styles.input}
                    placeholder="Telefone:"
                    placeholderTextColor= '#CECECE'>
                </TextInput>
                <TextInput style={styles.input}
                    placeholder="Senha:"
                    placeholderTextColor= '#CECECE'>
                </TextInput>
                <TextInput style={styles.input}
                    placeholder="Confirme a senha:"
                    placeholderTextColor= '#CECECE'>
                </TextInput>
                <TouchableOpacity 
                    style={styles.botao} 
                    onPress={ () => navigate('Login')}>
                    <Text style={styles.botaoText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textoCadastro}>Já possui uma conta?<Text style={styles.botaoCadastrar} onPress={() => navigate('Login')}> Login</Text></Text>
                </TouchableOpacity>
            </View>
        );       
    }
}