import React from 'react'
import {Text, TouchableOpacity, ScrollView, StyleSheet, View} from 'react-native'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import { SelectList } from 'react-native-dropdown-select-list'


const Register = () => {

    const navigation = useNavigation();

    const [selected, setSelected] = React.useState("");
    const data = [
        {key:'1', value:'Administrador'},
        {key:'2', value:'Empleado'},
        {key:'3', value:'Tecnico'},
        
    ]

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
                    }}>Registro</Text>
                    
                    <GestureHandlerRootView>
                    <TextInput style={styles.input} placeholder='Nombre'></TextInput>

                    <TextInput style={styles.input} placeholder='Email'></TextInput>

                    <TextInput style={styles.input} placeholder='Password'></TextInput>

                    <SelectList boxStyles={{
                        width:'80%', 
                        borderRadius:'30%', 
                        margin:10, 
                        alignSelf:'center',
                        backgroundColor: '#d1d1d1',
                        borderColor: '#d1d1d1',
                        }} 
                        dropdownStyles={{width:'80%', alignSelf:'center'}}
                        placeholder='Rol' 
                        inputStyles={{color: 'gray'}}
                        setSelected={(val) => setSelected(val)} data={data} save="value"/>

                    </GestureHandlerRootView>


                    <TouchableOpacity
                    onPress={() => navigation.navigate('Services')}
                    style={styles.boton}>

                        <Text
                        style={styles.textoBoton}>Registrar &#x2192;
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

export default Register

