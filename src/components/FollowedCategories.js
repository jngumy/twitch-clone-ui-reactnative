import React from 'react';
import { StyleSheet, Image, ScrollView, Dimensions ,Text, View } from 'react-native';
import CategoriesCarrousel from './CategoriesCarrousel'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const items = [
    {
        source: './assets/images/just-chatting.jpg'
    },
    {
        source: './assets/images/just-chatting.jpg'
    },
    {
        source: './assets/images/just-chatting.jpg'
    },
    {
        source: './assets/images/just-chatting.jpg'
    },
    {
        source: './assets/images/just-chatting.jpg'
    },

]

const FollowedCategories = (props) => {
    return(
        <View style = {styles.container}>
            <Text>
                FOLLOWED CATEGORIES
            </Text>
            <CategoriesCarrousel items={items}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      height: windowHeight/4,
      backgroundColor: 'pink',
    },
  });
  

export default FollowedCategories ;