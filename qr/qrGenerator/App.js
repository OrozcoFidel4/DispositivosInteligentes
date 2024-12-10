import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {

  const url= 'https://github.com';

  return (
    <View style={styles.container}>
      <QRCode value={url}/>
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
});
