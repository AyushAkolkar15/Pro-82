import React from 'react';
import { DrawerProgressContext, createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from "./TabNavigator";
import Profile from "../Screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;