import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';



export default function infoProfile() {

    const [follow, setFollow] = useState("Seguir");

    function changeFollowButtom() {
        if (follow == "Seguir") {
            setFollow("Siguiendo")
        } else {
            setFollow("Seguir")
        }
    }
    function isFollowing(value) {
        if (value) {
            setFollow("Siguiendo");
        } else {
            setFollow("Seguir");
        }
    }

    return (
        <View >

            <Text style={styles.userName}>TestUsername </Text>

            <View style={styles.row}>
                <PreviewLayout
                    value={follow}
                    selectedValue={follow}
                    setSelectedValue={changeFollowButtom}
                ></PreviewLayout>

                <View style={styles.columm}>
                    <Text style={styles.followingCount}>100 </Text>
                    <Text style={styles.TextFollow}> Seguidos</Text>
                    <Text style={styles.followingCount}>85 </Text>
                    <Text style={styles.TextFollow}> Seguidores</Text>

                </View>
            </View>
        </View >
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

const styles = StyleSheet.create({
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
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    followingCount: {
        paddingHorizontal: "13%",
        textAlign: "center",
        color: "white",
        paddingTop: 10,
        fontWeight: "bold"
    },
    TextFollow: {
        textAlign: "center",
        color: "white",
        fontWeight: "300"
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

});