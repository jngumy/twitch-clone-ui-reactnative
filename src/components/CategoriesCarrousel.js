import React from 'react';
import { StyleSheet, Image, ScrollView, Dimensions ,Text, View } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CategoriesCarrousel = (props) => {
    return(
        <View style = {styles.container}>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ width: `${50 * 10}%` }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                pagingEnabled
                decelerationRate="fast">
                                  <Image style={styles.categoryImg}  source= {'../assets/images/just-chatting.jpg'} />

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderColor: '#ebebeb',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#fcfcfc',
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: 5
        },
    },
    categoriesCarrousel: {
        flexDirection: 'row',
        flex: 1
    },
    categoryImg :{
      width: 100,
      height: 200
    }
});

export default CategoriesCarrousel;