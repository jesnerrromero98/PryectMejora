import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,SafeAreaView,
} from 'react-native';

const DetalleNotiScreen = () => {


    return(
          <SafeAreaView style = {styles.container}>
          <ScrollView>
        
                 <View style = {styles.textoContenedor}>
                <Image
                    source={require('./../../../asset/343.jpeg')}
                    style = {styles.imagen}
                />
                    <View style = {styles.tituloCont}>
                        <Text style = {styles.titulo}>
                            unidad 204
                        </Text>
                    </View>

                    <View style = {styles.len}>
                        <Text style = {styles.sub}>
                            Asignada: BOM Juigalpa 
                        </Text>

                        <Text style = {styles.textt}>
                            Descripcion: Camioneta Mitsubishi, WL200 Baranda
                        </Text>

                        <Text Text style = {styles.sub2}>
                            Consumo: 25km/galon
                        </Text>
                    </View>

                     <View style={styles.line}/>
                    <View style = {styles.len}>
                        <Text style = {styles.textt}>
                          GPS: Si
                        </Text>
                    </View>

                    <View style={styles.devider}/>
                    
                    <View style={styles.line}/>
                    <View style = {styles.len}>
                        <Text style = {styles.textt}>
                           Inversion: C$ 1500
                        </Text>
                    </View>

                    <View style={styles.deviders}/>
                    <View style={styles.line}/>

                    <View style = {styles.len}>
                        <Text style = {styles.textt}>
                        Placa: M276491
                        </Text>
                    </View>

                    <View style={styles.deviders}/>
                    <View style={styles.line}/>

                    <View style = {styles.len}>
                        <Text style = {styles.textt1}>
                            Buen Estado
                        </Text>
                    </View>
                    <View style={styles.deviders}/>

                </View>
               
                
                <View style = {styles.len}>
                        <Text style = {styles.textt1}>
                             
                        </Text>
                    </View>
                    <View style={styles.deviders}/>
              </ScrollView>            
          </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex: 1,
    },
    image:{
       
        height: 150,
        width: '100%',
        
        borderLeftWidth: 150
    },
    imagen:{
        height: 250,
        width: '100%',
        marginTop:3,

    },
    
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#98cb40',
    },

    tamaño:{
        width: '64%',
        marginLeft: 5
    },

    sub:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'yellow',
        
    },

    sub2:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'yellow',
        marginTop: 15
    },

    textt:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFF',
        textAlign:'justify', 
    },

    textt1:{
        fontSize:  18,
        fontWeight: 'bold',
        color: '#ff0000',
        marginTop: -5,
        marginLeft:120
    },
    tituloCont:{
        alignItems: 'center',
        marginTop: 5
    },

    tituloConte:{
        alignItems:'center',
        marginTop: 5,
        justifyContent: 'flex-start',
        flexDirection:'row',
        width: '100%'
    },

    textoContenedor:{
        marginHorizontal: 10
    },

    line:{
        height: 1,
        backgroundColor: "transparent",
        marginVertical: 5,
    },
    devider:{
        height:2
    },

    deviders:{
        height: 3,
    },
    len:{
        marginHorizontal: 10,
        marginTop: 5
    }
})


export default DetalleNotiScreen;