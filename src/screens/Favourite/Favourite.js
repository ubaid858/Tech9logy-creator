import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Text, View, TextInput, FlatList } from 'react-native'

//redux
import { connect } from 'react-redux'

//component
import FavouriteCart from 'src/component/FavouriteCart'
import SortModal from 'src/component/SortModal'

import Cross from '../../assets/svgs/menu'


//styles
import { styles } from './FavouriteStyle'
import { DP } from 'global/Constant'

const Favourite = ({ cart }) => {

    const [searchItem, setsearcItem] = useState('');
    const [retunData, setRetunData] = useState(cart)

    const [onSortModal, setonSortModal] = useState(false)
    const onCloseModal = () => {
        setonSortModal(!onSortModal)
    }
    const searching = () => {
        const tempData = cart.filter((item) => {
            let str = item.Name.split(' ');
            console.log(str);
            for (let i = 0; i < str.length; i++) {
                if (str[i].toUpperCase().startsWith(searchItem.toUpperCase())) {
                    return true
                }
            }
        })
        setRetunData(tempData)
    }

    const asending = () => {
        retunData.sort((a, b) => (a.Name > b.Name) ? 1 : -1)
    }
    const desending = () => {
        retunData.sort((a, b) => (b.Name > a.Name) ? 1 : -1)
    }

    useEffect(() => {
        if (searchItem.length > 1) {
            searching()
        } else {
            setRetunData(cart)
        }
    }, [searchItem])


    console.log('cart', cart);
    return (
        <View style={styles.container}>

            <View style={styles.inputView}>
                <TextInput style={styles.textInput}
                    placeholder="Search"
                    onChangeText={(e) => { setsearcItem(e) }} />
                <TouchableOpacity
                    onPress={() => {
                        setonSortModal(true)
                    }}
                >
                    <Cross />
                </TouchableOpacity>
            </View>
            {
                cart.length > 0 ?
                    <FlatList
                        data={cart.length > 0 && cart}
                        contentContainerStyle={{ paddingBottom: DP(20) }}
                        renderItem={({ item }) => {
                            return (
                                <FavouriteCart item={item} />
                            )
                        }}
                    />
                    :
                    <Text style={{ position: 'absolute', top: '50%', left: '33%' }}>No Favourite available!</Text>
            }
            <SortModal
                visibility={onSortModal}
                onClose={onCloseModal}
                asending={asending}
                desending={desending}
            />
        </View>

    )
}

const mapStateToProps = (state) => ({
    cart: state.cart

});
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(Favourite)
