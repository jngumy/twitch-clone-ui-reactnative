import React from 'react';
import { StyleSheet, Image, ScrollView,TouchableOpacity , Dimensions ,Text, View } from 'react-native';
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
                            <TouchableOpacity  key = {index } activeOpacity={0.3}>
                                <View style={styles.card}>
                                   <Image source={item.uri} style = {styles.categoryImg}/>
                                    <View style = {styles.cardDescription}>
                                      <View style = {styles.userWrapper}>
                                         <Image source={item.profileImg} style = {styles.profileImg}/>
                                         <Text style = {styles.user}>{item.user}</Text>
                                      </View>
                                     
                                      <Text numberOfLines ={1}  style = {styles.title}>{item.title}</Text>
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
                            </TouchableOpacity >
                            
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
        paddingLeft: 15,
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
        fontFamily: 'Roobert',
        fontSize: 12

    },
    tag :{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey',
        borderRadius: 10,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontFamily: 'Roobert',
        marginTop: 4
    },
    user: {
        color: 'white',
        fontFamily: 'Roobert-bold',
        fontSize: 16,
        paddingLeft: 5
    },
    title: {
        color: 'white',
        fontSize: 13,
        lineHeight: 20

    },
    category : {
        color: 'grey',
        fontSize: 13,
        fontFamily: 'Roobert',
        marginTop: 2
    },
    profileImg : {
        height: 20,
        width: 20,
        borderRadius: 10
    },
    userWrapper : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
    }
});

export default LiveChannelsList;