import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screens
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Impresiones from "./screens/Impresiones";
import Personalizacion from "./screens/Personalizacion";
import Lonas from "./screens/Lonas";
import Reportes from "./screens/Reportes";

const Stack = createNativeStackNavigator();
function MyStack() {
    return(
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={Home}
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
            

        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: ({color: "black"}),
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel:"Inicio",
                    headerShown: false,
                }}
                />

            <Tab.Screen 
                name="Login" 
                component={Login}
                options={{
                    tabBarLabel:"Login",
                    headerShown: false,
                }}
                />

            <Tab.Screen
                name="Register"
                component={Register}
                options={{
                    tabBarLabel:'Register',
                    headerShown: false,
                }}/>
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}