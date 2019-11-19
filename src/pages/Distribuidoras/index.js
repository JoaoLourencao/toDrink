import React, { Component } from 'react';
import {Card, Body, CardItem, Left, Thumbnail} from "native-base";
import {View, Text, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Vinhos',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Cervejas',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Destilados',
    },
  ];

  function Item({ title }) {
    return (
        <Card source={require('toDrink/src/img/dragon.png')}>
            <TouchableOpacity >
            <CardItem>
                <Thumbnail source={require('toDrink/src/img/dragon.png')}/> 
                <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
                </View>
            </CardItem>
            </TouchableOpacity>
        </Card>
    );
  }

export default class Distribuidoras extends Component {
    render(){
        return(
            < ScrollView style = {styles.container}>
               <Text style={styles.txtTitulos}>Categorias</Text>
               <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                    horizontal
                />
                <Text style={styles.txtTitulos}>Distribuidoras</Text>
                <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
                />
                {/* <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('toDrink/src/img/dragon.png')}/>
                            <Body>
                                <Text>
                                    teste
                                </Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                    <Left>
                            <Thumbnail source={require('toDrink/src/img/dragon.png')}/>
                            <Body>
                                <Text>
                                    teste
                                </Text>
                            </Body>
                        </Left>
                    </CardItem>
                </Card> */}
            </ScrollView>
        );       
    }
}