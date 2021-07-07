import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

function Review(props) {

    const Item = ({ texto }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{texto}</Text>
        </View>
    );

    return (
        <ScrollView>
            {
                props.data.map(function (item) {
                    return (
                        <Item key={item._id} texto={item.texto} />
                    )
                })
            }
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#676C6F',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 15,
        color: '#E2EAE9',
    },
});

export default Review;