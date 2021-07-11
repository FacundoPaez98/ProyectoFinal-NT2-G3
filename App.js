import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from "@expo/vector-icons";
import Home from "./components/screens/Home";
import Search from "./components/screens/Search";
import Profile from "./components/screens/Profile";
import Logout from './components/screens/Logout';
import Login from "./components/Login";
import GlobalContext from "./components/global/context";
import { navigationRef } from './utils/RootNavigation';
import AsyncStorage from "./utils/AsyncStorage";

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
  const [authenticated, setAuthenticated] = useState(false)

  const checkUser = async () => {
    const user = await AsyncStorage.getData('@userData')
    if (user) {
      changeContext(user);
      setAuthenticated(true)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])

  const applyAuthentication = (user) => {
    // TODO: Falta la validacion con el Backend (Ref OpenID protocol)
    AsyncStorage.storeData('@userData', user)
    checkUser()
  }

  function changeContext(data){
    dataUsuario.token = data.token;
    dataUsuario.usuario._id = data.usuario._id;
    dataUsuario.usuario.nombre = data.usuario.nombre;
    dataUsuario.usuario.apellido = data.usuario.apellido;
    dataUsuario.usuario.email = data.usuario.email;
    dataUsuario.usuario.username = data.usuario.username;
    dataUsuario.usuario.seguidores = data.usuario.seguidores;
    dataUsuario.usuario.seguidos = data.usuario.seguidos;
    dataUsuario.usuario.titulos = data.usuario.titulos;
}



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
              <Tab.Screen
                name="Inicio"
                component={Home}
              />
              <Tab.Screen
                name="Buscar"
                component={Search}
              />
              <Tab.Screen
                name="Perfil"
                component={Profile}
              />
              <Tab.Screen
                name="Cerrar Sesion"
                component={Logout}
              />
            </Tab.Navigator>
          </NavigationContainer>
          :
          <Login
            applyAuthentication={applyAuthentication}
          />
      }
      <StatusBar style="light" backgroundColor="#393E41" />
    </GlobalContext.Provider>

  );
}