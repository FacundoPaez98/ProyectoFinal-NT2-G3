import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScrollViewMovies from './ScrollViewMovies';

function Profile() {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#4A5156' }}>
            <Text style={styles.text}>MI PERFIL</Text>

            <View >
            <Text style={styles.text1}>NOMBRE: John</Text>
            <Text style={styles.text1}>APELLIDO: Snow</Text>
            <Text style={styles.text1}>EMAIL: johns@gmail.com</Text>
            <Text style={styles.text2}>MI LISTA:</Text>

            <ScrollViewMovies/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#E2EAE9',
        fontSize: 30,
        marginTop: 30,
        marginBottom: 30,
    },
    text1: {
        color: '#E2EAE9',
        fontSize: 30,
    },
    text2: {
        color: '#E2EAE9',
        fontSize: 30,
        marginTop: 30,
    }
});

export default Profile;