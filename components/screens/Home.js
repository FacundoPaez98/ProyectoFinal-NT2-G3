import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import GlobalContext from '../global/context';

function Home() {
    const { dataUsuario } = useContext(GlobalContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4A5156' }}>
            <Text style={{ color: '#E2EAE9' }}>Bienvenido, {dataUsuario.usuario.nombre}!</Text>
            <View>
                <Text style={{ alignItems: 'flex-start', textAlign: 'left', color: '#E2EAE9' }}>
                    Funcionalidades terminadas:
                </Text>
                <Text style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', color: '#E2EAE9' }}>-Registro </Text>

                <Text style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', color: '#E2EAE9' }}>-Iniciar sesión</Text>
                <Text style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', color: '#E2EAE9' }}>-Cerrar sesión</Text>
                <Text style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', color: '#E2EAE9' }}>-Entrar a Tu Perfil</Text>
                <Text style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', color: '#E2EAE9' }}>-Ver tus Peliculas</Text>
                <Text style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', color: '#E2EAE9' }}>-Buscar Usuario</Text>
                <Text style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', color: '#E2EAE9' }}>-Buscar Película</Text>


                <Text style={{ alignItems: 'flex-start', textAlign: 'left', color: '#E2EAE9' }}>
                    Funcionalidades pendientes:
                </Text>
                <Text style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column', color: '#E2EAE9' }}>-Dejar reseña y puntuación</Text>

            </View>
        </View>
    );
}

export default Home;