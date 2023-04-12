import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function PlenoTi() {
  return (
    <View style={estilo.container}>
      <View style={estilo.fundotitulo}>
        <Text style={estilo.titulo}> Função de um Pleno em TI </Text>
      </View>

      <Text style={estilo.conceito}>
        No nível pleno, existe uma maior complexidade de tarefas. Aqui , o
        profissional precisa ter maior maturidade e também mais capacidade de
        tomar de decisões, o que era raramente é exigido no nível júnior.
      </Text>

      <Image style={estilo.imagem} resizeMode={'contain'} source={require('../assets/pleno.jpg')}/>

      <Text style={estilo.subtitulo}> Empregos: </Text>

      <View style={estilo.fundo}>
        <Text style={estilo.topicos}>
          <MaterialCommunityIcons name="arrow-right" />
          Programador nível Pleno
        </Text>
        <Text style={estilo.topicos}>
          <MaterialCommunityIcons name="arrow-right" />
          Desenvolvedor front-end nível Pleno
        </Text>
        <Text style={estilo.topicos}>
          <MaterialCommunityIcons name="arrow-right" />
          Desenvolvedor back-end nível Pleno
        </Text>
        <Text style={estilo.topicos}>
          <MaterialCommunityIcons name="arrow-right" />
          Analise de dados nível Pleno
        </Text>
        <Text style={estilo.topicos}>
          <MaterialCommunityIcons name="arrow-right" />
          Cloud nível Pleno
        </Text>
      </View>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#714481',
    padding: 1,
  },
  titulo: {
    marginTop: 35,
    marginBottom: 15,
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  conceito: {
    fontSize: 18,
    tectAlign: 'justify',
    margin: 15,
    color: '#FFFFFF',
  },
  imagem: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderRadius: 20,
    margin: 10,
  },
  subtitulo: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 10,
    color: '#FFFFFF',
  },
  topicos: {
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 2,
    
  },
  fundo: {
    backgroundColor: '#51BC6E',
    borderRadius: 20,
    marginHorizontal: 20,
  },
});