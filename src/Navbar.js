import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Todo App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#90CAF9',
        paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})