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
        profileImg : require('../assets/images/kun-profile.png'),
        category: 'Just Chatting',
        tags : ['Spanish']
    },
    {
        title: 'Viendo the Boys y despues GTA',
        user: 'Rubius',
        views: '68.4K',
        uri: require('../assets/images/rubius.jpg'),
        profileImg : require('../assets/images/rubius-profile.jpg'),
        category: 'Just Chatting',
        tags : ['Spanish']
    },
    {
        title: 'LIVE: Natus Vincere vs Cyber Legacy - IEM New York 2020 - Group A - CIS',
        user: 'ESL_CSGO',
        views: '27.4K',
        uri: require('../assets/images/csgolive.jpg'),
        profileImg : require('../assets/images/esl-profile.jpeg'),
        category: 'Counter-Strike',
        tags : ['Spanish']
    },
    {
        title: 'IRL Probando FIFA 21',
        user: 'SLAKUN10',
        views: '27.4K',
        uri: require('../assets/images/kun.jpg'),
        profileImg : require('../assets/images/kun-profile.png'),
        category: 'Just Chatting',
        tags : ['Spanish']
    },
    {
        title: 'Viendo the Boys y despues GTA',
        user: 'Rubius',
        views: '68.4K',
        uri: require('../assets/images/rubius.jpg'),
        profileImg : require('../assets/images/rubius-profile.jpg'),
        category: 'Just Chatting',
        tags : ['Spanish']
    },
    {
        title: 'LIVE: Natus Vincere vs Cyber Legacy - IEM New York 2020 - Group A - CIS',
        user: 'ESL_CSGO',
        views: '27.4K',
        uri: require('../assets/images/csgolive.jpg'),
        profileImg : require('../assets/images/esl-profile.jpeg'),
        category: 'Counter-Strike',
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
        fontFamily: 'Roobert-bold',
        fontSize: 13
        
    },
   
  });
  

export default LiveChannels ;