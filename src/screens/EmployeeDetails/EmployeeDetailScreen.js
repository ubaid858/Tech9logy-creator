import React, { useEffect, useState, } from 'react';
import { View, Text, StatusBar, Pressable, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HamBurger from '../../assets/svgs/Burger'
import Menu from '../../assets/svgs/menu';
import Plus from '../../assets/svgs/plus';

import EmployeeCartComponet from '../../Component/EmployeeCartComponet';

//style
import { styles } from './EmployeeDetailsStyle';
import { DP } from '../../global/Constant';
import { ScreenNames } from '../../global';
import SortModal from 'src/Component/SortModal';
import { useFocusEffect } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native';
import { connect } from 'react-redux';


const EmployeeDetailScreen = ({ navigation, cart }) => {

    const [sortData, setSortData] = useState(cart)
    const [dataTemp, setdataTemp] = useState(cart)
    const [sortingCart, setSortingCart] = useState(false);
    const onRequestClose = () => {
        setSortingCart(!sortingCart)
    }


    const sortByFirstName = () => {
        const sort = cart.sort(function (a, b) {
            return a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1
        })
        setSortData(sort)
    }
    const sortByLastName = () => {
        const sort = cart.sort(function (a, b) {
            return a.lastName.toLowerCase() > b.lastName.toLowerCase() ? 1 : -1
        })
        setSortData(sort)
    }

    useEffect(() => {
        console.log(cart);
        setdataTemp([...cart])
    }, [cart])

    return (

        <>
            <StatusBar backgroundColor={'#FFF'} barStyle="dark-content" />

            <View style={styles.container}>
                <View style={styles.headerView}>
                    <View style={styles.burgerView}>
                        <Pressable
                            hitSlop={styles.hitSlop}
                            onPress={() => {
                                navigation.openDrawer()
                            }}
                        >
                            <HamBurger />
                        </Pressable>
                        <Text style={styles.indexText}>Index</Text>
                    </View>
                    <Pressable
                        hitSlop={styles.hitSlop}
                        onPress={onRequestClose}
                        style={{ marginRight: DP(15) }}>
                        <Menu />
                    </Pressable>
                </View>
                <FlatList
                    data={cart}
                    contentContainerStyle={{ paddingBottom: DP(25) }}
                    renderItem={({ item }) => {
                        return (
                            <View key={item.id}>
                                <EmployeeCartComponet item={item} />
                            </View>
                        )
                    }}
                />
                <TouchableOpacity
                    onPress={() => { navigation.replace(ScreenNames.ADDEMPLOYEEDETAIL) }}
                    style={styles.plusView}>
                    <Plus />
                </TouchableOpacity>
            </View>
            <SortModal
                visibility={sortingCart}
                onRequestClose={onRequestClose}
                sortByFirstName={sortByFirstName}
                sortByLastName={sortByLastName}
            />
        </>
    )
}

const mapStateToProps = (state) => ({
    name: state,
    cart: state.cart
});
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetailScreen)
