import Storage from "@react-native-async-storage/async-storage";

const AsyncStorage = {}

AsyncStorage.storeData = async (key, value) => {
    try {
        await Storage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e);
    }
}

AsyncStorage.getData = async (key) => {
    try {
        const value = await Storage.getItem(key)
        return JSON.parse(value)
    } catch (e) {
        console.log(e);
    }
}

AsyncStorage.clearAll = async () => {
    try {
        return await Storage.clear()
    } catch (error) {
        console.log(e);
    }
}

AsyncStorage.updateTitulos = async (key, value) => {
    try {
        await Storage.getItem(key)
            .then(data => {
                data = JSON.parse(data);
                data.usuario.titulos = value;
                Storage.setItem(key, JSON.stringify(data));
            })
    } catch (error) {
        console.log(e);
    }
}

AsyncStorage.updateSeguidos = async (key, value) => {
    try {
        await Storage.getItem(key)
            .then(data => {
                data = JSON.parse(data);
                data.usuario.seguidos = value;
                Storage.setItem(key, JSON.stringify(data));
            })
    } catch (error) {
        console.log(e);
    }
}

export default AsyncStorage