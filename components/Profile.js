
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InfoProfile from './InfoProfile';
import ScrollViewMovies from './ScrollViewMovies';



export default function Profile() {
    const [tabView, setTabView] = useState("Peliculas");

    function showData(value) {
        if (value === "Peliculas") {
            return <ScrollViewMovies />

        } if (value === "Reseñas") {
            return <Text>Reseñas!</Text>

        }
    }

    return (
        <View>
            <InfoProfile />
            <PreviewLayout
                values={["Peliculas", "Reseñas"]}
                selectedValue={tabView}
                setSelectedValue={setTabView}
            >

            </PreviewLayout>

            <View style= {styles.dataView}>
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
    <View style={{ padding: 10, flex: 1 }}>
        <View style={styles.row}>
            {values.map((value) => (
                <TouchableOpacity
                    key={value}
                    onPress={() => { setSelectedValue(value) }}
                    style={[
                        styles.button,
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
        flexGrow: 0,
        marginTop: '18%',
        marginBottom: '125%'
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 20,
    },
    button: {
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
        color: "white",
    },
});
