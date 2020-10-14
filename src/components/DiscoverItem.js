import React from 'react'
import { StyleSheet, Image, Dimensions, TouchableOpacity, Text, View } from 'react-native'

const windowWidth = Dimensions.get('window').width;


const DiscoverItem = (props) => {
    return (
        <TouchableOpacity style={styles.card} activeOpacity={0.6}>
            <View style={styles.imgContainer}>
                <Image source={props.item.uri} style={styles.img} />
                <View style={styles.viewsWrapper}>
                    <Text style={styles.views}>{props.item.views} Viewers</Text>
                </View>
                <View style={styles.live}>
                    <Text style={styles.liveText}>LIVE</Text>
                </View>
            </View>
            <View style={styles.description}>
                <View style={{ flexDirection: 'row' }}>
                    <Text numberOfLines={1} style={styles.titleCategory}>{props.item.user} </Text>
                    <Text style={{ fontFamily: 'Roobert', color: 'grey', fontSize: 16 }}>streaming</Text>
                    <Text numberOfLines={1} style={styles.titleCategory}> {props.item.category}</Text>
                </View>

                <View style={styles.tag}>
                    <Text style={styles.tagText} numberOfLines={1}>{props.item.tags[0]} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )

}

export default DiscoverItem;


const styles = StyleSheet.create({

    card: {
        display: 'flex',
        flexDirection: 'column',
        width: windowWidth - 24,
    },
    description: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        paddingTop: 30,
    },
    imgContainer: {
        width: '100%',
        height: "75%",
        backgroundColor: '#6441a5'
    },
    img: {
        width: "100%",
        height: "100%",
    },
    titleCategory: {
        color: 'white',
        fontFamily: 'Roobert-bold',
        fontSize: 16,
    },
    viewsWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        borderRadius: 10,
        height: 20,
        position: 'absolute',
        bottom: 10,
        left: 10,
        width: '23%'
    },
    views: {
        color: 'lightgrey',
        alignSelf: 'center',
        fontFamily: 'Roobert',
        fontSize: 13
    },
    tag: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontFamily: 'Roobert',
        marginTop: 6,
        width: '15%'
    },
    live: {
        backgroundColor: 'red',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 22,
        top: 10,
        left: 10,
        borderRadius: 5,
    },
    liveText: {
        color: 'white',
        fontFamily: 'Roobert',
        fontSize: 13
    },
    tagText: {
        color: 'white'
    }
});
