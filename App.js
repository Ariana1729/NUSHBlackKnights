//Dated 21 May 2018
import React from 'react';
import { Alert, AppRegistry, StyleSheet, Text, View, Button,
Animated, Dimensions, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native';
import {StackNavigator, createStackNavigator} from 'react-navigation';
import HomeScreen from './Screens/Home';
var h = Dimensions.get('window').height;
var w = Dimensions.get('window').width;

const RootStack = createStackNavigator(
     {
     Home: {
       screen: HomeScreen
     },
},
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    headerMode: 'none',

  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent('TestApp2', () => App);

