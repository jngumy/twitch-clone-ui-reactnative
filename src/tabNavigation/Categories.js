import React from 'react'
import { StyleSheet, Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native'
import BrowseCategoryItem from '../components/BrowseCategoryItem'
import item_rec from '../data/CategoriesRecommendations'

const Categories = (props) => (
    <View style={styles.container}>
        {
            item_rec.map((item, index) => (
                <BrowseCategoryItem item={item} key={index} />
            ))
        }
    </View>
)

export default Categories;


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
});
