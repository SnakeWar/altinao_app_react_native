/**
 * Created by Mayrc on 10/03/2019.
 */
import React from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    list: {

    },
    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#DDD",
        paddingBottom: 12,
        paddingLeft: 20,
        paddingTop: 12,
        marginBottom: 5,
    },
    titleContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5,
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        paddingTop: 10,
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
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        paddingRight: 20,
        paddingLeft: 20,
    },
    containerInJogos:{
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },
    descriptionJogos: {
        fontSize: 18,
        textAlign: "center",
        color: "#333",
        fontWeight: "bold",
    },
    titleJogos: {
        fontSize: 15,
        color: "#999",
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