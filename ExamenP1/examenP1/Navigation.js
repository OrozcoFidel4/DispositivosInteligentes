import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//importar iconos
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


//importar Screens
import HomeScreen from "./screens/HomeScreen";
import VideoScreen from "./screens/StackScreen"
import ButtonsScreen from "./screens/ButtonsScreen";


const Stack = createStackNavigator();
function MyStack() {
    return(
        <Stack.Navigator
            initialRouteName="HomeScreen"
        >
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: true
                }}

            />
            <Stack.Screen
                name="VideoScreen"
                component={VideoScreen}
                options={{
                    headerBackTitleVisible: false,      
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
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: ({color: "black"}),
            }}
        >

            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel:"Inicio",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="newspaper-variant-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
                />

            <Tab.Screen 
                name="Buttons" 
                component={ButtonsScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="gesture-tap-button" size={size} color={color} />
                    ),
                    headerShown: true
                }}
                />

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