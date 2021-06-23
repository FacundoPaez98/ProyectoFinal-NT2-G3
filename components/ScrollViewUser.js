import React from 'react';
import { View, ScrollView, StyleSheet, Text} from 'react-native';



const Item = ({ username }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{username}</Text>
    </View>
);

const ScrollViewUser = (props) => (
    
        <ScrollView style={styles.dataView}>
            {
                props.data.map(item =>
                    <Item username={item.username} key={item._id} />
                )
            }
        </ScrollView>
    
        
)

const styles = StyleSheet.create({

    item: {
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

export default ScrollViewUser;