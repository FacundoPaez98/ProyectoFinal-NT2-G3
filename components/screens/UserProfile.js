import React, { useState, useContext, useEffect }from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScrollViewMovies from '../ScrollViewMovies';
import GlobalContext from '../global/context/index';
import Constants from 'expo-constants';
import Review from '../Review';
import AsyncStorage from '../../utils/AsyncStorage';

const URL_REVIEWS = "https://obscure-thicket-15756.herokuapp.com/api/reviews/user-reviews/";
const URL_FOLLOW = "https://obscure-thicket-15756.herokuapp.com/usuario/follow/";
const URL_UNFOLLOW = "https://obscure-thicket-15756.herokuapp.com/usuario/unfollow/";

function UserProfile({route}) {

    const [tabView, setTabView] = useState("Peliculas");
    const [reviews, setReviews] = useState([]);
    const [follow, setFollow] = useState("");
    const { dataUsuario } = useContext(GlobalContext);
    const [seguidores, setSeguidores] = useState(route.params.seguidores.length);

    async function buscarReviewsUsuario() {  
        let reqOption = {
            method: "GET",
        }
        let urlApi = URL_REVIEWS + route.params._id;
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            setReviews(data)
         }catch(e){
             alert("Error")
         }  
    }

    async function followUser(){
        let headers = new Headers();
        headers.append("Content-type", "application/json");
        let reqOption = {
            method: "POST",
            headers: headers,
            body: JSON.stringify({_id:route.params._id, username:route.params.username, titulos:route.params.titulos})
        }
        let urlApi = URL_FOLLOW + dataUsuario.usuario._id;
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            updateContext(data);
            await AsyncStorage.updateSeguidos('@userData', data.seguidos);
            setSeguidores(prev => prev + 1);
         }catch(e){
             alert("Error")
         } 
    }

    async function unfollowUser(){
        let reqOption = {
            method: "PUT",
        }
        let urlApi = URL_UNFOLLOW + dataUsuario.usuario._id + "/" + route.params._id;
        try{
            let data = await fetch(urlApi, reqOption).then(response => response.json());
            updateContext(data);
            await AsyncStorage.updateSeguidos('@userData', data.seguidos);
            setSeguidores(prev => prev - 1);
         }catch(e){
             alert("Error")
         }  
    }

    function updateContext(data){
        dataUsuario.usuario.seguidos = data.seguidos;
    }

    useEffect(() => {
        buscarReviewsUsuario();
        isFollowing();
    }, []);



    function changeFollowButtom() {
        if (follow == "Seguir") {
            followUser();
            setFollow("Dejar de seguir");
        } else {
            unfollowUser();
            setFollow("Seguir");
        }
    }

    function isFollowing() {
        const yaSiguiendo = dataUsuario.usuario.seguidos.find(user => user._id == route.params._id);

        if (yaSiguiendo) {
            setFollow("Dejar de seguir");
        } else {
            setFollow("Seguir");
        }
    }

    function showData(value) {
        if (value === "Peliculas") {
            if (route.params.titulos.length == 0) {
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>No hay titulos!</Text>
            } else {
            return  <ScrollViewMovies data = {route.params.titulos}/>
            }
            
        } if (value === "Reseñas") {
            if(reviews.length == 0){
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>Este usuario no tiene reseñas.</Text>
            } else {
                return <Review data = {reviews}/>
            }
            
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
        <View style={{ backgroundColor: '#4A5156', flex: 2  }}>
            <View >
                <Text style={styles.userName}>{route.params.username}</Text>

                <View style={styles.row}>
                    <PreviewLayout
                        value={follow}
                        selectedValue={follow}
                        setSelectedValue={changeFollowButtom}
                    />

                    <View style={styles.columm}>
                        <Text style={styles.followingCount}>{route.params.seguidos.length} </Text>
                        <Text style={styles.TextFollow}> Seguidos</Text>
                        <Text style={styles.followingCount}>{seguidores} </Text>
                        <Text style={styles.TextFollow}> Seguidores</Text>

                    </View>
                </View>
            </View >
            <PreviewLayoutListado
                values={["Peliculas", "Reseñas"]}
                selectedValue={tabView}
                setSelectedValue={setTabView}
            />

            <View style={styles.dataView, {flex: 4}}>
                {showData(tabView)}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    dataView: {
        justifyContent: "center",
        alignItems: 'center',
        flexGrow: 0,
        marginTop: '0%',
        marginBottom: '0%'
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
export default UserProfile;