import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AntDesign } from "@expo/vector-icons";
import SearchUser from "./SearchUser"
import SearchMovie from "./SearchMovie"

const Tab = createMaterialTopTabNavigator();

function Search() {

    return (
        <Tab.Navigator
            initialRouteName="SearchMovie"
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#A5AAAE',
                keyboardHidesTabBar: true,
                style: {
                    padding: 10,
                    backgroundColor: '#4A5156',
                    borderTopColor: '#111112',
                },
            }}>

            <Tab.Screen name="Usuario" component={SearchUser} />
            <Tab.Screen name="Pelicula" component={SearchMovie} />

        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 22,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: 280,
        color: '#E2EAE9',
    },
    button: {
        backgroundColor: "#5865F2",
        paddingVertical: 15,
        paddingHorizontal: 70,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    }
});

export default Search;