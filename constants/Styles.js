/**
 * Created by Mayrc on 10/03/2019.
 */
import React from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
    },
    list: {

    },
    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#DDD",
        padding: 10,
        margin: 10,
        opacity: 0.9
    },
    titleContainer: {
        flexDirection: 'row',
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        padding: 10,
        margin: 10,
        opacity: 0.9
    },
    title: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'darkgreen'
    },
    item: {
        flex: 1,
        alignItems: 'stretch',
    },




    listJogos: {
        marginTop: 10,
    },
    containerJogos: {

    },
    containerInJogos:{
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 10,
        margin: 10,
        opacity: 0.9
    },
    descriptionJogos: {
        fontSize: 18,
        textAlign: "center",
        color: "#333",
        fontWeight: "bold",
    },
    titleJogos: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#333",
        marginTop: 5,
        lineHeight: 24,
        paddingBottom: 10,
    },
    buttonJogos: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "darkgreen",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    buttonTextJogos:{
        color: "darkgreen",
    },
    imagem:{
        resizeMode: 'stretch'
    }
})

export default Styles;