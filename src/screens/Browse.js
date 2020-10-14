import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Categories from '../tabNavigation/Categories'
import LiveChannels from '../tabNavigation/LiveChannels'

import Header from '../components/Header'


const windowHeight = Dimensions.get('window').height;
const RouteConfigs = {
  Categories: Categories,
  Channels: LiveChannels
}



const RootTabs = createAppContainer(createMaterialTopTabNavigator(RouteConfigs, {
  tabBarOptions: {
    upperCaseLabel: false,
    activeTintColor: '#6441a5',
    inactiveTintColor: 'white',
    activeBackgroundColor: 'black',
    inactiveBackgroundColor: 'black',
    style: {
      borderTopColor: 'black',
      backgroundColor: 'black',
    },
    indicatorStyle: {
      backgroundColor: '#6441a5'
    },
    labelStyle: {
      fontFamily: 'Roobert-bold',
      fontSize: 14,
      alignItems: 'flex-start'
    },
    tabStyle: {
      width: 120,
    },
  },
}));


export default class Browse extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollView}>
          <View style={styles.title}>
            <Text style={styles.bigBlue}>Browse</Text>
          </View>
          <RootTabs />
        </ScrollView>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'black',
    flex: 1,
  },
  scrollView: {
  },

  bigBlue: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Roobert-bold',
    paddingTop: 10
  },
  red: {
    color: 'red',
  },
  title: {
    height: windowHeight / 9,

  },

});
