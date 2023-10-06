import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Conta() {
  const [conta, setConta] = useState('');
  const [pessoas, setPessoas] = useState('');
  const [total, setTotal] = useState('');
  const [sn, setSn] = useState('');

  const calConta = () => {
    const x = parseFloat(conta);
    const y = parseFloat(pessoas);

    let Total = x / y;

    if (sn.toUpperCase() === 'Y') {
      const couvert = Total * 0.1;
      Total += couvert;
    }

    setTotal(Total);
  };

  return (
    <View style={styles.container}>
      <Text>Calcule a conta</Text>
      <Text>Insira o valor total da conta:</Text>
      <TextInput onChangeText={setConta} style={styles.input} keyboardType="numeric" />
      <Text>Insira o número de pessoas que dividirão:</Text>
      <TextInput onChangeText={setPessoas} style={styles.input} keyboardType="numeric" />
      <Text>Tem couvert? Y/N</Text>
      <TextInput onChangeText={setSn} style={styles.input} />
      <Text>Total de cada pessoa: {total}</Text>
      <Button title="Calcular" onPress={calConta} />
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
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: 200,
  },
});
