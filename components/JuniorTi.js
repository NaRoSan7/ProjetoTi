import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function JuniorTi() {
  return (
    
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Função de um Junior em TI </Text>

      <Text style={estilo.conceito}>
        No nível júnior, estão os cargos com complexidade menor de tarefas, sem
        tantas exigências de competências profissionais e normalmente sem
        autonomia para decisões. É aqui que começa a carreira de um profissional
        em determinada área. Tem até 5 anos de experiência na area
      </Text>



      <Text style={estilo.subtitulo}> Empregos: </Text>

      <Image style={estilo.imagem} source={require('../assets/junior.jpg')}/>

      <View style={estilo.fundo}>
        <Text style={estilo.topicos}>
          <MaterialCommunityIcons name="arrow-right" />
          Programador nível Junior
        </Text>
        <Text style={estilo.topicos}>
          <MaterialCommunityIcons name="arrow-right" />
          Desenvolvedor front-end nível Junior
        </Text>
        <Text style={estilo.topicos}>
          <MaterialCommunityIcons name="arrow-right" />
          Desenvolvedor back-end nível Junior
        </Text>
        <Text style={estilo.topicos}>
          <MaterialCommunityIcons name="arrow-right" />
          Analise de dados nível Junior
        </Text>
        <Text style={estilo.topicos}>
          <MaterialCommunityIcons name="arrow-right" />
          Cloud nível Junior
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
