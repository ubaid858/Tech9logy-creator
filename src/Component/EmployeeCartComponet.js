import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import YellowStar from '../assets/svgs/star-Yellow';
import BlackStar from '../assets/svgs/star';

import * as UserAction from '../redux/actions/userActions';


//styles
import { DP } from '../global/Constant'
import { Colors, Fonts } from '../global'
import { connect } from 'react-redux';

const EmployeeCartComponet = ({ item, dispatch, cart }) => {

    const [favoutite, setFavoute] = useState(false);

    return (
        <View style={styles.cartView}>
            <View style={styles.view}>
                <View style={styles.avtar}>
                    <Text style={styles.avtarText}>{item.firstName.charAt(0)}</Text>
                    <Text style={styles.avtarText}>{item.lastName.charAt(0)}</Text>
                </View>
                <View style={{ marginLeft: DP(15) }}>
                    <Text style={styles.nameTxt}>{item.firstName} {item.lastName}</Text>
                    <Text style={styles.jobStyle}>{item.jobTitle}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setFavoute(!favoutite)

                    if (favoutite == true) {
                        dispatch(UserAction.setFavCart([...cart]))
                    }
                }}
                style={styles.starView}>
                {
                    favoutite ?
                        <YellowStar />
                        :
                        <BlackStar />
                }
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => ({
    name: state,
    favCart: state.favCart,
    cart: state.cart
});
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeCartComponet);

const styles = StyleSheet.create({
    cartView: {
        height: DP(100),
        backgroundColor: Colors.WHITE,
        marginTop: DP(10),
        marginHorizontal: DP(10),
        borderRadius: DP(5),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avtar: {
        height: DP(50),
        width: DP(50),
        backgroundColor: Colors.GREEN,
        marginLeft: DP(15),
        borderRadius: DP(50),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    avtarText: {
        fontSize: DP(18),
        fontWeight: "600"
    },
    nameTxt: {
        fontSize: DP(16),
        fontFamily: Fonts.MEDIUM,
        color: '#000',
        lineHeight: 21
    },
    jobStyle: {
        fontFamily: Fonts.REGULAR,
        fontSize: 12,
        lineHeight: 21
    },
    starView: {
        marginRight: DP(15)
    }
})