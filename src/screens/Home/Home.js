import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StatusBar, FlatList } from 'react-native'

import Menu from '../../assets/svgs/Burger'
import Setting from '../../assets/svgs/setting-';
import Like from '../../assets/svgs/like';
import CommentSvg from '../../assets/svgs/com';

//styles
import { styles } from './HomeStyle';
import { Colors, ScreenNames } from '../../global';
import axios from 'axios';
import { URL } from 'global/ServerUrl';
import { DP } from 'global/Constant';

const Home = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [topic, setTopic] = useState()
    const getUserComments = async () => {
        const formData = new FormData()
        formData.append("post_id", "1")
        try {
            const responce = await axios.post(`${URL}get_post_detail`, formData);
            console.log('responce===>', responce.data);
            setData(responce.data.data.comments)
            setTopic(responce.data.data.topic)
        } catch (error) {
            console.log("Error==>", error);
        }
    }

    useEffect(() => {
        getUserComments()
    }, [])


    return (

        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.burgerView}>
                        <Menu />
                        <Text style={styles.headerText}>Home Page</Text>
                    </View>
                    <Setting />
                </View>
                <FlatList
                    data={data}
                    contentContainerStyle={{ paddingBottom: DP(20) }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.cartView}>
                                <Text style={styles.topicText}>Topic:- {topic}</Text>
                                <Text style={styles.comment}>{item.comment}</Text>
                                <Text style={styles.commenterName}>{item.commentor_name && `By :- ${item.commentor_name}`}</Text>
                                <View style={styles.likeCommentView}>
                                    <View style={styles.flexStyle}>
                                        <Like />
                                        <Text style={styles.likeCommentText}>Like</Text>
                                    </View>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={styles.flexStyle}>
                                        <CommentSvg />
                                        <Text style={styles.likeCommentText}>comments</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(ScreenNames.EMPLOYEDETAIL)
                }}
                style={styles.addButton}>
                <Text style={styles.addButtonText}>Add Comments</Text>
            </TouchableOpacity>
        </View>

    )
}

export default Home