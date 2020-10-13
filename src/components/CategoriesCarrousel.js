import React from 'react';
import { StyleSheet, Image, ScrollView,TouchableOpacity, Dimensions ,Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoriesCarrousel = (props) => {
    const { items } = props
    return(
        <View style = {styles.container}>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ width: `${50 * props.itemsPerInterval}%` }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                pagingEnabled
                decelerationRate='normal'>
               
                {
                    items.map(function(item, index){
                        return(
                            <TouchableOpacity key = {index }style={styles.card} activeOpacity={0.6}>
                                <Image source={item.uri} style = {styles.categoryImg}/>
                                <Text numberOfLines ={1} style = {styles.titleCategory}>{item.title}</Text>
                                <View style = {styles.viewsWrapper}>
                                  <Entypo name="controller-record" size={18} color="red" />
                                  <Text style = {styles.views}>{item.views}</Text>
                                </View>
                               
                            </TouchableOpacity>
                        )
                    })
                }
                      
            
              
           
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flex: 1
    },
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

    }
});

export default CategoriesCarrousel;