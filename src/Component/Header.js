import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DP } from 'global/Constant'
import { Colors } from 'global/index'

import Burger from '../assets/svgs/Burger';
import Bell from '../assets/svgs/bell'

const Header = () => {
    return (
        <View style={styles.headr}>
            <View style={styles.iconView}>
                <Burger />
            </View>
            <Text style={styles.headerText}>portfolio</Text>
            <View style={styles.iconView}>
                <Bell />
                <View style={styles.dot}></View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: DP(15),
        marginHorizontal: DP(15)
    },
    iconView: {
        backgroundColor: Colors.WHITE,
        height: DP(40),
        width: DP(40),
        elevation: 2,
        borderRadius: DP(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    dot: {
        height: DP(10),
        width: DP(10),
        borderRadius: 100,
        backgroundColor: '#6990F0',
        position: 'absolute',
        top: -3,
        right: -3,

    }
})