import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DP } from 'global/Constant'
import { Colors } from 'global/index'

import Arrow from '../assets/svgs/left-arrow';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.header}>
            <Pressable
                onPress={() => { navigation.goBack() }}>
                <Arrow />
            </Pressable>
            <Text style={styles.headerText}>{title}</Text>
            <View></View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.GREEN,
        height: DP(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: DP(20)
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
})