import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import GlobalContext from './global/context';

function Logout() {

    const {dataUsuario, setAuthenticated} = useContext(GlobalContext);
    const logout = () => {
        cleanContext();
        setAuthenticated(false)
    }

    function cleanContext(){
        dataUsuario.token = null;
        dataUsuario.usuario._id = null;
        dataUsuario.usuario.nombre = null;
        dataUsuario.usuario.apellido = null;
        dataUsuario.usuario.email = null;
        dataUsuario.usuario.username = null;
        dataUsuario.usuario.seguidores = null;
        dataUsuario.usuario.seguidos = null;
        dataUsuario.usuario.titulos = null;
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4A5156' }}>
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "lightblue",
        paddingVertical: 15,
        paddingHorizontal: 70,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: 'black',
    }
});

export default Logout;