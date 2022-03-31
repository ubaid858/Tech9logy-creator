import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, SafeAreaView, TextInput, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import Pie from 'react-native-pie'

import Dollar from '../../assets/svgs/dollar';
import Building from '../../assets/svgs/building';

//components
import Header from '../../Component/Header'


//styles
import { styles } from './HomeStyle'
import PlanComponent from 'src/Component/PlanComponent';
import { DP, SCREEN_WIDTH } from 'global/Constant';
import CircleDot from 'src/Component/CircleDot';


const dummyData = [
    {
        id: 1,
        planName: 'Basic Plan',
        price: '122 726',
        icon: <Dollar />
    },
    {
        id: 2,
        planName: 'Super Trader',
        price: '122 726',
        icon: <Building />
    },
    {
        id: 3,
        planName: 'Basic Plan',
        price: '122 726',
        icon: <Dollar />
    },
]

const charData = [
    {
        percentage: 46,
        color: '#B198EF',
        nam: 'Basic Plan'
    },
    {
        percentage: 36,
        color: '#6990F0',
        nam: 'Super Trader'
    },
    {
        percentage: 20,
        color: '#F6DDA2',
        nam: 'Gold+'
    },
]
const Home = () => {

    const widthAndHeight = 250
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#FF9800']

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.protifiloView}>
                <LinearGradient
                    colors={['#B198EF', '#6990F0']}
                    start={{ x: 0, y: 1 }} end={{ x: 1, y: -0.5 }}
                    style={styles.LinearGradientStyle} />
                <Text style={styles.protifiloText}>Your portfolio</Text>
                <Text style={styles.priceText}>$ 109 987 973</Text>
            </View>
            <View style={styles.productView}>
                <Text style={styles.productText}>Products</Text>
            </View>
            <FlatList
                data={dummyData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: DP(15), }}
                style={{ flexGrow: 0 }}
                renderItem={({ item }) => {
                    return (
                        <PlanComponent item={item} />
                    )
                }}
            />

            <View style={styles.shareView}>
                <Text style={styles.productText}>Shares of product</Text>
                <View style={styles.chartView}>
                    <Text style={styles.percentageText}>100%</Text>
                    <Pie
                        radius={80}
                        innerRadius={60}
                        sections={charData}
                        // strokeCap={'butt'}
                        dividerSize={1}
                        strokeCap={'round'}

                    />
                    <FlatList
                        data={charData}
                        renderItem={({ item }) => {
                            return (
                                <CircleDot item={item} />
                            )
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home
