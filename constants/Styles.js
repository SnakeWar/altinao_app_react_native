/**
 * Created by Mayrc on 10/03/2019.
 */
import React from 'react';
import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#fafafa",
        padding: 20,
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
        backgroundColor: "#FFF",
        flexDirection: 'row',
        flex: 1,
        padding: 20,
        marginBottom: 5,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    item: {
        flex: 1,
        alignItems: 'stretch',
    }
})

export default Styles;