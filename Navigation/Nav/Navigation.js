import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//importar iconos
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


//importar Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";
import MyKeyboard from "./src/components/MyKeyboard";


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
                name="Calculadora"
                component={MyKeyboard}
                options={{
                    headerBackTitleVisible: false,      
                }}
            />
            <Stack.Screen
                name="StackScreen"
                component={StackScreen}
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
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="newspaper-variant-outline" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
                />

                
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
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