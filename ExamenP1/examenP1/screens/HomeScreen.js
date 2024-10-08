import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";

//Imagen


const HomeScreen =() =>{

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            
            <Image
            style={{
                width: 50,
                height: 50,
                marginTop: "10%"
                }}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
            />

            <Text
            style={{
                fontsize: 50,
                textAlign: "center",
                marginTop: "10%",
                fontWeight: "bold"
                
            }}
            >Evaluacion 1er Parcial</Text>
            <Text
            style={{
                fontsize: 50,
                textAlign: "center",
                
            }}
            >Criterios De Evaluacion:</Text>

            <Text
            style={{
                fontsize: 50,
                textAlign: "justify",
                margin: "5%",           
            }}
            >El proyecto deberá contar con 3 pantallas, 
            la primer pantalla deberá contar con una imagen y texto,
            la segunda deberá contener un video y la última deberá tener
            cuatro botones y que esta sea capaz de cambiar de color.</Text>           

            <TouchableOpacity
                onPress={() => navigation.navigate("VideoScreen")}
                style={{
                    backgroundColor: "gray",
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
                    
                    Video Screen &#x2192;


                    
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