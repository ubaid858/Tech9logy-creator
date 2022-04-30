import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

import Video from 'react-native-video';

//redux
import { connect } from 'react-redux'
import * as UserActions from '@redux/actions/userActions';

//styles
import { DP, SCREEN_WIDTH } from 'global/Constant';

//svg
import Fav from '../assets/svgs/star';
import FavAdd from '../assets/svgs/star-Yellow';
import VidSvg from '../assets/svgs/volumeOn';

//component
import ImageModal from './ImageModal';


const HomeCart = ({ item, dispatch, cart }) => {

    const [imageOpen, setImageOpen] = useState(false)
    const [favCart, setfavCart] = useState(false)
    const [imageUrl, setImageUrl] = useState('');
    const [isMute, setIsMute] = useState(false)
    const [isPause, setIsPause] = useState(false)

    const onImageShow = () => {
        setImageOpen(!imageOpen)
    }

    return (
        <View style={styles.cart}>
            <View style={styles.imageVideoView}>
                {
                    item.type == 'images' ?
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                setImageUrl(item.imageUrl)
                                onImageShow(true)
                            }}
                        >
                            <Image
                                source={{ uri: item.imageUrl }}
                                style={{ height: '100%', width: '100%', borderRadius: DP(10) }}
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                setIsMute(!isMute)
                                setIsPause(!isPause)
                            }}
                        >
                            <Video
                                source={{ uri: item.videoUrl }}
                                resizeMode='contain'
                                repeat={true}
                                paused={isPause}
                                muted={isMute}
                                focusable={false}
                                style={{ height: '100%', width: '100%', borderRadius: DP(10) }}
                            />
                            <View style={styles.videoShow}>
                                <VidSvg />
                            </View>
                        </TouchableOpacity>
                }
            </View>
            <View style={styles.nameView}>
                <Text style={styles.name}>{item.Name}</Text>
                <TouchableOpacity
                    onPress={() => {
                        setfavCart(!favCart)
                        if (favCart) {
                            cart.splice(cart.indexOf(item), 1)
                        } else {
                            dispatch(UserActions.setCart([...cart, item]))
                        }
                    }}>
                    {
                        favCart ?
                            <FavAdd />
                            :
                            <Fav />
                    }
                </TouchableOpacity>
            </View>
            <ImageModal
                visibility={imageOpen}
                onClose={onImageShow}
                imageUrl={imageUrl}
            />
        </View>
    )
}


const mapStateToProps = (state) => ({
    cart: state.cart
});
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(HomeCart)


const styles = StyleSheet.create({
    cart: {
        marginHorizontal: DP(10),
        backgroundColor: '#fff',
        marginTop: DP(10),
        borderRadius: DP(10)
    },
    imageVideoView: {
        height: DP(200),
        marginHorizontal: DP(10),
        width: SCREEN_WIDTH - 50,
        alignSelf: 'center',
        marginTop: DP(10),
        borderRadius: DP(10)
    },
    nameView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: DP(15),
        marginVertical: DP(10),
    },
    name: {
        fontWeight: 'bold',
        fontSize: DP(15),
        marginBottom: DP(15),
    },
    videoShow: {
        height: DP(25),
        width: DP(25),
        position: 'absolute',
        top: DP(15),
        left: DP(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 100
    }
})