import React from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity, Text, View } from 'react-native'
import { FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons'

const ModalBody = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>SORT</Text>

        <TouchableOpacity style={styles.sortViewers}>
            <TouchableHighlight style={styles.sortViewersLeft}>
                <FontAwesome5 name="sort-amount-down" size={24} color='#9146ff' />
            </TouchableHighlight>
            <View style={styles.sortViewersCenter}>
                <Text style={styles.textFilterMainLabel}>Viewers (High to Low)</Text>
                <Text style={styles.textFilterDescription}>Show channels based on number of viewers</Text>

            </View>
            <View style={styles.sortViewersRight}>
                <FontAwesome name="check" size={23} color='#9146ff' />
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sortViewers}>
            <TouchableHighlight style={styles.sortViewersLeft}>
                <FontAwesome name="heart-o" size={24} color='#9146ff' />
            </TouchableHighlight>
            <View style={styles.sortViewersCenter}>
                <Text style={styles.textFilterMainLabel}>Recommended For You</Text>
                <Text style={styles.textFilterDescription}>Show the most relevant channels based on your viewing history</Text>
            </View>
            <View style={styles.sortViewersRight}>
            </View>
        </TouchableOpacity>
        <View style={styles.searchAllTags}>
            <Text style={styles.title}>FILTER BY TAGS</Text>
        </View>
        <TouchableOpacity style={styles.searchAllTags}>
            <Text style={styles.titlePurple}>Search all tags</Text>
        </TouchableOpacity>
        <TouchableOpacity opacity={0.8} style={styles.purpleButton}>
            <Text style={styles.purpleButtonText}>Apply</Text>
        </TouchableOpacity>
    </View>


)

export default ModalBody

const styles = StyleSheet.create({
    container: {
        padding: 12,
        width: '100%',
        flex: 1,
    },
    title: {
        fontFamily: 'Roobert-bold',
        color: 'grey',
        paddingTop: 5,
        marginBottom: 5
    },
    titlePurple: {
        fontFamily: 'Roobert-bold',
        color: '#9146ff',
        fontSize: 16,
    },
    searchAllTags: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center'
    },
    sortViewers: {
        flexDirection: 'row',
        width: '100%',
        height: 70,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sortViewersLeft: {
        flex: 0.1,
        alignItems: 'center',
        paddingLeft: 5
    },
    sortViewersCenter: {
        flex: 0.8,
        paddingLeft: 5
    },
    sortViewersRight: {
        flex: 0.1,
        alignItems: 'center'
    },
    textFilterMainLabel: {
        fontFamily: 'Roobert-bold',
        fontSize: 17,
        color: 'white'
    },
    textFilterDescription: {
        fontFamily: 'Roobert',
        fontSize: 14,
        color: 'white',
        paddingTop: 5
    },
    purpleButton: {
        width: '100%',
        height: 40,
        borderRadius: 5,
        backgroundColor: '#9146ff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 12,
        right: 12
    },
    purpleButtonText: {
        fontFamily: 'Roobert-bold',
        color: 'white'
    }
});
