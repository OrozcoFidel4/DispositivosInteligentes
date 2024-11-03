import React from 'react'
import {Text, TouchableOpacity, ScrollView, StyleSheet, View} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';


const Login = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    

                    <View style={styles.box}>
                    <Text 
                    style={{
                            alignSelf: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginBottom: 20
                    }}>Inicio De Sesion</Text>
                    
                    <GestureHandlerRootView>
                    <TextInput style={styles.input} placeholder='Email'></TextInput>

                    <TextInput style={styles.input} placeholder='Password'></TextInput>
                    </GestureHandlerRootView>


                    <TouchableOpacity
                    onPress={() => navigation.navigate('Services')}
                    style={styles.boton}>

                        <Text
                        style={styles.textoBoton}>Iniciar Sesion &#x2192;
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
        justifyContent: 'center'
    },

    box: {
        marginTop: '10%'
    },

    input:{
        alignSelf: 'center',
        margin: 10,
        borderRadius: 30, 
        backgroundColor: '#d1d1d1',
        width: '80%',
        height: 50,
        padding: 20,

    },

    boton:{
        alignSelf: 'center',
        backgroundColor:'red',
        padding:10,
        marginTop: '5%',
        marginBottom: '5%',
        width: '50%',
        borderRadius: 10
    },

    textoBoton:{
        color:'white',
        textAlign: 'center',
        fontSize: 15           
    }
    });

export default Login

