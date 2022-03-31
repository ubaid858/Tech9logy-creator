import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DP } from 'global/Constant'

const CircleDot = ({ item }) => {
    return (
        <View style={styles.row}>
            <View style={styles.dotView}>
                <View style={[styles.colorView, { backgroundColor: item.color }]}></View>
                <Text style={styles.nameText}>{item.nam} </Text>
                <Text style={styles.percentage}>{item.percentage}% </Text>
            </View>
        </View>
    )
}

export default CircleDot

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: DP(25)
    },
    dotView: {
        flexDirection: 'row',
        marginLeft: DP(50),
        alignItems: 'center'
    },
    colorView: {
        height: DP(15),
        width: DP(15),
        borderRadius: 100,
        marginRight: DP(10)
    },
    nameText: {
        color: '#808080'
    },
    percentage: {
        fontWeight: 'bold'
    }
})