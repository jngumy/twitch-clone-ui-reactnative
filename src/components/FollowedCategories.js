import React from 'react';
import { StyleSheet, Dimensions ,Text, View } from 'react-native';
import CategoriesCarrousel from './CategoriesCarrousel'

const windowHeight = Dimensions.get('window').height;

const FollowedCategories = (props) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.titleWrapper}>
                <Text style ={styles.title}>
                {props.title}
                </Text>
            </View>
          
            <CategoriesCarrousel items={props.items} itemsPerInterval = {props.items.size}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      height: windowHeight/3.5,
    },
    titleWrapper : {
      height: 30,
    },
    title: {
        color: 'grey',
        fontFamily: 'Roobert-bold',
        fontSize: 13
    },
  });
  
export default FollowedCategories 