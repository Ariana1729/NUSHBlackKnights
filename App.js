import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{
          flexDirection: 'column',
          flex: 1,
          padding: 0
        }}>
        <View style={styles.container1}></View>
        <View style={styles.container2}>
          <Text style={styles.white}>NUS High Black Knights</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.white}>Home page</Text>
          <Text style={styles.white}>Announcements</Text>
          <Text style={styles.white}>Schedule</Text>
          <Text style={styles.white}>Menu</Text>
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
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  container3: {
    flex: 21.8,
    backgroundColor: '#242448',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
  },
});