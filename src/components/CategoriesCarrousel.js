import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import CategoryItem from './CategoryItem';



const CategoriesCarrousel = (props) => {
    const { items } = props
    return(
        <View style = {styles.container}>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{ width: `${100 * props.itemsPerInterval}%` }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate='normal'>
                {
                    items.map(function(item, index){
                        return(
                           <CategoryItem key={index} item={item} />
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
        flex: 1,
    },
});

export default CategoriesCarrousel;