import React from 'react';
import { Alert, AppRegistry, StyleSheet, Text, View, Button, Image,
Animated, Dimensions, TouchableOpacity, TouchableWithoutFeedback, FlatList } from 'react-native';
import { StackNavigator, } from 'react-navigation';

var h = Dimensions.get('window').height;
var w = Dimensions.get('window').width;
export default class RecordScreen extends React.Component {
  constructor(){
       super();

       this.state = {
            NavigationWidth: 0
       }
  }

  HamburgerChangeWidth = () => {
       //Alert.alert("Hello World!");
       this.setState({
            NavigationWidth: w * 2 / 3
       })
  }

  tapOutside = () => {
      //Alert.alert('hello world');
      this.setState({
            NavigationWidth: 0
      })
  }

  a = () => {
       Alert.alert('hello world');
  }

  UNSAFE_componentWillMount(){
        this.setState({NavigationWidth: 0});
  }
  render() {

    var h = Dimensions.get('window').height;
    var w = Dimensions.get('window').width;


    return (
      <TouchableWithoutFeedback onPress = {this.tapOutside}>

      <View style={{
         flexDirection: 'row',
         flex: 1,
         padding: 0
       }} onPress = {this.tapOutside}>


           <View style={{
               flexDirection: 'column',
               flex: 1,
               padding: 0
             }}>
             <View style={styles.container1}></View>
             <View style={styles.container2}>
               <Text style={styles.hamburgerButton}
               onPress={this.HamburgerChangeWidth}> ≡</Text>
               <Text style={styles.white}>    Record A Game</Text>
             </View>
             <View style={styles.container3}>
             </View>
             </View>

             <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center', position:'absolute'}}>
               <View style={{
                  backgroundColor:'#1E1E3C',
                  height: h,
                  width: this.state.NavigationWidth,
               }}>
                    <View style = {styles.NavigationBarTop}>
                         <Image source={require('./Pictures/Logo.png')} />
                    </View>
                    <View style = {styles.NavigationBarMiddle}></View>
                    <View style = {{flex: 0.02}}></View>
                    <FlatList
                       data = {[
                           {key: ' Home', link: 'Home'},
                           {key: ' Announcements', link: 'Announcements'},
                           {key: ' Scheldue', link: 'Scheldue'},
                           {key: ' Attendence', link: 'Attendence'},
                           {key: ' Tournaments', link: 'Tournaments'},
                           {key: ' Record a Game', link: 'Record'},
                           {key: ' Games', link: 'Games'},
                           {key: ' Profile', link: 'Profile'},
                           {key: ' Sign Out', link: 'Home'},
                       ]}

                       renderItem={({item}) =>
                         <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate(item.link)}>
                              <View style={styles.navigationOptionsView}>
                                   <Text style = {styles.navigationOptionsText}>
                                   {item.key}
                                   </Text>
                              </View>
                         </TouchableWithoutFeedback>
                       }
                    > </FlatList>
               </View>
             </View>
      </View>
      </TouchableWithoutFeedback>
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

  navigationOptionsView: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      padding: 8,
 },

  navigationOptionsText: {
       color: 'white',
       fontSize: 22,
 },

 NavigationBarTop: {
      backgroundColor: '#1E1E3C',
      alignItems: 'flex-end',
      flex: 0.25,
      flexDirection: 'row',

 },

 NavigationBarMiddle:{
      borderBottomWidth: 3,
      borderBottomColor: '#000000',
      flex: 0.15,
 }
})
