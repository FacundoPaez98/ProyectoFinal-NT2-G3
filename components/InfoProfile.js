import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';


export default function infoProfile(){
    return (
            <View >
                <Text style={styles.userName}>TestUsername </Text>
                <View>
                    <Text style={styles.followingCount}>100
                        <Text style={styles.TextFollow}>Seguidos</Text>
                    </Text>
                    <Text style={styles.followersCount}>85
                        <Text style={styles.TextFollow}>Seguidores</Text>
                    </Text>
                </View>
            </View >
            );
    }


const styles = StyleSheet.create({
    userName: {
        paddingTop: 25,
        textAlign: 'center',
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    followingCount: {
        color: "white",
        left: 10,
        fontWeight: "bold"
    },
    TextFollow: {
        paddingLeft: 5,
        marginLeft: 5,
        color: "rgb(136, 153, 166)",
        fontWeight: "300"
    },
    followersCount: {
        color: "white",
        position: 'absolute',
        marginLeft: 5,
        right: 30,
        fontWeight: "bold"
    },
});