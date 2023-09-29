import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Quadrado() {

  const[lado1, setlado1] = useState()
  const[lado2, setlado2] = useState()
  const[area, setArea] = useState()

  function calcarea(){    
    var x = Number(lado1)
    var y = Number(lado2)
    setArea(x*y)
  }
  
  return (
    <View style={styles.container}>
      <Text>Calcule a área de um retangulo</Text>
      <br/>
      <br/>
      <br/>
      <br/>
      <Text>Insira o valor da base: </Text>
      <TextInput onChangeText={setlado1} style={styles.input}/>
      <Text>Insira o valor da altura: </Text>
      <TextInput onChangeText={setlado2} style={styles.input}/>
      <Text>Área: {area}</Text>
      <Button title='Calcular' onPress={calcarea}/>
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
  input:{
    borderWidth: 1
  }

});
