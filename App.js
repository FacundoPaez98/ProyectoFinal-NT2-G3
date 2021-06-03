import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from "@expo/vector-icons";
import Home from "./components/Home";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Login from "./components/Login";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = "home";
                   } else if (route.name === 'Search') {
                    iconName = 'search1';
                  } else if (route.name === 'Profile'){
                    iconName = 'profile';
                  } else if (route.name === 'Login'){
                    iconName = 'login';
                  }
      
                  return <AntDesign name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#A5AAAE',
                keyboardHidesTabBar: true,
                style: {
                  backgroundColor: '#4A5156',
                  borderTopColor:'#111112',
                },
              }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Login" component={Login} />
      </Tab.Navigator>
      <StatusBar style="light" backgroundColor="#393E41"/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
