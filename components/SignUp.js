import React, { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import GlobalContext from './global/context';
import AsyncStorage from '../utils/AsyncStorage';

function SignUp({ volverDeRegistro }) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const { dataUsuario, setAuthenticated } = useContext(GlobalContext);

    async function registrarUsuario() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ nombre, apellido, email: mail, username, password })
        }

        try {
            const data = await fetch("https://obscure-thicket-15756.herokuapp.com/usuario/signup", reqOption).then(response => response.json());
            applyAuthentication(data);
        } catch (e) {
            console.log("mail o usuario ya en uso");
        }
    }

    const applyAuthentication = (user) => {
        // TODO: Falta la validacion con el Backend (Ref OpenID protocol)
        AsyncStorage.storeData('@userData', user)
        checkUser()
    }

    const checkUser = async () => {
        const user = await AsyncStorage.getData('@userData')
        if (user) {
          changeContext(user);
          setAuthenticated(true)
        }
    }

    function changeContext(data) {
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4A5156' }}>
            <Text style={styles.text1}>Nombre de Usuario</Text>
            <TextInput
                style={styles.input}
                value={username}
                onChangeText={(text) => setUsername(text)}
            />

            <Text style={styles.text3}>Nombre</Text>
            <TextInput
                style={styles.input}
                value={nombre}
                onChangeText={(text) => setNombre(text)}
            />

            <Text style={styles.text3}>Apellido</Text>
            <TextInput
                style={styles.input}
                value={apellido}
                onChangeText={(text) => setApellido(text)}
            />

            <Text style={styles.text1}>Correo Electrónico</Text>
            <TextInput
                style={styles.input}
                value={mail}
                keyboardType='email-address'
                onChangeText={(text) => setMail(text)}
            />

            <Text style={styles.text2}>Contraseña</Text>
            <TextInput
                style={styles.input}
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />

            <Text style={{ color: '#00B0F4', marginBottom: 20, position: 'relative', right: 120 }}
                onPress={() => volverDeRegistro()}>
                Cancelar
            </Text>
            <TouchableOpacity onPress={registrarUsuario} style={styles.button}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginBottom: 22,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        minWidth: 300,
        color: '#E2EAE9',
    },
    button: {
        backgroundColor: "lightblue",
        paddingVertical: 15,
        paddingHorizontal: 70,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
    },
    text1: {
        position: 'relative',
        right: 90,
        color: '#E2EAE9',
    },
    text2: {
        position: 'relative',
        right: 110,
        color: '#E2EAE9',
    },
    text3: {
        position: 'relative',
        right: 120,
        color: '#E2EAE9',
    }
});

export default SignUp;