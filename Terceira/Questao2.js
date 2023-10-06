import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text } from 'react-native';

export default function Gastos({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>CONTROLE DE GASTOS</Text>
      <Button title='Aperte para ver a fatura'
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
