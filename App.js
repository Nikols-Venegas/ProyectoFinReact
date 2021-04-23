import React, {Component} from "react";
import {StyleSheet, ImageBackground, TouchableOpacity, Text, View, TextInput, Image, str} from 'react-native';
import SingIn from './Components/SingIn/SingIn';
import Pedidos from './Components/Pedidos/Pedidos';
import Details from './Components/Detalles/Details';
import Mapas from './Components/Mapa/Mapa';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default class App extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SingIn">
          <Stack.Screen name="Pedidos" component={Pedidos}/>
          <Stack.Screen name="Details" component={Details}/>
          <Stack.Screen name="SingIn" component={SingIn}/>
		  <Stack.Screen name="Mapas" component={Mapas}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
