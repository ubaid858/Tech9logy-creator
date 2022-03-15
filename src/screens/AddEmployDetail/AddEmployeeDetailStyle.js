import { StyleSheet } from 'react-native';

//styles
import { Colors, Fonts } from '../../global';
import { DP } from '../../global/Constant';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        justifyContent: 'space-between'
    },
    header: {
        textAlign: 'center',
        color: Colors.LIGHT_GREEN,
        marginTop: DP(25),
        fontSize: 20,
        fontFamily: Fonts.BOLD,
        lineHeight: DP(22)
    },
    subHeader: {
        marginTop: DP(15),
        marginHorizontal: DP(25),
        fontWeight: "500"
    },
    textInputStyle: {
        borderBottomWidth: DP(1.5),
        marginHorizontal: DP(25),
        height: DP(30),
        borderColor: Colors.LIGHT_GREEN,
        padding: 0,
        paddingLeft: DP(5)
    },
    button: {
        height: DP(45),
        backgroundColor: Colors.LIGHT_GREEN,
        marginHorizontal: DP(25),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: DP(6),
        marginBottom: DP(25),
        marginTop: DP(7)
    },
    buttonText: {
        color: Colors.WHITE,
        fontFamily: Fonts.BOLD,
        fontSize: 16
    }
})