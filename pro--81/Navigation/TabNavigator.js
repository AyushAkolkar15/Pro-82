import React from 'react';
import {createMaterialBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../Screens/Feed";
import CreatePost from "../Screens/CreatePost";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused 
            ? "home" 
            : "home-outline";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "create" : "create-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={RFValue(25)}
              color={color}
              style={styles.icons}
            />
          );
        }
      })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        >
            <Tab.Screen name="Home" component={Feed} />
            <Tab.Screen name="Profile" component={CreatePost} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator;