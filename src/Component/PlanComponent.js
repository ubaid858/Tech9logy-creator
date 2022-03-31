import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DP } from 'global/Constant'
import { Colors } from 'global/'
import Arrow from '../assets/svgs/right'


const PlanComponent = ({ item }) => {
    return (
        <View style={styles.cart}>
            <Text style={styles.planText}>{item.planName}</Text>
            <Text style={styles.priceText}>$ {item.price}</Text>
            <View style={styles.iconView}>
                <View style={{ marginBottom: DP(15) }}>{item.icon}</View>
                <View style={styles.leftView}>
                    <Arrow />
                </View>
            </View>
        </View>
    )
}

export default PlanComponent

const styles = StyleSheet.create({
    cart: {
        width: DP(180),
        backgroundColor: Colors.WHITE,
        marginVertical: DP(10),
        marginLeft: DP(15),
        borderRadius: DP(15),
        elevation: 1,
        paddingLeft: DP(10)
    },
    planText: {
        marginTop: DP(10),
    },
    priceText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: DP(10),
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: DP(15),
    },
    leftView: {
        backgroundColor: '#000',
        height: DP(20),
        width: DP(20),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginRight: DP(20)
    }
})