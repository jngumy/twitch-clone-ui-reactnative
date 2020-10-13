import React from 'react';
import { StyleSheet, Dimensions, Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import DiscoverItem from './DiscoverItem'

const windowHeight = Dimensions.get('window').height;

const DiscoverCarousel = (props) => {
    return(
        <View style = {styles.container}>
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            pagingEnabled
            decelerationRate='normal'>
            {
                props.items.map(function(item, index){
                    return(
                       <DiscoverItem key={index} item={item} />
                    )
                })
            }
        </ScrollView>
    </View>
    );

}

export default DiscoverCarousel;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: windowHeight/2.3,
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 15
    },
});