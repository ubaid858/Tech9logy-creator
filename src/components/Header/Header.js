import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DP } from 'global/constants'
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from 'global/index';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.directionView}>
                <Text style={styles.headerText}>Tech9Logy Creaters</Text>
                <Icon name="chevron-down" backgroundColor="#000" size={20} style={styles.down} />
            </View>
            <View>
                <View style={styles.directionView}>
                    <Icon2 name="brightness-percent" backgroundColor="#000" size={20} />
                    <Text style={styles.offerText}>Offer</Text>
                </View>

            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        marginTop: DP(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // height: DP(40),
        paddingHorizontal: DP(15)
    },
    directionView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontFamily: Fonts.BOLD,
        fontSize: 15
    },
    down: {
        marginTop: DP(3.5),
        marginLeft: DP(2)
    },
    offerText: {
        fontFamily: Fonts.SEMIBOLD,
        marginLeft: DP(3)
    }
})