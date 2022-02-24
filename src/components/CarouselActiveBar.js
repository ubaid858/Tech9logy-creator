import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//styles
import { DP } from 'global/constants'

const CarouselActiveBar = ({ item, activeSlide }) => {
    return (
        <View style={styles.ActiveSlideView}>
            {
                item.map((item, index) => {
                    return (
                        index == activeSlide ?
                            <View style={styles.currentActiveSlideStyle}></View>
                            :
                            <View style={styles.activeSlideStyle}></View>
                    )
                })
            }
        </View>
    )
}

export default CarouselActiveBar

const styles = StyleSheet.create({
    ActiveSlideView: {
        alignSelf: 'center',
        marginTop: DP(25),
        height: DP(4),
        backgroundColor: '#80808040',
        borderRadius: DP(2),
        flexDirection: 'row',
    },
    activeSlideStyle: {
        backgroundColor: '#80808040',
        height: DP(4),
        width: DP(15),
        borderRadius: DP(2)
    },
    currentActiveSlideStyle: {
        backgroundColor: '#ff7043',
        height: DP(4),
        width: DP(15),
        borderRadius: DP(2),
    },
})