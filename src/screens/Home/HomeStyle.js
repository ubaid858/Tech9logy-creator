import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../global";
import { DP } from "../../global/Constant";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafc20',
        justifyContent: 'space-between'
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
    },
    header: {
        height: DP(55),
        backgroundColor: Colors.GREEN,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: DP(20)

    },
    burgerView: {
        flexDirection: "row",
        alignItems: 'center',
        marginLeft: DP(20)
    },
    headerText: {
        color: Colors.WHITE,
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: DP(25)
    },
    cartView: {
        backgroundColor: Colors.WHITE,
        marginTop: DP(12),
        marginHorizontal: DP(10),
        borderRadius: DP(5),
        elevation: 3
    },
    topicText: {
        color: Colors.GREEN,
        marginTop: DP(5),
        marginLeft: DP(5),
        fontWeight: "500",
        fontSize: 13
    },
    comment: {
        marginTop: DP(5),
        marginLeft: DP(10),
        fontSize: 15,
        fontWeight: '900',
        marginBottom: DP(20)
    },
    commenterName: {
        alignSelf: 'flex-end',
        marginRight: DP(10),
        fontSize: 13,
        color: "#00000080",
        marginBottom: DP(5)
    },
    likeCommentView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: DP(15),
        marginBottom: DP(15)
    },
    likeCommentText: {
        fontWeight: "bold",
        color: "#4c5d94",
        textAlign: 'center',
        marginLeft: DP(5)
    },
    flexStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    addButton: {
        height: DP(50),
        backgroundColor: Colors.GREEN,
        marginHorizontal: DP(25),
        borderRadius: DP(10),
        marginVertical: DP(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 15
    }
})