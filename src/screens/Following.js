import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native'

import Header from '../components/Header'
import FollowedCategories from '../components/FollowedCategories'
import LiveChannels from '../components/LiveChannels'
import items from '../data/ItemsLiveChannels'
import items_cat from '../data/FollowedCategories'

import { StatusBar } from 'expo-status-bar';

const windowHeight = Dimensions.get('window').height;

export default class Following extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
          <View style={styles.title}>
            <Text style={styles.bigBlue}>Following</Text>
          </View>
          <FollowedCategories items={items_cat} title="FOLLOWED CATEGORIES" />
          <LiveChannels title="FOLLOWED CHANNELS" items={items} />
        </ScrollView>
        <StatusBar style="light" />

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#121212',
    flex: 1,
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

  }
});
