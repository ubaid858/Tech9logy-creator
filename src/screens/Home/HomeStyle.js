import { StyleSheet } from "react-native";
import { Colors, Fonts } from "global/index";
import { DP } from "global/constants";

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: Colors.WHITE
    },

    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: DP(5)
    },
    activeView: {
        height: DP(6),
        width: DP(6),
        marginRight: DP(5),
        borderRadius: DP(3),
    },

    topPickupTitle: {
        flexDirection: 'row',
        marginTop: DP(20),
        marginLeft: DP(15),
        alignItems: 'center'
    },
    picksTitle: {
        marginLeft: DP(5),
        fontSize: 15,
        fontFamily: Fonts.BOLD
    }

})
