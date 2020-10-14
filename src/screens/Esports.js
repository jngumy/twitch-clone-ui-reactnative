import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../components/Header'


const windowHeight = Dimensions.get('window').height;

export default class Esports extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollView}>
          <View style={styles.title}>
            <Text style={styles.bigBlue}>Esports</Text>
          </View>
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
