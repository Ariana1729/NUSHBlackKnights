
import React from 'react';
import { Alert, AppRegistry, StyleSheet, Text, View, Button, Easing,
Animated, Dimensions, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native';
import {StackNavigator, createStackNavigator} from 'react-navigation';

import HomeScreen from './Screens/HomeScreen/Home';
import AttendenceScreen from './Screens/AttendenceScreen/Attendence';
import AnnouncementsScreen from './Screens/AnnouncementsScreen/Announcements';
import GamesScreen from './Screens/GamesScreen/Games';
import ProfileScreen from './Screens/ProfileScreen/Profile';
import RecordScreen from './Screens/RecordScreen/Record';
import ScheldueScreen from './Screens/ScheldueScreen/Scheldue';
import TournamentsScreen from './Screens/TournamentsScreen/Tournaments';

var h = Dimensions.get('window').height;
var w = Dimensions.get('window').width;

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps
      const thisSceneIndex = scene.index
      const width = layout.initWidth
      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })
      return { transform: [ { translateX } ] }
    },
  }
}

const RootStack = createStackNavigator(
     {
     Home: { screen: HomeScreen },
     Attendence: { screen: AttendenceScreen },
     Announcements: { screen: AnnouncementsScreen },
     Games: { screen: GamesScreen },
     Profile: { screen: ProfileScreen },
     Record: { screen: RecordScreen },
     Scheldue: { screen: ScheldueScreen },
     Tournaments: { screen: TournamentsScreen },
},
  {
    initialRouteName: 'Home',
    transitionConfig,
    headerMode: 'none',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent('TestApp2', () => App);
