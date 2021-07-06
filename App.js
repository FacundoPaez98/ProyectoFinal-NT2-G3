import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from "@expo/vector-icons";
import Home from "./components/Home";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Logout from './components/Logout';
import Login from "./components/Login";
import GlobalContext from "./components/global/context";
import { navigationRef } from './utils/RootNavigation';

const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#29292f'
  },
};

export default function App() {

  const dataUsuario = useContext(GlobalContext);
  const [authenticated, setAuthenticated] = useState(true)

  return (
    <GlobalContext.Provider value={{ dataUsuario, setAuthenticated }}>
      {
        (authenticated) ?
          <NavigationContainer theme={MyTheme} ref={navigationRef}>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === 'Inicio') {
                    iconName = "home";
                  } else if (route.name === 'Buscar') {
                    iconName = 'search1';
                  } else if (route.name === 'Perfil') {
                    iconName = 'profile';
                  } else if (route.name === 'Cerrar Sesion') {
                    iconName = 'logout';
                  }

                  return <AntDesign name={iconName} size={size} color={color} />;
                },
              })}
              tabBarOptions={{
                activeTintColor: '#72d3f2',
                inactiveTintColor: '#A5AAAE',
                keyboardHidesTabBar: true,
                style: {
                  backgroundColor: '#4A5156',
                  borderTopColor: '#111112',
                },
              }}
            >
              <Tab.Screen name="Inicio" component={Home} />
              <Tab.Screen name="Buscar" component={Search} />
              <Tab.Screen name="Perfil" component={Profile} />
              <Tab.Screen name="Cerrar Sesion" component={Logout} />
            </Tab.Navigator>
          </NavigationContainer>
          :
          <Login></Login>
      }
      <StatusBar style="light" backgroundColor="#393E41" />
    </GlobalContext.Provider>

  );
}