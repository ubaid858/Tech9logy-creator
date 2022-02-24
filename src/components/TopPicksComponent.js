import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

//styles
import { DP } from 'global/constants'
import { Colors, Fonts } from 'global/index'


const TopPickComponent = ({ item }) => {

    return (
        <View style={styles.cartView}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time} mins</Text>
            {
                item.off &&
                <View style={{ position: 'absolute', top: 60, marginLeft: DP(5) }}>
                    <Text style={styles.offTxt}>{item.off}% OFF</Text>
                    <Text style={styles.uptoTxt}>UPTO ₹100</Text>
                </View>
            }
        </View>
    )
}

export default TopPickComponent

const styles = StyleSheet.create({
    cartView: {
        width: DP(75),
        backgroundColor: Colors.WHITE,
        marginTop: DP(20),
        marginLeft: DP(12)
    },
    image: {
        width: DP(75),
        height: DP(90),
        borderRadius: DP(5),
        backgroundColor: '#000',
        opacity: 0.7
    },
    title: {
        marginTop: DP(5),
        fontFamily: Fonts.SEMIBOLD
    },
    time: {
        fontFamily: Fonts.MEDIUM,
        color: '#808080',
        fontSize: 12,
        marginBottom: DP(20),
        marginTop: DP(2)
    },
    offTxt: {
        color: Colors.WHITE,
        fontSize: 13,
        fontWeight: 'bold',
    },
    uptoTxt: {
        fontSize: 9,
        fontFamily: Fonts.BOLD,
        color: Colors.WHITE,
        marginTop: -2
    }
})