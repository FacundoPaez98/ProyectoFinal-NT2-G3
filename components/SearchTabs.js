import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchUser from "./SearchUser"
import SearchMovie from "./SearchMovie"

const Tab = createMaterialTopTabNavigator();

function SearchTabs() {

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

export default SearchTabs;