import React from 'react';
import { StyleSheet, Dimensions , SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from '../components/Header'
import FollowedCategories from '../components/FollowedCategories'
import LiveChannels from '../components/LiveChannels'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Following extends React.Component {
    render() {
      return (
        <SafeAreaView style= {styles.container}>
           <ScrollView style={styles.scrollView}>
             <Header />
             <View style = {styles.title}>
             <Text style = {styles.bigBlue}>Following</Text>
             </View>
             <FollowedCategories />
             <LiveChannels />
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
      fontFamily: 'Roobert-bold'
    },
    red: {
      color: 'red',
    },
    title :{
      height: windowHeight/9,

    }
  });
  