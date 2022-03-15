import React from 'react'
import { View, Text } from 'react-native';

//styles
import { styles } from './AboutDrawerStyle'
import { DP } from 'global/Constant'
import { connect } from 'react-redux';

const AboutDrawerScreen = ({ cart, favCart }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.employeeView, { marginTop: DP(40) }]}>
                <Text style={styles.nameText}>Employees</Text>
                <Text style={styles.numberText}>{cart.length}</Text>
            </View>
            <View style={styles.employeeView}>
                <Text style={styles.nameText}>Favourites</Text>
                <Text style={styles.numberText}>{favCart}</Text>

            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    name: state,
    cart: state.cart,
    favCart: state.favCart
});
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(AboutDrawerScreen);