import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import Texto from '../../../components/Texto';

export default function Item({ item: { nome, imagem } }) {
    return <>
        <View key={nome} style={estilos.itens}>
            <Image source={imagem} style={estilos.imagem}/>
            <Texto style={estilos.nome}>{ nome }</Texto>
        </View>
    
    </>
}

const estilos = StyleSheet.create({
    itens: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center"  
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }

})