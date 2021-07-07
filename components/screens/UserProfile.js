import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InfoProfile from '../InfoProfile';
import ScrollViewMovies from '../ScrollViewMovies';
import GlobalContext from '../global/context';

const URL = "https://obscure-thicket-15756.herokuapp.com/api/reviews/user-reviews/";

export default function UserProfile({route}) {

    const [tabView, setTabView] = useState("Peliculas");
    const [reviews, setReviews] = useState([]);
    const [follow, setFollow] = useState("");
    const { dataUsuario } = useContext(GlobalContext);

    async function buscarReviewsUsuario() {  
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

    useEffect(() => {
        buscarReviewsUsuario();
        //isFollowing();
    }, []);

    function changeFollowButtom() {
        if (follow == "Seguir") {
            setFollow("Siguiendo")
        } else {
            setFollow("Seguir")
        }
    }


    function isFollowing() {  //validar con el context si ya se lo sigue o no y q se ejecute ni bien se carga la vista
        if (true) {
            setFollow("Siguiendo");
        } else {
            setFollow("Seguir");
        }
    }

    function showData(value) {
        if (value === "Peliculas") {
            return <ScrollViewMovies data = {route.params.titulos}/>

        } if (value === "Reseñas") {
            return <Text>Reseñas!</Text>

        }
    }

    const PreviewLayout = ({
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
                            styles.followButton,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
    
            </View>
        </View>
    )
    const PreviewLayoutListado = ({
        values,
        selectedValue,
        setSelectedValue,
    
    }) => (
        <View style={{ padding: 10, flex: 1 }}>
            <View style={styles.row}>
                {values.map((value) => (
                    <TouchableOpacity
                        key={value}
                        onPress={() => { setSelectedValue(value) }}
                        style={[
                            styles.button,
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
            <View >

                <Text style={styles.userName}>{route.params.username} </Text>

                <View style={styles.row}>

                    <PreviewLayout
                        value={follow}
                        selectedValue={follow}
                        setSelectedValue={changeFollowButtom}
                    ></PreviewLayout>

                    <View style={styles.columm}>
                        <Text style={styles.followingCount}>{route.params.seguidos.length} </Text>
                        <Text style={styles.TextFollow}> Seguidos</Text>
                        <Text style={styles.followingCount}>{route.params.seguidores.length} </Text>
                        <Text style={styles.TextFollow}> Seguidores</Text>

                    </View>
                </View>
            </View >
            <PreviewLayoutListado
                values={["Peliculas", "Reseñas"]}
                selectedValue={tabView}
                setSelectedValue={setTabView}
            >
            </PreviewLayoutListado>

            <View style={styles.dataView}>
                {showData(tabView)}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    dataView: {
        flexGrow: 0,
        marginTop: '18%',
        marginBottom: '125%'
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
    },
    button: {
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
});
