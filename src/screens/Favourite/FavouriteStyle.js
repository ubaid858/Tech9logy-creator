import { Colors } from 'global/';
import { DP } from 'global/Constant';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    inputView: {
        height: DP(55),
        backgroundColor: Colors.WHITE,
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