import React from 'react'
import {Text, TouchableOpacity, ScrollView, StyleSheet, View} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import moment from 'moment/moment';
import { useNavigation } from "@react-navigation/native";
import Clock from '../components/clock';


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
                    

                    <TouchableOpacity
                    onPress={() => navigation.navigate('Impresiones')}
                    style={styles.boton}>

                        <Text
                        style={styles.textoBoton}>Impresiones &#x2192;
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => navigation.navigate('Personalizacion')}
                    style={styles.boton}>

                        <Text
                        style={styles.textoBoton}>Personalizacion &#x2192;
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => navigation.navigate('Lonas')}
                    style={styles.boton}>

                        <Text
                        style={styles.textoBoton}>Lonas &#x2192;
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => navigation.navigate('Reportes')}
                    style={styles.botonReportes}>

                        <Text
                        style={styles.textoBoton}>Reportes &#x2192;
                        </Text>

                    </TouchableOpacity>


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
        marginTop: '5%',
        marginBottom: '5%',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10
    },

    botonReportes:{
        backgroundColor:'red',
        padding:10,
        marginTop: '5%',
        marginBottom: '5%',
        width: '50%',
        alignSelf: 'center',
        borderRadius: 10
    },

    textoBoton:{
        color:'white',
        textAlign: 'center',
        fontSize: 15           
    }
    });

export default Home

