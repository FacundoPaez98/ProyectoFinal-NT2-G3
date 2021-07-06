import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SearchTabs from './SearchTabs';
import Test1 from '../Test1';
import Test2 from '../Test2';

const SearchStack = createStackNavigator();

function Search() {

    return (
            <SearchStack.Navigator
                screenOptions={{
                headerShown: false
                }}
            >
                <SearchStack.Screen 
                name="SearchTabs" 
                component={SearchTabs}
                />
                <SearchStack.Screen 
                name="PerfilUsuario" 
                component={Test1}
                />
                <SearchStack.Screen 
                name="PerfilPelicula" 
                component={Test2}
                />
            </SearchStack.Navigator>
    );
}

export default Search;