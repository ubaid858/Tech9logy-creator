import React, { useState, useEffect } from 'react'
import { View, Text, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native'

//styles
import { styles } from './AddEmployeeDetailStyle'
import { DP } from '../../global/Constant';
import { ScreenNames } from '../../global';
import { connect } from 'react-redux';

const AddEmployeeDetailScreen = ({ cart }) => {

    const navigation = useNavigation()

    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [jobTitle, setJobTitle] = useState();
    const [salary, setSalary] = useState();

    const userData = {
        id: data.length + 1,
        firstName: firstName,
        lastName: lastName,
        email: email,
        jobTitle: jobTitle,
        salary: salary
    }

    const storeUserData = async (item) => {
        try {
            let valueStored = await AsyncStorage.getItem("userData");
            let getValue = JSON.parse(valueStored)
            if (getValue != null) {
                let value = JSON.stringify([...getValue, userData])
                await AsyncStorage.setItem("userData", value)
                setData([...value])
            } else {
                let value = JSON.stringify([userData])
                await AsyncStorage.setItem("userData", value)
                setData([...value])
            }
        } catch (error) {
            console.log('Error==>', error);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            storeUserData()
        }, [])
    );

    return (
        <>
            <StatusBar backgroundColor={'#DFE2E3'} barStyle="dark-content" />
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Enter employee details</Text>
                    <Text style={[styles.subHeader, { marginTop: DP(25) }]}>First Name</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => {
                            setFirstName(text)
                        }}
                        value={firstName}
                    />
                    <Text style={styles.subHeader}>Last Name</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => {
                            setLastName(text)
                        }}
                        value={lastName}
                    />
                    <Text style={styles.subHeader}>Email</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => {
                            setEmail(text)
                        }}
                        keyboardType="email-address"
                        autoCapitalize='none'

                    />

                    <Text style={styles.subHeader}>Job Title</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => {
                            setJobTitle(text)
                        }}
                        value={jobTitle}
                    />
                    <Text style={styles.subHeader}>Salary</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        onChangeText={(text) => {
                            setSalary(text)
                        }}
                        value={salary}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {

                        {
                            lastName && firstName && email && jobTitle && salary ?
                                storeUserData([...cart])
                                :
                                Alert.alert("Message", "Please fill all details")
                        }
                        setFirstName(''),
                            setLastName(''),
                            setJobTitle(''),
                            setSalary('')
                        {
                            lastName && firstName && email && jobTitle && salary &&
                                navigation.navigate(ScreenNames.DRAWER)
                        }

                    }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const mapStateToProps = (state) => ({
    name: state,
    cart: state.cart
});
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(AddEmployeeDetailScreen);