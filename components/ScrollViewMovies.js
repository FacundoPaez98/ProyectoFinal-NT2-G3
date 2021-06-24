import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image} from 'react-native';

const Item = ({ title, anio, foto}) => (
    <View style={styles.item}>
        <Image style={styles.Logo} source={foto}></Image>
        <Text style={styles.title}>Titulo: {title}</Text>
        <Text style={styles.title}>Año de lanzamiento: {anio}</Text>
    </View>
);

const ScrollViewMovies = (props) => (
    
        <ScrollView style={styles.dataView}>
            {
                
                props.data.map(item =>
                    <Item title={item.titulo} anio={item.anio} key={item.id} foto={item.foto.imageUrl}/>
                )
                
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
    Logo: {
        width: 100,
        height: 150,
      },
});

export default ScrollViewMovies;