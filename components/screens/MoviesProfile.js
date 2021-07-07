import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import Constants from 'expo-constants';
import Review from "../Review";
import GlobalContext from '../global/context';

const URL = "https://obscure-thicket-15756.herokuapp.com/api/reviews/title-reviews/"
const noImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";


export default function MovieProfile({route}) {


    const [tabView, setTabView] = useState("Reviews");
    const [reviews, setReviews] = useState([]);
    const { dataUsuario } = useContext(GlobalContext);
 
    async function buscarReviewsPelicula() {
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL + route.params.id;
        try {
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            setReviews(data)
        } catch (e) {
            alert("Error")
        }
    }
    function showData(value) {
        if (value === "Reviews") {
            if (reviews.length == 0) { 
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>No hay reseñas!</Text>
            } else {
                return <Review data={reviews}/>
            }

        } if (value === "Tu Reseña") {
            return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>Hace tu review!!</Text>

        }
    }

    useEffect(() => {
        buscarReviewsPelicula();
    }, []);

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

    return (
        <View style={{ backgroundColor: '#4A5156' }}>
            <View style={styles.item}>
            <Text style={styles.titulo}>{route.params.titulo} </Text>
            {
                (route.params.foto.imageUrl) ?
                    <Image style={styles.logo} source={{ uri: route.params.foto.imageUrl }}></Image>
                    :
                    <Image style={styles.logo} source={{ uri: noImage }}></Image>
            }
            </View>
            <PreviewLayout
                values={["Reviews", "Tu Reseña"]}
                selectedValue={tabView}
                setSelectedValue={setTabView}
            />
            <View style={styles.dataView}>
                {showData(tabView)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
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