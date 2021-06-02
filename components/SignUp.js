import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function SignUp({ volverDeRegistro }) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                onChangeText={(text) => setPassword(text)}
            />

            <Text style={{ color: 'blue', marginBottom: 20, position: 'relative', right: 120 }}
                onPress={() => volverDeRegistro()}>
                Cancelar
            </Text>
            <TouchableOpacity onPress={() => alert('Registrandose...')} style={styles.button}>
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
    },
    text1: {
        position: 'relative',
        right: 90,
    },
    text2: {
        position: 'relative',
        right: 110,
    },
    text3: {
        position: 'relative',
        right: 120,
    }
});

export default SignUp;