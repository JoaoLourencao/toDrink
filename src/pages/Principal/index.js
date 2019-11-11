import React, { Component } from 'react';
import { Container, Header, Item, Input, Button, Text, View, Icon, Tab, Tabs, TabHeading } from 'native-base';
import styles from '../Principal/style';
import Login from '../Login';
import Distribuidoras from '../Distribuidoras/index';
import Pedidos from '../Pedidos/index';
import Perfil from '../Perfil/index';

export default class Principal extends Component {
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
        <Header searchBar rounded style={styles.searchBar}>
          <Item>
            <Icon name="ios-search"/>
            <Input placeholder="Search" />
            <Icon name="wine"/>
          <Button transparent>
            <Text>Search</Text>
          </Button>
          </Item>
          </Header>
          <Tabs  >
          <Tab heading={ <TabHeading style={styles.navBar}><Icon name="home" /><Text>Início</Text></TabHeading>}>
            <Distribuidoras/>
          </Tab>
          <Tab heading={ <TabHeading style={styles.navBar}><Icon name="paper" /><Text>Pedidos</Text></TabHeading>}>
          <Pedidos/>
          </Tab>
          <Tab heading={ <TabHeading style={styles.navBar}><Icon name="person" /><Text>Perfil</Text></TabHeading>}>
          <Perfil/>
          </Tab>
         </Tabs>
      </View>
        );       
    }
} 