import React, { useState } from 'react'
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native'

import axios from 'axios';

//styles
import { styles } from './LoginStyle'
import { ScreenNames } from 'global/index';
import { DP } from 'global/Constant';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responce, setResponce] = useState();
    const [error, setError] = useState()


    const formData = new FormData();
    formData.append("email", email)
    formData.append("password", password)

    const postLoginDetail = async () => {
        try {
            const responce = await axios.post('https://infocentroid.us/mental-mentor/api/login', formData)
            console.log('responce===>', responce.data);
            if (responce.data.response == true) {
                navigation.navigate(ScreenNames.HOME)
            } else {
                Alert.alert("Alert", "Something wrong")
            }
        } catch (error) {
            console.log('Error==>', error);
            setError(error)
        }
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: "https://static.vecteezy.com/system/resources/previews/000/543/929/large_2x/blue-abstract-honeycomb-background-with-curve-foreground-wallpaper-and-texture-concept-minimal-theme-vector-illustration-wave-and-shadow-style.jpg" }}
                style={styles.image}
            >
                <Text style={styles.imageText}>Welcome to Mentor</Text>
                <Text style={styles.imageText}>Application</Text>
                <Text style={styles.imageText}>Login</Text>
            </ImageBackground>
            <TextInput
                placeholder='Email'
                style={styles.textInputStyle}
                onChangeText={(e) => { setEmail(e) }}
                keyboardType="email-address"
                autoCapitalize='none'
            />
            <TextInput
                placeholder='Password'
                style={styles.textInputStyle}
                onChangeText={(p) => { setPassword(p) }}
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={() => {
                    postLoginDetail()
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginTop: DP(25) }]}>
                <Text style={styles.buttonText}>Sign-Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login