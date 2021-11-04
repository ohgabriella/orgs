import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function Botao({ children, style }) {
    return <>
        <TouchableOpacity style={style}> 
            { children }
        </TouchableOpacity> 
    </>
}
