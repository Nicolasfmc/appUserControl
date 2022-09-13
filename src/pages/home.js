import React from "react";
import {Text, TextInput, View, StyleSheet, Image } from "react-native";
import logo from '../../assets/logoHikids.png';

export default function Home(){
    return(
        <View>
            <Image source={logo}/>
            <Text>Teste</Text>
            <TextInput style={styles.input} placeholder='Digite'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        textDecorationLine: 'none',
        fontSize: 14,
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
})