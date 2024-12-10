import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);

  const toggleStatusBar = () => {
    if (isStatusBarHidden) {
      // Mostrar la barra de estado
      StatusBar.setHidden(false);
      navigation.navigate('Home USer')
    } else {
      // Ocultar la barra de estado
      StatusBar.setHidden(true);
    }
    setIsStatusBarHidden(!isStatusBarHidden);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola, Mundo!</Text>

      {/* Botón flotante */}
      <View style={styles.floatingButtonContainer}>
        <Button
          title="Ocultar Barra"
          onPress={toggleStatusBar}
          color="#ffffff"
        />
      </View>

      {/* Floating Action Button (FAB) */}
      <View style={styles.floatingButton}>
        <Icon
          name="arrow-forward"
          size={30}
          color="white"
          onPress={toggleStatusBar} // Acción del botón
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: 'white' // Para que el botón flotante se posicione relativo a esta vista
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 100, // Se coloca un poco por encima de la esquina
    right: 20, // Distancia desde el borde derecho
    backgroundColor: '#6200ee',
    borderRadius: 50, // Hacemos que sea redondo
    padding: 10,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30, // Distancia desde el borde inferior
    right: 20, // Distancia desde el borde derecho
    backgroundColor: '#6200ee',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6, // Para dar un efecto de sombra
  },
});

export default App;
