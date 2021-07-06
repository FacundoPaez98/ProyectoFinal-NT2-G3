import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as RootNavigation from '../utils/RootNavigation';

const Item = ({ username }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{username}</Text>
    </View>
);

function ScrollViewUser (props) {

    function navigateUserProfile(usuario) {
        RootNavigation.navigate("PerfilUsuario");
    }

    return (
        <ScrollView>
            {
                props.data.map(function (item) {
                    return (
                        <TouchableOpacity onPress={() => navigateUserProfile(item)} key={item._id}>
                            <Item username={item.username} />
                        </TouchableOpacity>  
                    )
                })
            }
        </ScrollView>
)} 

const styles = StyleSheet.create({

    item: {
        alignItems: "center",
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