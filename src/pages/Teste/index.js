import { Header, Container, Body, Footer, Item, Icon, Input, Text, Button, FooterTab, Badge } from "native-base";
import React, { Component } from 'react';
import styles from '../Teste/style';
import Pedidos from '../Pedidos/index';
import Distribuidoras from '../Distribuidoras/index';
import Perfil from '../Perfil/index';


export default class Teste extends Component {
    render(){
      const { navigate } = this.props.navigation;
        return(
        <Container style={styles.container} >
            <Header searchBar rounded style={styles.searchBar}>
          <Item>
            <Icon name="ios-search"/>
            <Input placeholder="Search" />
            <Icon name="wine"/>
          <Button transparent>
            <Text style={styles.text}>Search</Text>
          </Button>
          </Item>
          </Header>
            <Body>

            </Body>
            <Footer >
            <FooterTab style={styles.footerBar}>
            <Button vertical active onPress={ () => navigate('Distribuidoras')}>
              <Icon name="home" />
              <Text>Início</Text>
            </Button>
            <Button badge vertical onPress={ () => navigate('Pedidos')}>
              <Badge><Text>2</Text></Badge>
              <Icon name="paper" />
              <Text>Pedidos</Text>
            </Button>
            <Button vertical onPress={ () => navigate('Perfil')}>
              <Icon active name="person" />
              <Text>Perfil</Text>
            </Button>
          </FooterTab>
        </Footer>
        </Container>
        );
    }
}