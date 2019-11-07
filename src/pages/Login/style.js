import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#d69830',
    },
    logo: {
        width: 350,
        height: 250
    },
    input: {
        borderWidth:0,
        borderBottomWidth:2,
        borderBottomColor:'#252525',
      
        marginTop: 20,
        width: 300,
        // backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#5f233f',
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default styles;