import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const SubtitleHeader = (props) => (
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{props.title}</Text>
    </View>
)

const styles = StyleSheet.create({
    titleContainer: {
        height: 50,
        justifyContent: 'center'
    },
    titleText: {
        fontFamily: 'Roobert-bold',
        color: 'grey'
    }
});

export default SubtitleHeader