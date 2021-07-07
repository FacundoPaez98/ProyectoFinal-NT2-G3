import React, { useState, useContext }from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ScrollViewMovies from './ScrollViewMovies';
import GlobalContext from './global/context/index';
import Constants from 'expo-constants';

function Test1(props) {

    console.log(props.route.params.usuario.titulos)
    const [tabView, setTabView] = useState("Peliculas");
    
    const [follow, setFollow] = useState("");
    const { dataUsuario } = useContext(GlobalContext);

    function changeFollowButtom() {
        if (follow == "Seguir") {
            setFollow("Siguiendo")
        } else {
            setFollow("Seguir")
        }
    }


    function isFollowing() {  //validar con el context si ya se lo sigue o no y q se ejecute ni bien se carga la vista
        if (true) {
            setFollow("Siguiendo");
        } else {
            setFollow("Seguir");
        }
    }

    function showData(value) {
        if (value === "Peliculas") {
            return  <ScrollViewMovies data = {props.route.params.usuario.titulos}/>

        } if (value === "Reseñas") {
            return <Text>Reseñas!</Text>

        }
    }

    return (
        <View style={{ backgroundColor: '#4A5156' }}>
            <View >

                <Text style={styles.userName}>{props.route.params.usuario.username}</Text>

                <View style={styles.row}>

                    <PreviewLayout
                        value={follow}
                        selectedValue={follow}
                        setSelectedValue={changeFollowButtom}
                    ></PreviewLayout>

                    <View style={styles.columm}>
                        <Text style={styles.followingCount}>{props.route.params.usuario.seguidos.length} </Text>
                        <Text style={styles.TextFollow}> Seguidos</Text>
                        <Text style={styles.followingCount}>{props.route.params.usuario.seguidores.length} </Text>
                        <Text style={styles.TextFollow}> Seguidores</Text>

                    </View>
                </View>
            </View >
            <PreviewLayoutListado
                values={["Peliculas", "Reseñas"]}
                selectedValue={tabView}
                setSelectedValue={setTabView}
            >
            </PreviewLayoutListado>

            <View style={styles.dataView}>
                {showData(tabView)}
            </View>

        </View>
    );
}


const PreviewLayout = ({
    value,
    selectedValue,
    setSelectedValue,

}) => (
    <View style={{ padding: 10, flex: 1 }}>
        <View>
            <TouchableOpacity
                key={value}
                onPress={() => { setSelectedValue() }}
                style={[
                    styles.button,
                    selectedValue === value && styles.selected,
                ]}
            >
                <Text
                    style={[
                        styles.followButton,
                        selectedValue === value && styles.selectedLabel,
                    ]}
                >
                    {value}
                </Text>
            </TouchableOpacity>

        </View>
    </View>
)
const PreviewLayoutListado = ({
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
        marginTop: '0%',
        marginBottom: '0%'
    },
    row: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    columm: {
        flexDirection: "column",
        flexWrap: "wrap",
    },
    userName: {
        paddingTop: Constants.statusBarHeight,
        textAlign: 'left',
        marginLeft: 20,
        fontSize: 28,
        color: "white",
        fontWeight: "bold"
    },
    followingCount: {
        alignItems: 'center',
        paddingHorizontal: "13%",
        textAlign: "center",
        color: "white",
        paddingTop: 10,
        fontWeight: "bold"
    },
    TextFollow: {
        alignItems: 'center',
        textAlign: "center",
        color: "white",
        fontWeight: "300"
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
    button: {
        width: 100,
        height: 100,
        borderRadius: 100,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        textAlign: "center",
    },
    selected: {
        backgroundColor: "lightblue",
        borderWidth: 0,
    },
    selectedLabel: { // Color del texto
        color: "black",
        textAlign: "center",
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: "500",
        color: "grey",
    },

});
export default Test1;