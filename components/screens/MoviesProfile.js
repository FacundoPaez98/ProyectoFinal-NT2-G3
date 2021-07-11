import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import Constants from 'expo-constants';
import Review from "../Review";
import GlobalContext from '../global/context';
import AddReview from "../AddReview";

const URL_REVIEWS = "https://obscure-thicket-15756.herokuapp.com/api/reviews/title-reviews/"
const URL_ADD_MOVIE = "https://obscure-thicket-15756.herokuapp.com/usuario/add-pelicula/";
const URL_REMOVE_MOVIE = "https://obscure-thicket-15756.herokuapp.com/usuario/remove-pelicula/";
const noImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";

export default function MovieProfile({ route }) {

    const [tabView, setTabView] = useState("Reviews");
    const [reviews, setReviews] = useState([]);
    const { dataUsuario } = useContext(GlobalContext);
    const [addBoton, setBoton] = useState("+");
    const [reviewUsuario, setReviewUsuario] = useState({ _id: "", texto: "", puntaje: 1 });

    async function buscarReviewsPelicula() {
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL_REVIEWS + route.params.id;
        try {
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            setReviews(data)
            let revUser = data.find(review => review.usuarioId == dataUsuario.usuario._id);
            if (revUser != undefined) {
                setReviewUsuario({ _id: revUser._id, texto: revUser.texto, puntaje: revUser.puntaje });
            }
        } catch (e) {
            alert("Error")
        }
    }

    async function addMovie() {
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ foto: route.params.foto, id: route.params.id, titulo: route.params.titulo, anio: route.params.anio })
        }
        let urlApi = URL_ADD_MOVIE + dataUsuario.usuario._id;
        try {
            await fetch(urlApi, reqOption).then(response => response.json());
        } catch (e) {
            alert("Error")
        }
    }

    async function removeMovie() {
        let reqOption = {
            method: "PUT",
        }
        let urlApi = URL_REMOVE_MOVIE + dataUsuario.usuario._id + "/" + route.params.id;
        try {
            await fetch(urlApi, reqOption).then(response => response.json());
        } catch (e) {
            alert("Error")
        }
    }

    function showData(value) {
        if (value === "Reviews") {
            if (reviews.length == 0) {
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>No hay reseñas!</Text>
            } else {
                return <Review data={reviews} />
            }

        } if (value === "Tu Reseña") {
            return <AddReview tituloId={route.params.id} review={reviewUsuario} />

        }
    }

    function alreadyInList() {
        const yaAgregada = dataUsuario.usuario.titulos.find(movie => movie.id == route.params.id);

        if (yaAgregada) {
            setBoton("-");
        } else {
            setBoton("+");
        }
    }

    useEffect(() => {
        buscarReviewsPelicula();
        alreadyInList();
    }, []);

    function changeAddButtom() {
        if (addBoton == "+") {
            addMovie();
            setBoton("-");
        } else {
            removeMovie();
            setBoton("+");
        }
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

    const PreviewLayoutBoton = ({
        value,
        selectedValue,
        setSelectedValue,

    }) => (
        <View style={{ padding: 10, flex: 1 }}>
            <View>
                <TouchableOpacity
                    key={value}
                    onPress={() => { setSelectedValue() }}
                    style={[
                        styles.button,
                        selectedValue === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            { fontSize: 50 },
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
    return (
        <View style={{ backgroundColor: '#4A5156', flex: 2 }}>
            <View style={styles.columm}>

                <Text style={styles.titulo}>{route.params.titulo} </Text>
                <View style={styles.row}>
                    <View style={{ paddingLeft: "3%" , paddingTop:5}}>
                        {
                            (route.params.foto.imageUrl) ?
                                <Image style={styles.logo} source={{ uri: route.params.foto.imageUrl }}></Image>
                                :
                                <Image style={styles.logo} source={{ uri: noImage }}></Image>
                        }
                    </View>
                    <View style={{ paddingLeft: "20%", paddingTop: 10 }}>
                        <PreviewLayoutBoton
                            value={addBoton}
                            selectedValue={addBoton}
                            setSelectedValue={changeAddButtom}
                        />
                    </View>
                </View>
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

const styles = StyleSheet.create({
    titulo: {
        paddingTop: Constants.statusBarHeight,
        textAlign: 'center',
        marginLeft: 20,
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },
    logo: {
        width: 100,
        height: 150,
    },  dataView: {
        justifyContent: "center",
        alignItems: 'center',
        flexGrow: 0,
        marginTop: '18%',
        marginBottom: '125%'
    },
    row: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    columm: {
        flexDirection: "column",
        flexWrap: "wrap",
    },
    userName: {
        paddingTop: Constants.statusBarHeight,
        textAlign: 'left',
        marginLeft: 20,
        fontSize: 28,
        color: "white",
        fontWeight: "bold"
    },
    followingCount: {
        alignItems: 'center',
        paddingHorizontal: "13%",
        textAlign: "center",
        color: "white",
        paddingTop: 10,
        fontWeight: "bold",
    },
    TextFollow: {
        alignItems: 'center',
        textAlign: "center",
        color: "white",
        fontWeight: "300",
        paddingRight: 10
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
    buttonLabel: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "500",
        color: "grey",
    },
});