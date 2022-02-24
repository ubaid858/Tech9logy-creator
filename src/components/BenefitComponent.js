import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

//styles
import { DP } from 'global/constants'
import { Colors } from 'global/'
import { Fonts } from 'global/'

const BenefitComponent = () => {
    return (
        <View style={styles.benefitView}>
            <Text style={styles.oneStyle}>One</Text>
            <Text style={styles.benefitText}>Get unlimited benefits @<Text style={styles.benefitRate}>75/month</Text> on Restautant & Genie >> </Text>
        </View>
    )
}

export default BenefitComponent

const styles = StyleSheet.create({
    benefitView: {
        height: DP(60),
        backgroundColor: Colors.PINK,
        marginTop: DP(20),
        width: DP(340),
        borderRadius: DP(15),
        flexDirection: 'row',
        // paddingHorizontal: DP(10),
        alignItems: 'center',
        alignSelf: 'center'
    },
    benefitText: {
        width: DP(260),
        fontSize: DP(15),
        fontFamily: Fonts.SEMIBOLD,
        color: '#e57373'
    },
    benefitRate: {
        fontFamily: Fonts.BOLD
    },
    oneStyle: {
        marginHorizontal: DP(10),
        fontSize: DP(18),
        fontWeight: "bold",
        color: '#ff6e40'
    }
})