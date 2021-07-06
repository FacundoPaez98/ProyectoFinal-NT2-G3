import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import GlobalContext from '../global/context';

const URL = "http://localhost:3000/api/reviews/title-reviews/"



export default function MovieProfile(props) {
    
    const [reviews, setReviews] = useState([]);

    buscarApi();

    async function buscarApi() {         //Me parece q estoy poniendo mal el endpoint, se supone q le mando el ID del titulo
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL + "1" // props.data.id;  el 1 es para probar
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            setReviews(data)
         }catch(e){
             alert("Error")
         }  
    }
 
    return (
        <View >

        <Text style={styles.userName}>{props.data.titulo} </Text>

        <View style={styles.row}>
            <View style={styles.columm}>
                {buscarApi()}
                {
                reviews.map(function(item) {   //eaca solo listaria las reviews (pero no estan cargadas en la base con el nombre del usuario)
                    <Text style={item}>{item.texto}</Text>
                })
                }
            </View>
        </View>
    </View >
    );
}



const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        flex:1,
        flexDirection: "column",
        backgroundColor: '#676C6F',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    userName: {
        paddingTop: Constants.statusBarHeight,
        textAlign: 'left',
        marginLeft: 20,
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },

    button: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        textAlign: "center",
    },
    selected: {
        backgroundColor: "lightblue",
        borderWidth: 0,
    },
    selectedLabel: { // Color del texto
        color: "black",
        textAlign: "center",
    },

});