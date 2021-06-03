import * as React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Login";

const Stack = createStackNavigator();


function Search() {
    return (
        <View>
        <NavigationContainer independent={true}>
            <Stack.Navigator name='Usuarios'component={Login}/>
        </NavigationContainer>
        </View> 


    );
}

export default Search;