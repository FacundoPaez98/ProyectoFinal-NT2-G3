import React from 'react';
import { Text, View } from 'react-native';

function Test2({route}) {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4A5156' }}>
            <Text style={{ color: '#E2EAE9' }}>Test2</Text>
            <Text style={{ color: '#E2EAE9' }}>Pelicula: {route.params.titulo}</Text>
        </View>
    );
}

export default Test2;