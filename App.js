
import React from 'react';
import { Alert, AppRegistry, StyleSheet, Text, View, Button, Animated, Dimensions } from 'react-native';

var h = Dimensions.get('window').height;
var w = Dimensions.get('window').width;


export default class App extends React.Component {
  constructor(){
       super();

       this.state = {
            NavigationWidth: 0
       }
  }

  chnageWidth = () => {
       //Alert.alert("Hello World!");
       this.setState({
            NavigationWidth: w * 2 / 3
       })
 }
  render() {

    var h = Dimensions.get('window').height;
    var w = Dimensions.get('window').width;


    return (
      <View style={{
         flexDirection: 'row',
         flex: 1,
         padding: 0
       }}>


           <View style={{
               flexDirection: 'column',
               flex: 1,
               padding: 0
             }}>
             <View style={styles.container1}></View>
             <View style={styles.container2}>
               <Text style={styles.hamburgerButton}
               onPress={this.chnageWidth}> ≡</Text>
               <Text style={styles.white}>    NUS High Black Knights</Text>
             </View>
             <View style={styles.container3}>
               <Text style={styles.white}>Home page</Text>
               <Text style={styles.white}>Announcements</Text>
               <Text style={styles.white}>Schedule</Text>
               <Text style={styles.white}>Menu</Text>
             </View>
             </View>

             <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:'absolute'}}>
               <View style={{
                  backgroundColor:'#1E1E3C',
                  height: h,
                  width: this.state.NavigationWidth,
               }}></View>
             </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 0.95,
    backgroundColor: '#242448',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2.2,
    backgroundColor: '#181830',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  container3: {
    flex: 21.8,
    backgroundColor: '#242448',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
    fontSize: 20,
  },
  hamburgerButton: {
      color: 'white',
      fontSize: 40,
  },

  navigation: {

  }

});

AppRegistry.registerComponent('TestApp2', () => App);
