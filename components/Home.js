import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import GlobalContext from './global/context';

function Home() {
    const { dataUsuario } = useContext(GlobalContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4A5156' }}>
            <Text style={{ color: '#E2EAE9' }}>Bienvenido, {dataUsuario.usuario.nombre}!</Text>
        </View>
    );
}

export default Home;