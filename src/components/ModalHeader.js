import React from 'react';
import { StyleSheet, TouchableHighlight, TouchableOpacity, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const ModalHeader = (props) => (
    <View style={styles.modalHeader}>
        <TouchableHighlight style={styles.modalHeaderLeft} onPress={props.onPress}>
            <Entypo name="cross" size={32} color='white' />
        </TouchableHighlight>
        <View style={styles.modalHeaderCenter}>
            <Text style={styles.modalHeaderTitle}>Sort and Filter</Text>
        </View>
        <TouchableOpacity style={styles.modalHeaderRight}>
            <Text style={styles.modalHeaderRightText}>Reset</Text>
        </TouchableOpacity>
    </View>
)

export default ModalHeader;

const styles = StyleSheet.create({
    modalHeader: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalHeaderTitle: {
        fontFamily: 'Roobert-bold',
        color: 'white',
        fontSize: 16
    },
    modalHeaderLeft: {
        flex: 0.15,
        alignItems: 'center',
        alignItems: 'flex-start',
        paddingLeft: 5
    },
    modalHeaderCenter: {
        flex: 0.7,
        alignItems: 'center'
    },
    modalHeaderRight: {
        flex: 0.15,
        alignItems: 'center'
    },
    modalHeaderRightText: {
        fontFamily: 'Roobert-bold',
        fontSize: 16,
        color: '#9146ff',
    }
});
