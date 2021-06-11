import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import SignUp from './SignUp';

function Login() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [showForm, setFlag] = useState(false)

    const volverDeRegistro = () => {
        setFlag(false)
 
    }
    
    async function loginUser() {
        // http://localhost:3000/login
        // Authorization: bearer access_token

        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({email:mail, password})
        }
        try{
           const usuario = await fetch("http://localhost:3000/usuarios/login", reqOption);
        }catch(e){
            console.log("fail")
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4A5156' }}>
            {
                (showForm) ?
                    <SignUp volverDeRegistro={volverDeRegistro}/>
                    :
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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

                        <Text style={{ color: '#00B0F4', marginBottom: 20, position: 'relative', right: 100 }}
                            onPress={()=>{setFlag(true)}}>
                            Registrate Aqui
                        </Text>

                        <TouchableOpacity onPress={loginUser} style={styles.button}>
                            <Text style={styles.buttonText}>Iniciar Sesión</Text>
                        </TouchableOpacity>
                    </View>
            }
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
    }
});

export default Login;