import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../components/Header'
import DiscoverCarousel from '../components/DiscoverCarousel'
import SubtitleHeader from '../components/SubtitleHeader'
import items from '../data/ItemsDiscover'
import FollowedCategories from '../components/FollowedCategories';

const windowHeight = Dimensions.get('window').height;

export default class Discover extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollView}>
          <View style={styles.title}>
            <Text style={styles.bigBlue}>Discover</Text>
          </View>
          <DiscoverCarousel items={items} itemsPerInterval={items.size} />
          <SubtitleHeader title= "RECOMMENDED SMALLER COMMUNITIES" />
          <DiscoverCarousel items={items} itemsPerInterval={items.size} />
          <FollowedCategories title= "CATEGORIES WE THINK YOU'LL LIKE" />
        </ScrollView>
      </SafeAreaView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
