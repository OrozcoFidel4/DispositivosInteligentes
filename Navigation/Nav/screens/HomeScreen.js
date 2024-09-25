import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

const HomeScreen =() =>{

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            
            <Image 
            source={{uri: '/assets/favicon.png',}}
            style={styles.image}/>

            <Text
            style={{
                fontsize: 50,
                textAlign: "center",
                marginTop: "10%",
                fontWeight: "bold"
                
            }}
            >Bienvenido a Mi Calculadora App</Text>

            <Text
            style={{
                fontsize: 50,
                textAlign: "center",
                margin: "5%",           
            }}
            >Esta aplicacion es una aplicacion creada para fines educativos, 
            a continuacion te dejaremos algunas fotos del desarrollo de la aplicacion 
            y las fuentes utilizadas para su creacion</Text>           

            <TouchableOpacity
                onPress={() => navigation.navigate("Calculadora")}
                style={{
                    backgroundColor: "blue",
                    padding: 10,
                    marginTop: "5%",
                    width: "50%",
                    alignSelf: "center",
                    borderRadius: 10,
                }}
            >
                <Text
                style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 15
                }}>
                    Iniciar Aplicacion
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    image: {
        width: 80,
        height: 80,
        borderColor: 'blue',
        borderWidth: 5,
        marginTop: "20%"
    }
});

export default HomeScreen;