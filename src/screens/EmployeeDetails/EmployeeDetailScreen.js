import React, { useEffect, useState, } from 'react';
import { View, Text, Alert, TouchableOpacity, TextInput } from 'react-native';


import CheckBox from '../../assets/svgs/check-box';
import CheckUnBox from '../../assets/svgs/check-box-unchecked';

//style
import { styles } from './EmployeeDetailsStyle';
import { DP } from '../../global/Constant';
import { connect } from 'react-redux';
import axios from 'axios';
import { URL } from 'global/ServerUrl';


const EmployeeDetailScreen = ({ navigation, }) => {

    const [checkName, setCheckName] = useState(false)
    const [query, setQuery] = useState('');
    const [topic, setTopic] = useState('');


    const formData = new FormData();
    formData.append("user_id", "1")
    formData.append("creator_name", "asad")
    formData.append("topic", topic)
    formData.append("query", query)
    formData.append("name_visible_status", checkName ? 1 : 0)
    formData.append("image", null)





    const postComments = async () => {
        try {
            const responce = await axios.post(`${URL}add_post`, formData)
            console.log('responce===>', responce.data);
            setTopic('')
            setQuery('')
        } catch (error) {
            console.log('Error===>', error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Comment</Text>
            </View>
            <TextInput
                placeholder='topic'
                style={styles.textInputStyle}
                onChangeText={(t) => { setTopic(t) }}
                value={topic}
            />
            <TextInput
                placeholder='query'
                style={[styles.textInputStyle, { marginTop: DP(20) }]}
                onChangeText={(q) => { setQuery(q) }}
                value={query}
            />
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => { setCheckName(!checkName) }}
                style={styles.checkView}>
                {
                    checkName ?
                        <CheckBox />
                        :
                        <CheckUnBox />
                }
                <Text style={styles.checkNameText}>Show my name</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    postComments()

                }}
                style={styles.postButton}>
                <Text style={styles.postText}>Post</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapStateToProps = (state) => ({
    name: state,
});
const mapDispatchToProps = (dispatch) => ({ dispatch });
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetailScreen)
