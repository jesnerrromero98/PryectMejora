import React from 'react';


import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const Encabezado = ()=>{
    return(
        <View style = {styles.fondo}>
            <View style = {styles.container}>
                <Text style = {styles.texto}>
                  Vehiculos Livianos
                </Text>
            </View>

            {/* <View
                style = {styles.estilo}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#201CE0",
        width: '200%',
        height: 60,
       alignItems: 'flex-start',
       marginRight:120
    },
    
    texto:{
        fontSize: 20,
        color: '#FFFF',
        fontWeight: 'bold',
        marginLeft: 100,
        marginTop: 15
    },
    estilo:{
        backgroundColor: '#201CE0',
        height: 25,
        borderRadius: 95,
        marginTop: -15
    },

    fondo:{
        backgroundColor: '#fafafa',
    }
})

export default Encabezado;