import React from 'react'
import {Text, TouchableOpacity, ScrollView, StyleSheet, View} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import Clock from '../components/clock';

//Iconos
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Home = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.superior}>
                    
                    <Text 
                    style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                    }}>Bienvenido, Usuario!</Text>

                    <Clock></Clock>

                    </View>

                    <View style={styles.superior2}>
                    
                    <Text 
                    style={{
                            fontSize: 15,
                            marginTop: 5,
                            color: 'gray'
                    }}>En que podemos ayudarte hoy?</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'space-evenly'}}>
                    
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Impresiones')}
                        style={styles.boton}>

                            <AntDesign name="printer" style={styles.icono} size={45} />

                            <Text
                            style={styles.textoBoton}>Impresiones
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('Personalizacion')}
                        style={styles.boton}>

                            <FontAwesome6 name="edit" style={styles.icono} size={40} />

                            <Text
                            style={styles.textoBoton}>Personalizacion
                            </Text>


                        </TouchableOpacity>


                    </View>

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'space-evenly'}}>
                    
                    
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Lonas')}
                        style={styles.boton}>

                            <FontAwesome5 name="expand" size={40} style={styles.icono} />

                            <Text
                            style={styles.textoBoton}>Lonas
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('Reportes')}
                        style={styles.botonReportes}>

                            <Entypo name="text-document" size={40} style={styles.icono} />

                            <Text
                            style={styles.textoBoton}>Reportes
                            </Text>

                        </TouchableOpacity>                

                    </View>


                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },

    superior: {
        marginTop: '5%',
        flexDirection:'row',
        marginLeft: 15,
        marginRight: 15,
        justifyContent: 'space-between',
    },

    superior2: {
        marginBottom: '10%',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft: 15
    },

    opcionesContainer:{
        flexWrap: 'wrap',
        alignContent: 'center',
        backgroundColor: 'gray'
    },

    box:{
        width: '40%',
        height: '60%',
        alignSelf: 'center',
        backgroundColor: 'purple',
        borderColor: 'red',
        borderWidth: 5
    },


    boton:{
        backgroundColor:'gray',
        padding:10,
        marginTop: 10,
        marginBottom: '5%',
        width: '40%',
        height: 150,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10
    },

    botonReportes:{
        backgroundColor:'red',
        padding:10,
        marginTop: 10,
        marginBottom: '5%',
        width: '40%',
        height: 150,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10
    },

    textoBoton:{
        color:'white',
        textAlign: 'center',
        fontSize: 15           
    },
    
    icono:{
        color:'white',
        textAlign: 'center',
        marginBottom: 10
    }
    });

export default Home

