import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import moment from 'moment';

const Test = () => {

    const birthYear = '1981';
    const birthMonth = "02";
    const bierthDate = "20";
    const currentDate = new Date();
    const currentYear = moment(currentDate).format("YYYY");
    const currentMonth = moment(currentDate).format("MM");
    const currentDay = moment(currentDate).format("DD");
    console.log(currentYear - birthYear);
    console.log(birthMonth - currentMonth);
    console.log(bierthDate - currentDay);
    const calculateAge = () => {

    }
    const userOB = new Date("1989/11/17")
    const today = new Date();
    const msDif = today - userOB;
    const age = Math.floor(msDif / (365.25 * 24 * 60 * 60 * 1000))
    console.log(age, 'aggg');
    return (
        <View>
            <Text>Test</Text>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({

})