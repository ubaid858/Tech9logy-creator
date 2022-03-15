import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../global";
import { DP } from "../../global/Constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.GREEN,
        justifyContent: 'center',
    },
    button: {
        height: DP(50),
        backgroundColor: Colors.DARK_GREEN,
        marginHorizontal: DP(25),
        borderRadius: DP(3),
        justifyContent: 'center',
        alignContent: 'center',
    },
    buttonText: {
        color: Colors.WHITE,
        fontFamily: Fonts.BOLD,
        fontSize: 18,
        textAlign: 'center'
    }
})