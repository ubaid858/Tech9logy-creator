import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, TouchableOpacity, TextInput, FlatList, Text } from 'react-native'

import Cross from '../../assets/svgs/menu'

//components
import SortModal from 'src/component/SortModal';
import HomeCart from 'src/component/HomeCart';

//styles
import { styles } from './HomeStyle'
import { DP, } from 'global/Constant';

const dummy = [
    {
        id: 1,
        type: 'video',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
        Name: 'Awesome video',
        imageUrl: null
    },
    {
        id: 2,
        type: 'images',
        videoUrl: null,
        Name: 'very beautiful image',
        imageUrl: 'https://picsum.photos/id/1016/367/267',
    },
    {
        id: 3,
        type: 'video',
        videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
        Name: 'Funny video',
        imageUrl: null
    },

    {
        id: 4,
        type: 'images',
        videoUrl: null,
        Name: 'sun set image',
        discription: 'Cakes for makes Bass hukum kijiye',
        imageUrl: 'https://ychef.files.bbci.co.uk/1376x774/p08hq2br.jpg',
    },
]

const Home = ({ navigation }) => {

    const [onSortModal, setonSortModal] = useState(false)
    const [searchItem, setsearcItem] = useState('');
    const [retunData, setRetunData] = useState(dummy)


    const onCloseModal = () => {
        setonSortModal(!onSortModal)
    }
    const searching = () => {
        const tempData = dummy.filter((item) => {
            let str = item.Name.split(' ');
            console.log(str);
            for (let i = 0; i < str.length; i++) {
                if (str[i].toUpperCase().startsWith(searchItem.toUpperCase())) {
                    return true
                }
            }
        })
        console.log(tempData);
        setRetunData(tempData)
    }

    const asending = () => {
        retunData.sort((a, b) => (a.Name > b.Name) ? 1 : -1)
    }
    const desending = () => {
        retunData.sort((a, b) => (b.Name > a.Name) ? 1 : -1)
    }

    useEffect(() => {
        if (searchItem.length > 2) {
            searching()
        } else {
            setRetunData(dummy)
        }
    }, [searchItem])


    return (
        <SafeAreaView style={styles.container}>
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
                retunData.length > 0 ?
                    <FlatList
                        data={retunData}
                        contentContainerStyle={{ paddingBottom: DP(20) }}
                        renderItem={({ item }) => {
                            return (
                                <HomeCart item={item} />
                            )
                        }}
                    />
                    :
                    <Text style={{ position: 'absolute', top: '50%', left: '33%' }}>sorry no match data!!</Text>
            }
            <SortModal
                visibility={onSortModal}
                onClose={onCloseModal}
                asending={asending}
                desending={desending}
            />
        </SafeAreaView>
    )
}

export default Home
