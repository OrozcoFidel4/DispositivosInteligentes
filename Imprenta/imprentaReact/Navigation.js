import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//Screens
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Impresiones from "./screens/Impresiones";
import Personalizacion from "./screens/Personalizacion";
import Lonas from "./screens/Lonas";
import Reportes from "./screens/Reportes";
import HomeUser from "./screens/HomeUser";
import InicioApp from "./screens/InicioApp";


const Stack = createNativeStackNavigator();
function MyStack() {
    return(
        <Stack.Navigator
            initialRouteName="Inicio"
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    
                }}

            />

            <Stack.Screen
                name="Inicio"
                component={InicioApp}
                options={{
                    headerShown: true
                }}

            />

            <Stack.Screen
                name='User Home'
                component={HomeUser}
                options={{
                    headerShown: true
                }}
            />

            <Stack.Screen
                name="Impresiones"
                component={Impresiones}
                options={{
                    headerShown: true
                }}

            />

            <Stack.Screen
                name="Personalizacion"
                component={Personalizacion}
                options={{
                    headerShown: true
                }}

            />

<           Stack.Screen
                name="Lonas"
                component={Lonas}
                options={{
                    headerShown: true
                }}

            />

            <Stack.Screen
                name="Reportes"
                component={Reportes}
                options={{
                    headerShown: true
                }}

            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}

            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: true
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