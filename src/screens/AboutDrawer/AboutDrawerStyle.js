import { DP } from 'global/Constant'
import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../global'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    employeeView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: DP(15),
        marginTop: DP(15)
    },
    nameText: {
        fontWeight: "900",
        fontFamily: Fonts.MEDIUM,
    },
    numberText: {
        height: DP(25),
        width: DP(25),
        backgroundColor: '#f8f8f8',
        borderRadius: DP(100),
        textAlign: 'center',
        textAlignVertical: 'center',
        fontWeight: "900"
    }
})