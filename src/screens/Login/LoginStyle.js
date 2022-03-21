import { DP } from 'global/Constant';
import { StyleSheet } from 'react-native';

import { Colors } from '../../global/index'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    image: {
        height: DP(250),
        width: '100%',
        justifyContent: 'center',

    },
    imageText: {
        color: Colors.WHITE,
        fontSize: 22,
        fontWeight: "700",
        marginLeft: DP(50)
    },
    textInputStyle: {
        backgroundColor: '#80808035',
        height: DP(55),
        marginTop: DP(20),
        marginHorizontal: DP(25),
        borderWidth: DP(1),
        borderColor: '#00000080',
        borderRadius: DP(10),
        paddingLeft: DP(10),
        fontWeight: "500",
    },
    button: {
        backgroundColor: "#808080",
        height: DP(35),
        alignSelf: 'center',
        width: DP(150),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: DP(2),
        marginTop: DP(100),
        elevation: DP(5)
    },
    buttonText: {
        color: Colors.WHITE,
        fontWeight: "700"
    }
})