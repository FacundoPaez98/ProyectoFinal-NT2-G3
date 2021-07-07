import React, { useContext } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import GlobalContext from './global/context';


export default function infoProfile() {

    const { dataUsuario } = useContext(GlobalContext);
    
    return (
        <View >

            <Text style={styles.userName}>{dataUsuario.usuario.username} </Text>

            <View style={styles.row}>
                <View style={styles.columm}>
                    <Text style={styles.followingCount}>{dataUsuario.usuario.seguidos.length} </Text>
                    <Text style={styles.TextFollow}> Seguidos</Text>
                    <Text style={styles.followingCount}>{dataUsuario.usuario.seguidores.length} </Text>
                    <Text style={styles.TextFollow}> Seguidores</Text>

                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
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
        fontWeight: "bold"
    },
    TextFollow: {
        alignItems: 'center',
        textAlign: "center",
        color: "white",
        fontWeight: "300"
    }
});