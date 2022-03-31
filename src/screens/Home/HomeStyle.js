import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../global";
import { DP } from "../../global/Constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F4FC',
    },
    protifiloView: {
        height: DP(130),
        marginTop: DP(25),
        marginHorizontal: DP(20),
        justifyContent: 'center'
    },
    LinearGradientStyle: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: DP(25)
    },
    priceText: {
        fontSize: 28,
        marginLeft: DP(20),
        fontWeight: "bold",
        color: Colors.WHITE
    },
    protifiloText: {
        marginLeft: DP(20),
        marginBottom: DP(12),
        color: Colors.WHITE,
        fontWeight: "800"
    },
    productView: {
        height: DP(60),
        backgroundColor: Colors.WHITE,
        marginTop: DP(30),
        justifyContent: 'center',
        borderTopLeftRadius: DP(25),
        borderTopRightRadius: DP(25)
    },
    productText: {
        fontSize: 18,
        marginLeft: DP(20),
        fontWeight: '800',
    },
    shareView: {
        backgroundColor: Colors.WHITE,
        paddingTop: DP(10),
    },
    chartView: {
        marginLeft: DP(20),
        marginTop: DP(20),
        marginBottom: DP(50),
        flexDirection: 'row',
        alignItems: 'center'
    },
    percentageText: {
        position: 'absolute',
        left: DP(55),
        fontSize: 20,
        fontWeight: 'bold'
    }

})