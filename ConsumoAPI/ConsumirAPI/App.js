import React from 'react';
import {ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
  
  constructor(props){
    super(props);

    this.state={
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon/'

    }
  }

  componentDidMount(){
    this.getPokemon()
  }

  getPokemon = () => {

    this.setState({loading: true})

    fetch(this.state.url)
    .then(res => res.json())
    .then(res => {
      
      this.setState({
        pokemon: res.results,
        url: res.next,
        loading: false
      })
    });
  }; 

render(){
    return (
      <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{marginTop: 80, marginBottom: 20, fontWeight: 'bold', fontSize:30}}>Consumir API</Text>
          
          <FlatList
          data= {this.state.pokemon}
          renderItem={({item}) => <Text> {item.name} </Text>
          }
          /> 
        </View>
      </ScrollView>
      </>
    );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
