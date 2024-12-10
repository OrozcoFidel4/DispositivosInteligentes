import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import ToDo from "./src/pages/ToDo";
import Inicio from "./src/pages/Inicio";


const Stack = createNativeStackNavigator();
function MyStack() {
    return(
        <Stack.Navigator
            initialRouteName="Inicio"
        >
            <Stack.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    headerShown: false
                }}

            />

            <Stack.Screen
                name="ToDo"
                component={ToDo}
                options={{
                    headerShown: false
                }}

            />
        </Stack.Navigator>
    )
}


export default function Navigation() {
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}