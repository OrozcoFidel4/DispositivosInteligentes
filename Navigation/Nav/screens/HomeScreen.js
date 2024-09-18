import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen =() =>{

    const navigation = useNavigation();

    return(
        <View>
            <Text
            style={{
                fontsize: 30,
                textAlign: "center",
                marginTop: "20%"
            }}
            >Home Screen</Text>

            <TouchableOpacity
                onPress={() => navigation.navigate("StackScreen")}
                style={{
                    backgroundColor: "red",
                    padding: 10,
                    marginTop: "10%",
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
                    Go to Stack Screen
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;