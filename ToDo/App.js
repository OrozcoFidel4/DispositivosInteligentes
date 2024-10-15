import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, Pressable, Keyboard, StatusBar } from 'react-native';
import Task from './components/Task';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView, Switch } from "react-native-gesture-handler";
import { useColorScheme } from "nativewind";

export default function App() {
  
  const {colorScheme, toggleColorScheme} = useColorScheme();

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const hanldeAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }


  
  return (
    <SafeAreaView style={styles.root} className="bg-neutral-200 dark:bg-neutral-800">
      <StatusBar hidden/>
      <View style={styles.container}>
      {/* Todays tasks */}
      <Text style={styles.sectionTitle} className="dark:text-white">Today's Tasks</Text>
      <Text style={styles.descriptionPage} className="dark:text-white">Add your today's tasks and delete them pressing.</Text>
      <View style={styles.switch}>
      <GestureHandlerRootView>
                <Switch style={styles.switch} value={colorScheme=="dark"} onChange={toggleColorScheme}/>
      </GestureHandlerRootView>
      </View>
      <View style={styles.taskWrapper}>

        <View style={styles.items}>       
            {/* Aqui van las tareas */}

            {
              taskItems.map((item, index) => {
                return (
                <Pressable 
                onPress={() => completeTask(index)} 
                key={index}>
                  <Task text={item}/> 
                </Pressable>)
                
              })
            }   
        
        </View>
      
      </View>

      <View>
        {/* Crear Tareas */}
        <KeyboardAvoidingView
        behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
        style = {styles.writeTaskWrapper}>

          <TextInput className='text-gray-500 bg-neutral-100 dark:bg-neutral-700'style={styles.input} placeholder={'Write a task...'} placeholderTextColor='gray' value={task} onChangeText={text => setTask(text)}/>
        
        <Pressable className='bg-green-500 rounded-full dark:bg-transparent border-green-500 border-4' onPress={()=> hanldeAddTask()}>
          <View style={styles.addWrapper}>
            
            <Text className='text-white font-bold dark:text-green-500'>Add +</Text>

          </View>
        </Pressable>
        
        </KeyboardAvoidingView>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  root:{
    flex:1,
    flexDirection:'row',
  },
  container:{
    flex:1,
  },
  sectionTitle:{
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal:20,
    fontWeight: "bold",
    fontSize:30,
  },
  switch:{
    position:'fixed',
    top: -30,
    left: 160,
  },
  descriptionPage:{
    paddingHorizontal: 20,
  },
  taskWrapper:{
    padding: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  
  items:{
    /* marginTop: 30, */
    marginBottom: 60
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 0,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input:{
    width: 250,
    height: 60,
    padding: 20,
    paddingHorizontal: 20,
    borderRadius: 40,

  },
  addWrapper:{
    width: 90,
    height: 60,
    borderRadius: 40, 
    justifyContent: 'center',
    alignItems: 'center',    
  },
  addText:{
    fontWeight: 'bold',
    fontSize:15
  }
})
