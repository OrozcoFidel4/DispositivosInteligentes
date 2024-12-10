import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './clock';
import FullScreen from 'react-native-full-screen';
import { useEffect } from 'react';


export default function App() {

  useEffect(() => {
    FullScreen.enterFullScreen();
  }, []);

  return (
    <View style={styles.container} >
      <Clock/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  clockBox:{
    justifyContent: 'center'
  }
});
