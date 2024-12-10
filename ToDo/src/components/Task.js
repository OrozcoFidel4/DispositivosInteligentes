import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";


const Task = (props) =>{
    return(      
            <View style= {styles.item} className='bg-neutral-100' >
                <View style={styles.itemLeft}>
                    <Pressable style={styles.button} className='bg-neutral-300'></Pressable>
                    <Text style={styles.itemText} className='dark:text-white'>{props.text}</Text>
                </View>
                <View style={styles.circular} className='border-neutral-300'></View>
            </View>
    )
}

const styles= StyleSheet.create({
    item: {
        padding: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: '#d4d6d5'
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    button:{
        width: 24,
        height: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText:{
        maxWidth:"80%",
    },
    circular:{
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius:5,
        marginLeft: 10,
        opacity:0.4
    }
});

export default Task;