import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ScrollView from './ScrollViewMovies';

const URL = "http://localhost:3000/api/peliculas/"

function SearchMovie() {
    const [text, setText] = useState('');
    const [peliculas, setPeliculas] = useState([]);


    async function buscarApi() {
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL + text;
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            data.forEach(element => {
                element.foto = element.foto || {};
            });
            setPeliculas(data)
         }catch(e){
             alert("Error")
         }  
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#4A5156' }}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center', backgroundColor: '#4A5156' }}>
            <TextInput
                style={styles.input}
                value={text}
                placeholder={'Batman, Harry Potter...'}
                onChangeText={(text) => setText(text)}
            />

            <TouchableOpacity onPress={() => buscarApi()} style={styles.button}>
                <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
            </View>
            <View style={{ flex:6 }}>
                <ScrollView data = {peliculas}/>
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

export default SearchMovie;