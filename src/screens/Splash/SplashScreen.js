import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as UserAction from '../../redux/actions/userActions';

//styles
import { styles } from './SplashStyle'
import { connect } from 'react-redux';
import { ScreenNames } from 'global/index';
import { useFocusEffect } from '@react-navigation/native';

const SplashScreen = ({ dispatch, navigation, cart }) => {

    const setUserCart = (asyncCart) => {
        dispatch(UserAction.setCart([...asyncCart]))
    }

    const getUserData = async () => {
        try {
            let value = await AsyncStorage.getItem("userData");
            let getValue = JSON.parse(value)
            setUserCart(getValue);
        } catch (error) {
            console.log('ErrorAs', error);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getUserData()
        }, [])
    );

    useFocusEffect(
        React.useCallback(() => {
            setTimeout(() => {
                if (cart.length > 0) {
                    navigation.navigate(ScreenNames.DRAWER)
                } else {
                    navigation.navigate(ScreenNames.ADDEMPLOYEEDETAIL)
                }
            }, 1000);
        }, [])
    );


    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-one-line-drawing-vector-of-two-person-working-in-the-office-png-image_316333.jpg" }}
                style={styles.image}
            />
            <Text style={styles.text}>Welcome to App!</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart
});
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);