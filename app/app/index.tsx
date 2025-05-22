import { Button } from "@react-navigation/elements";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={estilo.container}>
      <View style={estilo.section}>
        <Text style={estilo.titulo}>LOGIN</Text>
        <View style={estilo.detalhe}></View>
        <Text style={estilo.nomes}>E-mail</Text>
        <TextInput
          style={estilo.subtitulos}
          //value="E-mail"
          placeholder="Digite o seu E-mail"
          placeholderTextColor={'#FFF3'}
        />
        <Text style={estilo.nomes2}>Senha</Text>
        <TextInput
          style={estilo.subtitulos}
          //value="Senha"
          placeholder="Digite o sua senha"
          placeholderTextColor={'#FFF3'}
        />
        <Button style={estilo.button}>
          Acessar</Button>
        <Text style={estilo.senha}>Esqueci a senha</Text>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E2148',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    color: 'white',
    fontSize: 40,
    width: 300,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Arial, Helvetica, sans',
    fontWeight: 'bold',
  },

  subtitulos: {
    color: 'white',
    fontSize: 20,
    width: 300,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#15A5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  section: {
    backgroundColor: '#143D63',
    padding: 50,
    borderRadius: 30,

  },

  detalhe: {
    backgroundColor: 'white',
    width: 300,
    height: 2,
    marginTop: 20,
    marginBottom: 20,
  },

  senha: {
    textAlign: 'center',
    marginTop: 20,
    color: 'white',
    fontSize: 10,
    textDecorationLine: 'underline'
  },

  nomes: {
    textAlign: 'left',
    color: 'white',
    fontSize: 12,
  },

  nomes2: {
    textAlign: 'left',
    color: 'white',
    fontSize: 12,
  },

  button: {
    marginTop: 20,
  }
})