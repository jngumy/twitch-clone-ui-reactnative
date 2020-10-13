import React from 'react';
import { StyleSheet, Image, ScrollView, Dimensions ,Text, View } from 'react-native';
import LiveChannelsList from './LiveChannelsList'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const LiveChannels = (props) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.titleWrapper}>
                <Text style ={styles.title}>
                  {props.title}
                </Text>
            </View>
            <LiveChannelsList items = {props.items}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    titleWrapper : {
      marginTop: 30,
      height: 30,

    },
    title: {
        color: 'grey',
        fontFamily: 'Roobert-bold',
        fontSize: 13,
        
    },
   
  });
  

export default LiveChannels ;