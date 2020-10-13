import React from 'react';
import { StyleSheet, Image, TouchableOpacity ,Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


const CategoryItem = (props) => {
    return(
        <TouchableOpacity key = {props.index }style={styles.card} activeOpacity={0.6}>
           <Image source={props.item.uri} style = {styles.categoryImg}/>
           <Text numberOfLines ={1} style = {styles.titleCategory}>{props.item.title}</Text>
           <View style = {styles.viewsWrapper}>
              <Entypo name="controller-record" size={18} color="red" />
              <Text style = {styles.views}>{props.item.views}</Text>
           </View>               
       </TouchableOpacity>
    )
    
}

export default CategoryItem;


const styles = StyleSheet.create({
  
    card : {
        display: 'flex',
        flexDirection: 'column',
        width:100,
        marginRight:8
    },
    categoryImg :{
      width: 100,
      height: '75%',
    },
    titleCategory : {
        color: 'white',
        fontFamily: 'Roobert-bold',
        lineHeight: 20
        
    },
    viewsWrapper : {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'flex-start',
    },
    views : {
        color: 'lightgrey',
        alignSelf: 'center',
        fontFamily: 'Roobert',
        fontSize: 13

    }
});
