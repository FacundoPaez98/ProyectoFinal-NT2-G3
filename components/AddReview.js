import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import GlobalContext from "./global/context";

const URL = "https://obscure-thicket-15756.herokuapp.com/api/reviews";

function AddReview(props) {
    const [point, setPoint] = useState(props.review.puntaje)
    const [textInputValue, onChangeText] = useState(props.review.texto);
    const { dataUsuario } = useContext(GlobalContext);

    function minusPoint() {
        if (point > 1) {
            setPoint(point - 1)
        }
    }
    function plusPoint() {
        if (point < 10) {
            setPoint(point + 1)
        }
    }
    function putReview() {
        if(textInputValue == ""){
            removeReview();
        }
        else{
            updateReview();
        }
    }

    async function addReview() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ usuarioId: dataUsuario.usuario._id, tituloId: props.tituloId, texto: textInputValue, puntaje: point })
        }
        try {
            await fetch(URL, reqOption).then(response => response.json());
        } catch (e) {
            alert("Error")
        }
    }

    async function updateReview() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "PUT",
            headers: headers,
            body: JSON.stringify({ texto: textInputValue, puntaje: point })
        }
        let urlApi = URL + "/" + props.review._id;
        try {
            await fetch(urlApi, reqOption).then(response => response.json());
        } catch (e) {
            alert("Error")
        }
    }

    async function removeReview() {
        let reqOption = {
            method: "DELETE",
        }
        let urlApi = URL + "/" + props.review._id;
        try {
            await fetch(urlApi, reqOption).then(response => response.json());
        } catch (e) {
            console.log("Error");
        }
    }

    return (

        <View style={{ alignItems: 'center', bottom: "20%", top:"3%" }}>
            <Text style={{ textAlign: 'center' }}>Puntuación</Text>
            <View style={{ flexDirection: 'row' }}>
                <Button
                    style={{ backgroundColor: "#ADD8E6" }}
                    title="-"
                    onPress={minusPoint}
                />

                <Text style={styles.title}> {point} </Text>

                <Button
                    style={{ backgroundColor: "#ADD8E6" }}
                    title="+"
                    onPress={plusPoint}
                />
            </View>

            <TextInput
                style={styles.input}
                multiline={true}
                textAlignVertical="top"
                onChangeText={text => onChangeText(text)}
                value={textInputValue}
                placeholder="Escribi tu reseña!"
                placeholderTextColor='#E2EAE9'
            />
            {
                (props.review._id == "") ?
                    <Button
                        style={{ backgroundColor: "#ADD8E6" }}
                        title="Agregar"
                        onPress={addReview}
                    />
                    :
                    <Button
                        style={{ backgroundColor: "#ADD8E6" }}
                        title="Editar"
                        onPress={putReview}
                    />
            }
        </View>

    )
}
const styles = StyleSheet.create({
    input: {
        height: 50,
        width: "80%",
        margin: 12,
        borderWidth: 2,
        color: '#E2EAE9'
    },    item: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#676C6F',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 15,
        color: '#E2EAE9',
    },
    titlePoint: {
        alignItems: 'center',
        fontSize: 19,
        color: '#E2EAE9',
    },
});

export default AddReview;