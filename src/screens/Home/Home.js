import React, { useState } from 'react'
import { StyleSheet, View, Text, SafeAreaView, } from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';

//components

//styles
import { styles } from './HomeStyle'
import { DP, SCREEN_WIDTH, SCREEN_HEIGHT } from 'global/Constant';


const Home = () => {

    const [pin, setPin] = useState({ latitude: 18.516726, longitude: 73.856255 })

    const coordinate = [
        { latitude: 18.427294, longitude: 73.834800 },
        { latitude: 18.447780, longitude: 73.864209 },
        { latitude: 18.493596, longitude: 73.893367 },
        { latitude: 18.518526, longitude: 73.909895 },
        { latitude: 18.536748, longitude: 73.910800 },
        { latitude: 18.546718, longitude: 73.917565 },
        { latitude: 18.557990, longitude: 73.929164 },
        { latitude: 18.563455, longitude: 73.931159 },
        { latitude: 18.573455, longitude: 73.881159 },
        { latitude: 18.575125, longitude: 73.875251 },
        { latitude: 18.586094, longitude: 73.873829 },
        { latitude: 18.579134, longitude: 73.849111 },
        { latitude: 18.565380, longitude: 73.801720 },
        { latitude: 18.545770, longitude: 73.784505 },
        { latitude: 18.512135, longitude: 73.757968 },
        { latitude: 18.462260, longitude: 73.787538 },
        { latitude: 18.437709, longitude: 73.814829 },
        { latitude: 18.427294, longitude: 73.834800 },

    ]

    return (
        <SafeAreaView style={styles.container}>
            <MapView style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH, }}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: pin.latitude,
                    longitude: pin.longitude,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421,
                }}
            >
                <Polyline
                    coordinates={coordinate}
                    strokeColor="#000"
                    strokeWidth={1}
                />
                <Marker
                    coordinate={{ latitude: pin.latitude, longitude: pin.longitude }}
                />
            </MapView>
        </SafeAreaView>
    )
}

export default Home
