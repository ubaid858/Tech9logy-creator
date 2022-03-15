import { DP } from 'global/Constant';
import { StyleSheet } from 'react-native';
import { Colors } from '../../global';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center'
    },
    image: {
        height: DP(350),
        marginTop: DP(100),
        width: DP(250)
    },
    text: {
        fontSize: 28,
        fontWeight: "bold",
        color: Colors.DARK_GREEN
    }
})