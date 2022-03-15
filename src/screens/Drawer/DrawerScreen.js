import React from 'react'
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'

//styles
import { styles } from './DrawerStyle'
import { ScreenNames } from '../../global';
import EmployeeDetailScreen from '../EmployeeDetails/EmployeeDetailScreen';
import AboutDrawerScreen from 'screens/AboutDrawer/AboutDrawerScreen';

const DrawerScreen = () => {

    const Drawer = createDrawerNavigator()

    return (
        <View style={styles.container}>
            <Drawer.Navigator drawerContent={props => <AboutDrawerScreen{...props} />} >
                <Drawer.Screen name={ScreenNames.EMPLOYEDETAIL} component={EmployeeDetailScreen} />
            </Drawer.Navigator>
        </View>
    )
}

export default DrawerScreen
