import React from 'react'
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'

const BrowseCategoryItem = (props) => (
    <TouchableOpacity activeOpacity={0.3}>
        <View style={styles.card}>
            <Image source={props.item.uri} style={styles.categoryImg} />
            <View style={styles.cardDescription}>
                <Text style={styles.user}>{props.item.title}</Text>
                <Text numberOfLines={1} style={styles.title}>{props.item.views} Viewers</Text>
                {props.item.tags.map((tag, index) => <View style={styles.tag} key={index}>
                    <Text style={{ color: 'white', fontSize: 12 }}>{tag}</Text>
                </View>)}
            </View>

        </View>
    </TouchableOpacity>
)

export default BrowseCategoryItem


const styles = StyleSheet.create({
    card: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
    },
    cardDescription: {
        paddingLeft: 12,
        justifyContent: 'center'
    },
    categoryImg: {
        width: 65,
        height: 90,
        backgroundColor: '#6441a5'
    },
    titleCategory: {
        color: 'white',
        fontWeight: 'bold',
    },
    viewsWrapper: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        height: '25%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    views: {
        color: 'white',
        alignSelf: 'center',
        fontFamily: 'Roobert',
        fontSize: 12
    },
    tag: {
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
    },
    title: {
        color: 'grey',
        fontSize: 13,
        lineHeight: 20
    },
    category: {
        color: 'grey',
        fontSize: 13,
        fontFamily: 'Roobert',
        marginTop: 2
    },
    profileImg: {
        height: 20,
        width: 20,
        borderRadius: 10
    },
});
