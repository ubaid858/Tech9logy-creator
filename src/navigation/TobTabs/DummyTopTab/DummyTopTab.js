import React from 'react';
import { Text, View } from 'react-native';

//top tab third party
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//global
import { ScreenNames } from 'global/index';

//Screen
import HomeScreen from 'screens/Home/HomeScreen';
import Screen from 'screens/Dummy/Screen';

const DummyTopTab = ({
}) => {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name={ScreenNames.HOME} component={Screen} />
    </Tab.Navigator>
  );
}
export default DummyTopTab;
