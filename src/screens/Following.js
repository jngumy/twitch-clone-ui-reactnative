import React from 'react';
import { StyleSheet, Dimensions ,Text, View } from 'react-native';
import Header from '../components/Header'
import FollowedCategories from '../components/FollowedCategories'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Following extends React.Component {
    render() {
      return (
        <View style= {styles.container}>
          <Header />
          <View style = {styles.title}>
            <Text style = {styles.bigBlue}>Following</Text>
          </View>
          <FollowedCategories />
        </View>
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
    bigBlue: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 40,
    },
    red: {
      color: 'red',
    },
    title :{
      height: windowHeight/9,

    }
  });
  