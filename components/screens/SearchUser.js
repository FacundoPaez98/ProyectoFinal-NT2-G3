import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { dataUsuario } from '../global/context';
import ScrollView from '../ScrollViewUser'


const URL = "https://obscure-thicket-15756.herokuapp.com/usuario/";

function SearchUser() {
    const [text, setText] = useState('');
    const [user, setUser] = useState([]);

    async function buscarApi() {
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL + text;
        try {
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            data = data.filter(item => item._id != dataUsuario.usuario._id);
            setUser(data)
        } catch (e) {
            alert("Error")
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#4A5156' }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', backgroundColor: '#4A5156' }}>
                <TextInput
                    style={styles.input}
                    value={text}
                    placeholder={'Nombre usuario'}
                    placeholderTextColor='#E2EAE9'
                    onChangeText={(text) => setText(text)}
                />

                <TouchableOpacity onPress={() => buscarApi()} style={styles.button}>
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 6 }}>
                <ScrollView data={user} />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: "45%",
        color: '#E2EAE9'
    },
    button: {
        margin: 14,
        backgroundColor: "lightblue",
        borderRadius: 5,

    },
    buttonText: {
        padding: 10,
        fontSize: 18,
        color: 'black',
    }
});

export default SearchUser;