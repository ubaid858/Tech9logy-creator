import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

//ThirdPartyLibrary
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//style
import { ScreenNames } from './global/index'

//screens
// import Home from './screens/Home/Home';
import BottomTab from './screens/BottomTab/BottomTab';


import { Provider } from 'react-redux'
import { store } from './redux/store/store';
import Test from 'screens/Test/Test';


const App = () => {

  const Stack = createStackNavigator();
  const InitialRouteName = ScreenNames.BOTTAMTAB
  const showHeader = false;

  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: showHeader }}
          initialRouteName={InitialRouteName}>

          <Stack.Screen name={ScreenNames.BOTTAMTAB} component={BottomTab} />
          {/* <Stack.Screen name={ScreenNames.HOME} component={Home} /> */}
          <Stack.Screen name={ScreenNames.TEST} component={Test} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
