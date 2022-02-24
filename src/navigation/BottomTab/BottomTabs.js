import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Swiggy from '../../assets/svgs/swiggy-svgrepo-com';
import Offer from '../../assets/svgs/food-svgrepo-com';
import Order from '../../assets/svgs/cat-food-svgrepo-com'
import Search from '../../assets/svgs/search';
import User from '../../assets/svgs/user'


//imports 
import { Fonts, ScreenNames } from 'global/index';
import { DP } from 'global/constants';

//screens
import Home from 'screens/Home/HomeScreen';
import Screen from 'screens/Dummy/Screen';

//stacks

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
      <View style={styles.view}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;
          const Narr = ['Swiggy', 'Food', 'Instamart', 'Search', 'Account']

          const arr = [<Swiggy />, <Offer />, <Order />, <Search />, <User />]
          const arr1 = [<Swiggy />, <Offer />, <Order />, <Search />, <User />]

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
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
              style={styles.subView}
            >
              {
                isFocused ?
                  <View style={{ alignSelf: "center" }}>
                    {arr1[index]}
                  </View>
                  :
                  <View style={{ alignSelf: "center" }}>
                    {arr[index]}
                  </View>
              }

              <Text style={[styles.title, { color: isFocused ? '#000' : '#808080', }]}>
                {Narr[index]}
              </Text>

            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name={ScreenNames.HOME} component={Home} />
      <Tab.Screen name="test1" component={Screen} />
      <Tab.Screen name="test2" component={Screen} />
      <Tab.Screen name="test3" component={Screen} />
      <Tab.Screen name="test4" component={Screen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
export const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: DP(1),
    borderColor: '#eeeeee',
    height: DP(60),
  },
  subView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    alignSelf: "center", fontFamily: Fonts.SEMIBOLD,
    fontSize: DP(10),
    marginTop: DP(3)
  }
})