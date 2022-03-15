import React from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'

//styles
import { styles } from './HomeStyle';
import { Colors, ScreenNames } from '../../global';

const Home = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor={Colors.DARK_GREEN} barStyle="light-content" />
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate(ScreenNames.DRAWER) }}
                    activeOpacity={0.9}
                    style={styles.button}>
                    <Text style={styles.buttonText}>ADD EMPLOYEE</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Home