import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SearchTabs from './SearchTabs';
import UserProfile from './UserProfile';
import MovieProfile from './MoviesProfile';

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
                component={UserProfile}
                />
                <SearchStack.Screen 
                name="PerfilPelicula" 
                component={MovieProfile}
                />
            </SearchStack.Navigator>
    );
}

export default Search;