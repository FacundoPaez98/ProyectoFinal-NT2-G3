import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import GlobalContext from '../global/context';
import Review from "../Review";

const URL = "https://obscure-thicket-15756.herokuapp.com/api/reviews/title-reviews/"



export default function MovieProfile({route}) {
    
    const [reviews, setReviews] = useState([]);
    const { dataUsuario } = useContext(GlobalContext);

    async function buscarReviewsPelicula() {  
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL + route.params.id;
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            setReviews(data)
         }catch(e){
             alert("Error")
         }  
    }

    useEffect(() => {
        buscarReviewsPelicula();
    }, []);

    return (
    <View style={{ backgroundColor: '#4A5156', flex: 2 }}>
        <Text style={styles.titulo}>{route.params.titulo} </Text>

        <View>
            {
                reviews.length == 0 ?
                <Text style={{ fontSize: 15, color: '#E2EAE9'}}>No hay reseñas!</Text>
                :
                <Review data={reviews}/>
            }
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
    titulo: {
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