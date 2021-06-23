import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ScrollView from './ScrollViewUser'


const URL = "http://localhost:3000/usuario/";

function SearchUser() {
    const [text, setText] = useState('');
    const [user, setUser] = useState([]);

    async function buscarApi() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "GET",
            headers: headers,
        }
        let urlApi = URL + text;
        try{
            const data = await fetch(urlApi, reqOption).then(response => response.json());
            setUser(data)
         }catch(e){
             alert("Error")
         }  
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#4A5156' }}>
            <View
            style={{ flex: 1, flexDirection: "row", justifyContent: 'center', alignItems: 'top',backgroundColor: '#4A5156' }}>
            <TextInput
                style={styles.input}
                value={text}
                placeholder={'Nombre usuario'}
                onChangeText={(text) => setText(text)}
            />

            <TouchableOpacity onPress={() => buscarApi()} style={styles.button}>
                <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
            </View>
            <View>
                <ScrollView data = {user}/>
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
        width: "45%"
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