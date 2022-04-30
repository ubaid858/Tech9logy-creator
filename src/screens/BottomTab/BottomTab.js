import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//styles
import { DP } from 'global/Constant';
import { Fonts, Colors, ScreenNames } from 'global/index';

//component
import Home from '../Home/Home';
import Favourite from '../Favourite/Favourite';

import HomeS from '../../assets/svgs/homeicon unselect';
import HomeSelect from '../../assets/svgs/logo'
import Offer from '../../assets/svgs/star';
import OfferBlue from '../../assets/svgs/star-Yellow';


const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    const MyTabBar = ({ state, descriptors, navigation }) => {
        return (
            <View style={styles.tabStyle}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;
                    const nameTab = ['Home', 'Favourite',]

                    const focus = [<HomeS />, <Offer />]
                    const focused = [<HomeSelect />, <OfferBlue />]

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    return (
                        <TouchableOpacity
                            activeOpacity={0.9}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: DP(5) }}
                        >
                            {
                                isFocused ?
                                    <View style={{ alignSelf: "center" }}>
                                        {focused[index]}
                                    </View>
                                    :
                                    <View style={{ alignSelf: "center" }}>
                                        {focus[index]}
                                    </View>
                            }

                            <Text style={{ color: isFocused ? Colors.PRIMARY_COLOR : '#808080', alignSelf: "center", fontFamily: Fonts.MEDIUM, fontSiz: DP(10) }}>
                                {nameTab[index]}
                            </Text>

                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}
            backBehavior='none' tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name={ScreenNames.HOME} component={Home} />
            <Tab.Screen name={ScreenNames.FAVOURITE} component={Favourite} />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    tabStyle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        // borderTopLeftRadius: DP(20),
        // borderTopRightRadius: DP(20),
        borderWidth: DP(1),
        borderColor: '#eeeeee',
        height: DP(55),
    }
})