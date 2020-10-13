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
                    items.map(function(item, index){
                        return(
                            <View key = {index }style={styles.card}>
                                <Image source={item.uri} style = {styles.categoryImg}/>
                                <View>
                                  <Text style = {styles.user}>{item.user}</Text>
                                  <Text style = {styles.title}>{item.title}</Text>
                                  <Text style = {styles.category}>{item.category}</Text>
                                  {
                                      item.tags.map((tag, index)=> <View key= {index}>
                                                            <Text>{tag}</Text>
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
        flexDirection: 'row',
    
    },
    card : {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'green'
    },
    categoryImg :{
        height:80,
        width: 120
    },
    titleCategory : {
        color: 'white',
        fontWeight: 'bold'
    },
    viewsWrapper : {
        display:'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: 'blue'
    },
    views : {
        color: 'lightgrey',
        alignSelf: 'center',

    }
});

export default LiveChannelsList;