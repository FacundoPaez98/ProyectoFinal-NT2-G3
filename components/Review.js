import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

function Review(props) {

    const Item = ({ texto, puntuacion, username, titulo }) => (
        <View style={styles.item}>

            <Text style={styles.title}>{titulo}</Text>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.username}>{username}   <Text style={styles.titlePoint}> Puntaje: {puntuacion}</Text></Text>
            </View>
            <Text style={styles.texto}>{texto}</Text>

        </View>
    );

    return (
        <ScrollView>
            {
                props.data.map(function (item) {
                    return (
                        <Item key={item._id} texto={item.texto} puntuacion={item.puntaje}
                            titulo={item.titulo} username={item.username} />
                    )
                })
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#676C6F',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    texto: {
        fontSize: 15,
        color: '#E2EAE9',
    },
    username: {
        fontSize: 18,
        alignItems: "flex-start",
        color: '#E2EAE9',
    },
    title: {
        fontSize: 18,
        color: '#E2EAE9',
        alignItems: "center",
    },
    titlePoint: {
        alignItems: "flex-end",
        fontSize: 18,
        color: '#E2EAE9',
    },
});

export default Review;