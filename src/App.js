import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

//ThirdPartyLibrary
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//style
import { ScreenNames } from './global/index'

//screens
import Home from './screens/Home/Home';
import AddEmployeeDetailScreen from './screens/AddEmployDetail/AddEmployeeDetailScreen';
import EmployeeDetailScreen from './screens/EmployeeDetails/EmployeeDetailScreen';
import DrawerScreen from './screens/Drawer/DrawerScreen';
import SplashScreen from 'screens/Splash/SplashScreen';

import { Provider } from 'react-redux'
import { store } from './redux/store/store';

const App = () => {

  const Stack = createStackNavigator()
  const InitialRouteName = ScreenNames.SPLASH
  const showHeader = false;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: showHeader }}
          initialRouteName={InitialRouteName}>

          <Stack.Screen name={ScreenNames.SPLASH} component={SplashScreen} />
          <Stack.Screen name={ScreenNames.HOME} component={Home} />
          <Stack.Screen name={ScreenNames.ADDEMPLOYEEDETAIL} component={AddEmployeeDetailScreen} />
          <Stack.Screen name={ScreenNames.DRAWER} component={DrawerScreen} />
          <Stack.Screen name={ScreenNames.EMPLOYEDETAIL} component={EmployeeDetailScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
