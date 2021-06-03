import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'Titulo 1',
    },
    {
        id: '2',
        title: 'Titulo 2',
    },
    {
        id: '3',
        title: 'Titulo 3',
    },
    {
        id: '4',
        title: 'Titulo 4',
    },
    {
        id: '5',
        title: 'Titulo 5',
    },
    {
        id: '6',
        title: 'Titulo 6',
    },
    {
        id: '7',
        title: 'Titulo 7',
    },
    {
        id: '8',
        title: 'Titulo 8',
    },
    {
        id: '9',
        title: 'Titulo 9',
    },
    {
        id: '10',
        title: 'Titulo 10',
    },
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

const ScrollViewMovies = () => (
    <ScrollView>
        {
            DATA.map(item => 
                <Item title={item.title} />
            )
        }
    </ScrollView>
)

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#676C6F',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        color: '#E2EAE9',
    },
});

export default ScrollViewMovies;