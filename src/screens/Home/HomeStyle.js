import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../global";
import { DP } from "../../global/Constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F4FC',
    },

    inputView: {
        height: DP(55),
        backgroundColor: Colors.WHITE,
        // marginTop: DP(10),
        flexDirection: 'row',
        alignItems: 'center'

    },

    textInput: {
        padding: 0,
        paddingLeft: DP(10),
        backgroundColor: Colors.GRAY,
        height: DP(35),
        marginHorizontal: DP(20),
        color: Colors.DARK,
        borderRadius: DP(5),
        width: DP(300)
    }

})