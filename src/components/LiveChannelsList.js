import React from 'react'
import { StyleSheet, View } from 'react-native'
import ChannelItem from './ChannelItem'

const LiveChannelsList = (props) => {
    const { items } = props
    return (
        <View style={styles.container}>
            {
                items.map(function (item, index) {
                    return (
                        <ChannelItem key={index} item={item} />
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
});

export default LiveChannelsList