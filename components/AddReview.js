import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

function AddReview() {
    const [point, setPoint] = useState(1)
    const [textInputValue, onChangeText] = useState("");

    function minusPoint() {
        if (point > 1) {
            setPoint(point - 1)
        }
    }
    function plusPoint() {
        if (point < 10) {
            setPoint(point + 1)
        }
    }
    function putReview() {

        console.log("aca llamamos a la Api y metemos la reseña ", textInputValue, " y la puntuacion ", point)

    }

    return (
        <View style={{ alignItems: 'center', bottom: "20%" }}>
            <Text style={{ textAlign: 'center' }}>Puntuación</Text>
            <View style={{ flexDirection: 'row' }}>
                <Button
                    style={{ backgroundColor: "#ADD8E6" }}
                    title="-"
                    onPress={minusPoint}
                />

                <Text style={styles.title}> {point} </Text>

                <Button
                    style={{ backgroundColor: "#ADD8E6" }}
                    title="+"
                    onPress={plusPoint}
                />
            </View>
            <TextInput
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={textInputValue}
                placeholder="Escribi tu reseña!"
            />

            <Button
                style={{ backgroundColor: "#ADD8E6" }}
                title="Agregar"
                onPress={putReview}
            />


        </View>

    )
}
const styles = StyleSheet.create({
    input: {
        height: 100,
        margin: 12,
        borderWidth: 2,
    },
    title: {
        fontSize: 15,
        color: '#E2EAE9',
    },
});

export default AddReview;