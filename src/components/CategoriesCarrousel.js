import React from 'react';
import { StyleSheet, Image, ScrollView, Dimensions ,Text, View } from 'react-native';
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
                decelerationRate="fast">
                {
                    console.log(items)
                }
                {
                    items.map(function(item, index){
                        return(
                            <View key = {index }style={styles.card}>
                                <Image source={item.uri} style = {styles.categoryImg}/>
                                <Text style = {styles.titleCategory}>{item.title}</Text>
                                <View style = {styles.viewsWrapper}>
                                  <Entypo name="controller-record" size={18} color="red" />
                                  <Text style = {styles.views}>{item.views}</Text>
                                </View>
                               
                            </View>
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
        fontWeight: 'bold'
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

    }
});

export default CategoriesCarrousel;