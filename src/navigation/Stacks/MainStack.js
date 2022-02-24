import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//global
import { ScreenNames } from 'global/index';



//tabs
import BottomTabs from 'navigation/BottomTab/BottomTabs';
import DummyTopTab from 'navigation/TobTabs/DummyTopTab/DummyTopTab';

//screens
import Screen from 'screens/Dummy/Screen';
import { StatusBar } from 'react-native';


const MainStack = ({
}) => {

  const Stack = createStackNavigator();

  const inititalRouteName = ScreenNames.BOTTOMTABS;

  const showHeader = false;

  return (
    <NavigationContainer>
      <StatusBar translucent={true} />
      <Stack.Navigator screenOptions={{ headerShown: showHeader }}
        initialRouteName={inititalRouteName}
      >

        <Stack.Screen name={ScreenNames.BOTTOMTABS} component={BottomTabs} />
        <Stack.Screen name={ScreenNames.HOME} component={Screen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
