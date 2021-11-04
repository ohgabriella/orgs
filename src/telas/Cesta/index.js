import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Topo from './components/Topo';
import Detalhes from './components/Detalhes';
import Item from './components/Item';
import Texto from '../../components/Texto';

export default function Cesta( { topo, detalhes, itens } ) {
    return <>
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={({ nome }) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo}/>

                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
                    </View>
                </>
            }}
        >
        </FlatList>
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 32,
        marginBottom: 32,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }
})