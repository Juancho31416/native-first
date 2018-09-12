
import React, { Component } from 'react';
import { Alert,AppRegistry, StatusBar, View, Image, WebView, Platform, StyleSheet, Text, Button, TouchableOpacity,ScrollView } from 'react-native';
import { StackNavigator,DrawerNavigator } from 'react-navigation';

import Menu from './components/sidemenu';
import  SearchComponent  from './components/SearchComponent';
import ActionBar from 'react-native-action-bar';
import DrawerLayout from 'react-native-drawer-layout';
import {SearchBar} from 'react-native-elements';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerClosed: true,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
  }

  setDrawerState() {
    this.setState({
      drawerClosed: !this.state.drawerClosed,
    });
  }

  toggleDrawer = () => {
    if (this.state.drawerClosed) {
      this.DRAWER.openDrawer();
    } else {
      this.DRAWER.closeDrawer();
    }
  }

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
    
      <DrawerLayout
      drawerWidth={250}
      ref={drawerElement => {
        this.DRAWER = drawerElement;
      }}
      drawerPosition={DrawerLayout.positions.left}
      onDrawerOpen={this.setDrawerState}
      onDrawerClose={this.setDrawerState}
      renderNavigationView={() => <Menu />}
      >
    
      <ActionBar
        containerStyle={styles.bar}
        backgroundColor="#468499"
        leftIconName={'menu'}
        onLeftPress={this.toggleDrawer}/>
      
      <View style={{height: 400, backgroundColor:'#d0e6f1'}}>
     
      <SearchBar
           round
           placeholder='Find Artist...' />
              
              <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/TRqiFPpw2fY' }}
              />

      </View>
    </DrawerLayout>
    
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#33cc33',
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
    //padding: 10
  },
  bar:{
    height: 70
  },
  WebViewContainer:{
   
  }


});

AppRegistry.registerComponent('Main', () => App);

 