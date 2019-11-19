import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        //justifyContent: 'center',
        padding: 30,
       // alignItems: 'center',
        backgroundColor: '#5f233f',
    },
    logo: {
        width: 350,
        height: 250,
        marginTop: -20
    },
    //caixa de texto
    input: {
        borderWidth:0,
        borderBottomWidth:1,
        borderBottomColor:'#FFF',
        width: '100%',
        marginTop: 10,
        // position: 'relative',
        // placeholderTextColor: '#d69830',   
        // backgroundColor: '#fff',
        fontSize: 16,
        color: '#fff',
        // fontWeight: 'bold',
        // borderRadius: 3
    },
    //botao login
    botao: {
        width: '100%',
        height: 42,
        backgroundColor: '#d69830',
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    //texto do botao de login
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    //Botao de cadastro
    botaoCadastrar: {
        marginTop: 10,
        color: '#fff'
    },
    
    textoCadastro: {
        color: '#d69830',
        marginTop: 20,
    }
})

export default styles;

//Amarelo d69830
//Branco fff