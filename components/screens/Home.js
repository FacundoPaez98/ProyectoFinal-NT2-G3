import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import GlobalContext from '../global/context';

function Home() {
    const { dataUsuario } = useContext(GlobalContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4A5156' }}>
            <Text style={{ color: '#E2EAE9', fontSize: 40, paddingBottom: 40 }}>MovieList App!</Text>
            <Text style={{ color: '#E2EAE9', fontSize: 25 }}>Bienvenido, {dataUsuario.usuario.nombre}!</Text>
        </View>
    );
}

export default Home;