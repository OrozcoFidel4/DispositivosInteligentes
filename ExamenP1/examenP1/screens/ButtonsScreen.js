import { useColorScheme } from "nativewind";
import React from "react";
import {SafeAreaView, Text, TouchableOpacity} from "react-native";
import { GestureHandlerRootView, Switch } from "react-native-gesture-handler";


const ButtonsScreen =() =>{
    const {colorScheme, toggleColorScheme} = useColorScheme();
    return(
        
        <SafeAreaView className="justify-center  items-center dark:bg-neutral-900">
            <Text className="mt-20 mb-5 font-bold dark:text-white">Enable/Disable Dark Mode</Text>
            
            <GestureHandlerRootView>
                <Switch value={colorScheme=="dark"} onChange={toggleColorScheme}/>
            </GestureHandlerRootView>

            <Text className="mt-10 mb-5 font-bold dark:text-white">Buttons</Text>

            <TouchableOpacity
            style={{
                backgroundColor: "gray",
                padding: 10,
                marginTop: "5%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
            }}>

            <Text
            style={{
                color: "white",
                textAlign: "center",
                fontSize: 15
            }}>Boton 1
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity
            style={{
                backgroundColor: "gray",
                padding: 10,
                marginTop: "5%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
            }}>

            <Text
            style={{
                color: "white",
                textAlign: "center",
                fontSize: 15
            }}>Boton 2
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity
            style={{
                backgroundColor: "gray",
                padding: 10,
                marginTop: "5%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
            }}>

            <Text
            style={{
                color: "white",
                textAlign: "center",
                fontSize: 15
            }}>Boton 3
            </Text>
            
            </TouchableOpacity>

            <TouchableOpacity
            style={{
                backgroundColor: "gray",
                padding: 10,
                marginTop: "5%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
            }}>

            <Text
            style={{
                color: "white",
                textAlign: "center",
                fontSize: 15
            }}>Boton 4
            </Text>
            
            </TouchableOpacity>

            
        </SafeAreaView>
    );
}

export default ButtonsScreen;