import React from 'react';
import { StyleSheet, Image, ScrollView, Dimensions ,Text, View } from 'react-native';
import LiveChannelsList from './LiveChannelsList'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const items = [
    {
        title: 'IRL Probando FIFA 21',
        user: 'SLAKUN10',
        views: '27.4K',
        uri: require('../assets/images/kun.jpg'),
        category: 'Just Chatting',
        tags : ['Spanish']
    },
    {
        title: 'Viendo the Boys y despues..',
        user: 'Rubius',
        views: '68.4K',
        uri: require('../assets/images/rubius.jpg'),
        category: 'Just Chatting',
        tags : ['Spanish']
    },
    {
        title: 'IRL Probando FIFA 21',
        user: 'SLAKUN10',
        views: '27.4K',
        uri: require('../assets/images/kun.jpg'),
        category: 'Just Chatting',
        tags : ['Spanish']
    },
    {
        title: 'IRL Probando FIFA 21',
        user: 'SLAKUN10',
        views: '27.4K',
        uri: require('../assets/images/kun.jpg'),
        category: 'Just Chatting',
        tags : ['Spanish']
    },
    {
        title: 'IRL Probando FIFA 21',
        user: 'SLAKUN10',
        views: '27.4K',
        uri: require('../assets/images/kun.jpg'),
        category: 'Just Chatting',
        tags : ['Spanish']
    },
    {
        title: 'IRL Probando FIFA 21',
        user: 'SLAKUN10',
        views: '27.4K',
        uri: require('../assets/images/kun.jpg'),
        category: 'Just Chatting',
        tags : ['Spanish']
    },
  
];

const LiveChannels = (props) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.titleWrapper}>
                <Text style ={styles.title}>
                LIVE CHANNELS
                </Text>
            </View>
            <LiveChannelsList items = {items}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    titleWrapper : {
      height: 30
    },
    title: {
        color: 'grey',
        fontWeight: 'bold',
        
    },
   
  });
  

export default LiveChannels ;