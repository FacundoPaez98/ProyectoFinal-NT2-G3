import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import Constants from 'expo-constants';

const URL = "https://obscure-thicket-15756.herokuapp.com/reviews/title-reviews/"
const noImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";


export default function MovieProfile(props) {


    const [tabView, setTabView] = useState("Reviews");
    //const [reviews, setReviews] = useState([]);


    async function buscarApi() {
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL + "1" // props.route.params.tituloId;  el 1 es para probar
        try {
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            //setReviews(data)
        } catch (e) {
            alert("Error")
        }
    }
    function showData(value) {
        if (value === "Reviews") {
            if (true) { //validar si tiene reseñas
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>No hay reviews!</Text>
            } else {
                return //scrollviewreviews
            }

        } if (value === "Tu Reseña") {
            return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>Hace tu review!!</Text>

        }
    }

    console.log(props.route.params.foto.imageUrl)
    return (
        <View style={{ backgroundColor: '#4A5156' }}>
            <View style={styles.item}>
            <Text style={styles.userName}>{props.route.params.titulo} </Text>
            {
                (props.route.params.foto.imageUrl) ?
                    <Image style={styles.logo} source={{ uri: props.route.params.foto.imageUrl }}></Image>
                    :
                    <Image style={styles.logo} source={{ uri: noImage }}></Image>
            }
            </View>
            <PreviewLayout
                values={["Reviews", "Tu Reseña"]}
                selectedValue={tabView}
                setSelectedValue={setTabView}
            />
            <View style={styles.dataView, { flex: 4 }}>
                {showData(tabView)}
            </View>
        </View>
    );
}


const PreviewLayout = ({
    values,
    selectedValue,
    setSelectedValue,

}) => (
    <View style={{ padding: 10 }}>
        <View style={styles.row}>
            {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => { setSelectedValue(value) }}
                    style={[
                        styles.buttonList,
                        selectedValue === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

const styles = StyleSheet.create({
    userName: {
        paddingTop: Constants.statusBarHeight,
        textAlign: 'center',
        marginLeft: 20,
        fontSize: 28,
        color: "white",
        fontWeight: "bold"
    },
    dataView: {
        justifyContent: "center",
        alignItems: 'center',
        flexGrow: 0,
        marginTop: '18%',
        marginBottom: '125%'
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
    },
    buttonList: {
        height: 40,
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    selected: { //Color del boton seleccionado
        backgroundColor: "lightblue",
        borderWidth: 0,
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "500",
        color: "grey",
    },
    selectedLabel: { // Color del texto
        color: "black",
    },
    logo: {
        width: 100,
        height: 150,
    },
    item: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});