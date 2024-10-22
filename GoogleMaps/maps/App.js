import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location'
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {API_KEY} from '@env';


const car = require('./assets/carro240.png')

export default function App() {

  const [origin, setOrigin] = React.useState({
    latitude: 32.451354,
    longitude: -114.768907,
  })

  const [destination, setDestination] = React.useState({
    latitude: 32.438230,
    longitude: -114.716686,
  })

  React.useEffect(() =>{
    getLocationPermission();
    },[])
    
    async function getLocationPermission(){
      let {status} = await Location.requestForegroundPermissionsAsync();
      if(status !== "granted"){
        alert("Permiso Denegado");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      const current ={
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
      setOrigin(current);
    }

  return (
    <View style={styles.container}>

      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.99,
          longitudeDelta: 0.04
        }}
        >
          <Marker 
            draggable = {true}
            image={car}
            title='You'
              
            coordinate={origin}
            onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}/>

          <Marker 
            draggable = {true}
            title='Destination'
            coordinate={destination}
            onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}/>

          <MapViewDirections 
            origin={origin}
            destination={destination}
            apikey={API_KEY}
            strokeColor='red'
            strokeWidth={2}
          />
          

        </MapView>
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

  map:{
    width: '100%',
    height: '100%'
  },

  car:{
    width: "1%",
    height: '1%'
  }
});
