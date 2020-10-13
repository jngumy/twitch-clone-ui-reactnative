import React from 'react';
import { StyleSheet, Image, ScrollView, Dimensions ,Text, View } from 'react-native';
import CategoriesCarrousel from './CategoriesCarrousel'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const items = [
    {
        title: 'Just Chatting',
        views: '527.4K',
        uri: require('../assets/images/just-chatting.jpg'),
    },
    {
        title: 'GTA V',
        views: '135.8K',
        uri : require('../assets/images/gta.jpg'),
    },
    {
        title: 'Counter Strike..',
        views: '155.9K',
        uri: require('../assets/images/cs-go.jpg'),
    },
    {
        title: 'League of...',
        views: '153.8K',
        uri: require('../assets/images/lol.jpg')
    },
    {
        title: 'Just Chatting',
        views: '527.4K',
        uri: require('../assets/images/just-chatting.jpg'),
    },
    {
        title: 'GTA V',
        views: '135.8K',
        uri : require('../assets/images/gta.jpg'),
    },
    {
        title: 'Counter Strike..',
        views: '155.9K',
        uri: require('../assets/images/cs-go.jpg'),
    },
    {
        title: 'League of...',
        views: '153.8K',
        uri: require('../assets/images/lol.jpg')
    },
];

const FollowedCategories = (props) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.titleWrapper}>
                <Text style ={styles.title}>
                FOLLOWED CATEGORIES
                </Text>
            </View>
          
            <CategoriesCarrousel items={items} itemsPerInterval = {items.size}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      height: windowHeight/3.5,
      marginBottom:30
    },
    titleWrapper : {
      height: 30
    },
    title: {
        color: 'grey',
        fontFamily: 'Roobert-bold',
        fontSize: 13


        
    },
   
  });
  

export default FollowedCategories ;