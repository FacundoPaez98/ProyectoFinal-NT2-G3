import React from "react";

const dataUsuario = {
    token: null,
    usuario: {
        _id: null,
        nombre: null,
        apellido: null,
        username: null,
        email: null,
        seguidores: null,
        seguidos: null,
        titulos: null,
    }
}

export { dataUsuario }

export default React.createContext(dataUsuario)