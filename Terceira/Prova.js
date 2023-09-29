import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';

export default function Questao({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title='Aperte para ir para a 1° questão'
      onPress={() => navigation.navigate("Questao1")}
      />
      <br/>
      <Button title='Aperte para ir para a 2° questão'
      onPress={() => navigation.navigate("Questao2")}
      />
      <br/>
      <Button title='Aperte para ir para a 3° questão'
      onPress={() => navigation.navigate("Questao3")}
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
