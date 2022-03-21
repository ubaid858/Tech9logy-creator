import { StyleSheet } from 'react-native';

import { Colors, Fonts } from '../../global'
import { DP } from '../../global/Constant';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EFF1F2"
    },
    header: {
        height: DP(50),
        backgroundColor: '#df8037',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: DP(20)
    },
    textInputStyle: {
        height: DP(55),
        marginTop: DP(50),
        marginHorizontal: DP(25),
        borderWidth: DP(1),
        borderColor: '#000000',
        borderRadius: DP(10),
        paddingLeft: DP(10),
        fontWeight: "500",
    },
    checkView: {
        backgroundColor: '#80808035',
        height: DP(55),
        marginTop: DP(25),
        marginHorizontal: DP(25),
        borderRadius: DP(5),
        flexDirection: "row",
        alignItems: 'center',
        paddingLeft: DP(15)
    },
    checkNameText: {
        fontSize: 15,
        fontWeight: '900',
        marginLeft: DP(10)
    },
    postButton: {
        height: DP(40),
        width: DP(150),
        marginTop: DP(100),
        backgroundColor: '#4c5d94',
        alignSelf: 'center',
        borderRadius: DP(5),
        justifyContent: 'center',
        alignItems: 'center'
    },
    postText: {
        color: Colors.WHITE,
        fontSize: 15,
        fontWeight: "bold",
        elevation: 4
    }
})