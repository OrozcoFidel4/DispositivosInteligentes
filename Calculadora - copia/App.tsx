import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { useState } from 'react';
import { myColors } from './src/styles/Colors';
import Button from './src/components/button';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [isEnabled, setIsEnable] = useState(false);
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === "light" ? styles.container : [styles.container, {backgroundColor: "#000"}]}>
      <StatusBar style="auto" />
      <Switch 
      trackColor={{false: "#262626", true: "#ffffe6" }}
      thumbColor={isEnabled ? '#f5dd4b' : '#bfbfbf' }
      value= {theme === 'dark'}
      onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
    <MyKeyboard/>
    </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
