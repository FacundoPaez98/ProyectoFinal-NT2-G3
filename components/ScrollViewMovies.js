import React from 'react';
import { View, ScrollView, StyleSheet, Text} from 'react-native';

const Item = ({ title, anio}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}> {anio}</Text>
    </View>
);

const ScrollViewMovies = (props) => (
    
        <ScrollView style={styles.dataView}>
            {
                
                props.data.map(item =>
                    <Item title={item.titulo} anio={item.anio} key={item.id} />
                )
                
            }
        </ScrollView>
    
)

const styles = StyleSheet.create({

    item: {
        flexDirection: "row",
        backgroundColor: '#676C6F',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        color: '#E2EAE9',
    },
});

export default ScrollViewMovies;