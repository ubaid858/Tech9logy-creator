import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DP } from 'global/constants'
import { Fonts } from 'global/index'

const FoodComponent = ({ item }) => {
    return (
        <View style={{ marginLeft: DP(18), marginTop: DP(25) }}>
            <View style={styles.imageView}>
                <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Text style={styles.title}>{item.type}</Text>
            {
                item.new &&
                <View style={styles.newView}>
                    <Text style={styles.newTxt}>NEW</Text>

                </View>
            }
        </View>
    )
}

export default FoodComponent

const styles = StyleSheet.create({
    imageView: {
        borderWidth: DP(1),
        borderColor: '#bfbfbf',
        borderRadius: DP(15),
        width: DP(100),
        height: DP(70),
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: DP(15)
    },
    title: {
        textAlign: 'center',
        fontFamily: Fonts.BOLD,
        marginTop: DP(4),
    },
    newView: {
        backgroundColor: '#fed740',
        height: DP(14),
        width: DP(40),
        position: 'absolute',
        alignSelf: 'center',
        bottom: DP(17),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: DP(5),
        elevation: DP(2)
    },
    newTxt: {
        fontSize: 11,
        fontFamily: Fonts.BOLD,
        marginTop: DP(-2)
    }

})