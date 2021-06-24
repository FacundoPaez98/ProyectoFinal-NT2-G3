import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import GlobalContext from './global/context';

function Home() {
    const { dataUsuario } = useContext(GlobalContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4A5156' }}>
            <Text style={{ color: '#E2EAE9' }}>Bienvenido, {dataUsuario.usuario.nombre}!</Text>
            <View>
                <Text style={{alignItems: 'left', textAlign: 'Left',color: '#E2EAE9' }}>
                    Funcionalidades terminadas:
                </Text>
                <Text style={{ textAlign: 'cemter', justifyContent: 'center', flexDirection: 'column',color: '#E2EAE9'  }}>-Registro </Text>

                <Text style={{ textAlign: 'cemter', justifyContent: 'center', flexDirection: 'column',color: '#E2EAE9'  }}>-Iniciar sesión</Text>
                <Text style={{ textAlign: 'cemter', justifyContent: 'center', flexDirection: 'column',color: '#E2EAE9'  }}>-Cerrar sesión</Text>
                <Text style={{ textAlign: 'cemter', justifyContent: 'center', flexDirection: 'column',color: '#E2EAE9'  }}>-Entrar a Tu Perfil</Text>
                <Text style={{ textAlign: 'cemter', justifyContent: 'center', flexDirection: 'column',color: '#E2EAE9'  }}>-Ver tus Peliculas</Text>
                <Text style={{ textAlign: 'cemter', justifyContent: 'center', flexDirection: 'column',color: '#E2EAE9'  }}>-Buscar Usuario</Text>
                <Text style={{ textAlign: 'cemter', justifyContent: 'center', flexDirection: 'column',color: '#E2EAE9'  }}>-Buscar Película</Text>


                <Text style={{alignItems: 'left', textAlign: 'Left',color: '#E2EAE9'  }}>
                    Funcionalidades pendientes:
                </Text>
                <Text style={{ textAlign: 'cemter', justifyContent: 'center', flexDirection: 'column',color: '#E2EAE9'  }}>-Entrar a perfil de Usuario Buscado</Text>
                <Text style={{ textAlign: 'cemter', justifyContent: 'center', flexDirection: 'column',color: '#E2EAE9' }}>-Entrar a perfil de Película buscada</Text>
                <Text style={{ textAlign: 'cemter', justifyContent: 'center', flexDirection: 'column',color: '#E2EAE9' }}>-Dejar reseña y puntuación</Text>

            </View>
        </View>
    );
}

export default Home;