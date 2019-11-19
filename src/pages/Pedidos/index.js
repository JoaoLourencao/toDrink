import React, { Component } from 'react';
import {View} from 'react-native';
import styles from './style';
import { Body, Card, Footer, Container, Header, Item, Icon, Input, Button, Text, Tab, Tabs, TabHeading, CardItem, Title} from 'native-base';
import Pedidos from '../Pedidos';
import Perfil from '../Perfil';

export default class Distribuidoras extends Component {
    render(){
        return(
            <Container style={styles.container}>
            <Body style={styles.corpo}>
            <Title style={styles.title}>Nenhum pedido em andamento</Title>
            <Text style={styles.txt}>Que tal fazer um pedido para alegar seu dia? <Text style={styles.txt}>Basta clicar em "Início" e selecionar seu pedido!</Text></Text>
            </Body>
             </Container>
        );       
    }
}