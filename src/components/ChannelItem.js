import React from 'react'
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'

const ChannelItem = (props) => (
    <TouchableOpacity activeOpacity={0.3}>
        <View style={styles.card}>
            <Image source={props.item.uri} style={styles.categoryImg} />
            <View style={styles.cardDescription}>
                <View style={styles.userWrapper}>
                    <Image source={props.item.profileImg} style={styles.profileImg} />
                    <Text style={styles.user}>{props.item.user}</Text>
                </View>
                <Text numberOfLines={1} style={styles.title}>{props.item.title}</Text>
                <Text style={styles.category}>{props.item.category}</Text>
                {props.item.tags.map((tag, index) => <View style={styles.tag} key={index}>
                    <Text style={{ color: 'white', fontSize: 12 }}>{tag}</Text>
                </View>)}
            </View>
            <View style={styles.viewsWrapper}>
                <Entypo name="controller-record" size={18} color="red" />
                <Text style={styles.views}>{props.item.views}</Text>
            </View>
        </View>
    </TouchableOpacity>
)

export default ChannelItem;


const styles = StyleSheet.create({
    card: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        marginBottom: 20
    },
    cardDescription: {
        paddingLeft: 15,
    },
    categoryImg: {
        height: 80,
        width: 140
    },
    titleCategory: {
        color: 'white',
        fontWeight: 'bold'
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
        paddingLeft: 5
    },
    title: {
        color: 'white',
        fontSize: 13,
        lineHeight: 20,
        fontFamily: 'Roobert'
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
    userWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});
