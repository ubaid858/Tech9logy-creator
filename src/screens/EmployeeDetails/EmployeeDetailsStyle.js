import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../global'
import { DP } from '../../global/Constant';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFF1F2"
    },
    headerView: {
        backgroundColor: Colors.GREEN,
        height: DP(80),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    burgerView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: DP(25)
    },
    indexText: {
        marginLeft: DP(25),
        fontSize: 20,
        fontFamily: Fonts.SEMIBOLD
    },
    plusView: {
        flex: 1,
        height: DP(40),
        width: DP(40),
        backgroundColor: Colors.GREEN,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: DP(20),
        position: 'absolute',
        bottom: DP(25),
        right: DP(25),
        elevation: DP(5),
    },
    hitSlop: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
    }
})