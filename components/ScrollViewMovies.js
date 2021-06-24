import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const noImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";

const Item = ({ title, anio, foto }) => (
    <View style={styles.item}>
        {
            (foto) ?
                <Image style={styles.logo} source={foto}></Image>
                :
                <Image style={styles.logo} source={noImage}></Image>
        }
        <Text style={styles.title}>Titulo: {title}</Text>
        <Text style={styles.title}>Año de lanzamiento: {anio}</Text>
    </View>
);

const ScrollViewMovies = (props) => (

    <ScrollView>
        {
            props.data.map(function (item) {
                if(item.foto != null){
                    return (
                    <TouchableOpacity onPress={() => alert("redirigiendo al perfil de la pelicula...") } key={item.id}>
                        <Item title={item.titulo} anio={item.anio}  foto={item.foto.imageUrl} />
                    </TouchableOpacity>
                    )
                }
                else{
                    return (
                    <TouchableOpacity onPress={() => alert("redirigiendo al perfil de la pelicula...") } key={item.id}>
                        <Item title={item.titulo} anio={item.anio} />
                    </TouchableOpacity>
                    )
                }
            })
        }
    </ScrollView>

)

const styles = StyleSheet.create({

    item: {
        flexDirection: "row",
        backgroundColor: '#676C6F',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        flexDirection: "column",
        fontSize: 15,
        color: '#E2EAE9',
    },
    logo: {
        width: 100,
        height: 150,
    },
});

export default ScrollViewMovies;