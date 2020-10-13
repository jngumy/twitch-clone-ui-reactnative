import React from 'react';
import { StyleSheet, Image, ScrollView, Dimensions ,Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LiveChannelsList = (props) => {
    const { items } = props
    return(
        <View style = {styles.container}>
            {
                console.log(items)
            }
                {
                    items.map(function(item, index){
                        return(
                            <View key = {index }style={styles.card}>
                                <Image source={item.uri} style = {styles.categoryImg}/>
                                <View style = {styles.cardDescription}>
                                  <Text style = {styles.user}>{item.user}</Text>
                                  <Text style = {styles.title}>{item.title}</Text>
                                  <Text style = {styles.category}>{item.category}</Text>
                                  {
                                      item.tags.map((tag, index)=> <View style = {styles.tag} key= {index}>
                                                            <Text style = {{color: 'white', fontSize: 12}} >{tag}</Text>
                                                         </View>)
                                  }
                                </View>
                                <View style = {styles.viewsWrapper}>
                                  <Entypo name="controller-record" size={18} color="red" />
                                  <Text style = {styles.views}>{item.views}</Text>
                                </View>
                            </View>
                        )
                    })
                }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    
    },
    card : {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20,
        
    },
    cardDescription: {
        paddingLeft: 15
    },
    categoryImg :{
        height:80,
        width: 140
    },
    titleCategory : {
        color: 'white',
        fontWeight: 'bold'
    },
    viewsWrapper : {
        position: 'absolute',
        bottom: 0,
        display:'flex',
        flexDirection: 'row',
        height: '25%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    views : {
        color: 'white',
        alignSelf: 'center',

    },
    tag :{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey',
        borderRadius: 10,
        width: 60,
        alignItems: 'center',
        fontSize: 13
    },
    user: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    title: {
        color: 'white',
        fontSize: 13
    },
    category : {
        color: 'grey',
        fontSize: 14
    }
});

export default LiveChannelsList;