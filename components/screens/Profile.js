
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InfoProfile from '../InfoProfile';
import ScrollViewMovies from '../ScrollViewMovies';
import GlobalContext from '../global/context';



export default function Profile() {
    const [tabView, setTabView] = useState("Peliculas");

    const { dataUsuario } = useContext(GlobalContext);

    function showData(value) {
        if (value === "Peliculas") {
            if (dataUsuario.usuario.titulos.length == 0) {
                return <Text style={{ fontSize: 15, color: '#E2EAE9' }}>No hay titulos!</Text>
            } else {
                return <ScrollViewMovies data={dataUsuario.usuario.titulos} />
            }

        } if (value === "Reseñas") {
            return <Text style={{ fontSize: 15, color: '#E2EAE9'}}>Reseñas!</Text>

        }
    }

    return (
        <View style={{ backgroundColor: '#4A5156', flex: 2 }}>
            <InfoProfile />
            <PreviewLayout
                values={["Peliculas", "Reseñas"]}
                selectedValue={tabView}
                setSelectedValue={setTabView}
            />
            <View style={styles.dataView, {flex: 4}}>
                {showData(tabView)}
            </View>
        </View>
    );
}


const PreviewLayout = ({
    values,
    selectedValue,
    setSelectedValue,

}) => (
    <View style={{ padding: 10}}>
        <View style={styles.row}>
            {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => { setSelectedValue(value) }}
                    style={[
                        styles.buttonList,
                        selectedValue === value && styles.selected,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}
                    >
                        {value}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    </View>
);

const styles = StyleSheet.create({
    dataView: {
        justifyContent: "center",
        alignItems: 'center',
        flexGrow: 0,
        marginTop: '18%',
        marginBottom: '125%'
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
    },
    buttonList: {
        height: 40,
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 10,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    selected: { //Color del boton seleccionado
        backgroundColor: "lightblue",
        borderWidth: 0,
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "500",
        color: "grey",
    },
    selectedLabel: { // Color del texto
        color: "black",
    },
});
