import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { DP, SCREEN_WIDTH } from 'global/constants'
import { Colors } from 'global/'
import { Fonts } from 'global/'

const CarouselComponent = ({ item }) => {
    return (
        <View style={{ marginLeft: -10 }}>
            <Image
                source={{ uri: item.imageUrl }}
                style={styles.imageCarousel}
            >
            </Image >
        </View>
    )
}

export default CarouselComponent

const styles = StyleSheet.create({
    imageCarousel: {
        height: DP(200),
        width: DP(320),
        borderRadius: DP(10),
        marginTop: DP(25),
    },
    title: {
        // color: Colors.PRIMARY_COLOR,
        textAlign: 'center',
        marginTop: DP(32),
        fontSize: DP(18),
        fontFamily: Fonts.BOLD,
        // fontWeight: 'bold'
    },
    description: {
        // color: Colors.DARK,
        textAlign: 'center',
        marginTop: DP(10),
        fontFamily: Fonts.MEDIUM,
        fontSize: DP(12),
        lineHeight: DP(20)
    },
    buyNowButton: {
        height: DP(24),
        width: DP(96),
        backgroundColor: Colors.WHITE,
        marginLeft: DP(40),
        borderRadius: DP(7),
        marginTop: DP(12),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buyNowtxt: {
        fontFamily: Fonts.BOLD,
        fontSize: DP(10)
    },
    LinearGradientStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderTopLeftRadius: DP(15),
        borderBottomLeftRadius: DP(15)
    }
})