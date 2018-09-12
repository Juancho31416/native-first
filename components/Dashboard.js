
import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class DashboardComponent extends Component {

 



  render() {
    console.log('llega aca al render')
    return (
      <View style={styles.container}>
        <Image src={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 5
  },
  image: {
    height: 350
  }
});