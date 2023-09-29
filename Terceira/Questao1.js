import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';

export default function Questao1({ navigation }) {
  return (
    <View style={styles.container}>
    <Button title='Aperte para calcular a area de um quadrado'
      onPress={() => navigation.navigate("Quadrado")}
    />
    <br/>
    <Button title='Aperte para calcular a area de um triangulo'
      onPress={() => navigation.navigate("Triangulo")}
    />
    <br/>
    <Button title='Aperte para calcular a area de um retangulo'
      onPress={() => navigation.navigate("Retangulo")}
    />
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
