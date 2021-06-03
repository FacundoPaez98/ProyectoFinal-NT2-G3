import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function Search() {
    const [text, setText] = useState('');

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4A5156' }}>
            <TextInput
                style={styles.input}
                value={text}
                placeholder={'Harry Potter, Lord of the Rings...'}
                placeholderTextColor="#CEDAD9"
                onChangeText={(text) => setText(text)}
            />

            <TouchableOpacity onPress={() => alert('Buscando...')} style={styles.button}>
                <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 22,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: 280,
        color: '#E2EAE9',
    },
    button: {
        backgroundColor: "#5865F2",
        paddingVertical: 15,
        paddingHorizontal: 70,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    }
});

export default Search;