import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

import Texto from '../../../components/Texto';
import topo from '../../../../assets/topo.png';

const widthDimension = Dimensions.get('screen').width;

export default function Topo() {
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * widthDimension,
    },
    titulo: { 
        width: "100%",
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
})