import React, { useState } from 'react';
import { View, Text, Button, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Inicio = () => {

    const navigation = useNavigation();
  // Usamos un estado para controlar si la barra de estado está oculta o no
    const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);

    const toggleStatusBar = () => {

        StatusBar.setHidden(true);
        navigation.navigate('ToDo');

    };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido!</Text>
      <Button 
        title="Iniciar"
        onPress={toggleStatusBar} 

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Inicio;
