import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';

export default function Questao({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title='Aperte para calcular conta'
      onPress={() => navigation.navigate("Questao1")}
      />
      <br/>
      <Button title='Aperte para controle de gastos'
      onPress={() => navigation.navigate("Questao2")}
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
