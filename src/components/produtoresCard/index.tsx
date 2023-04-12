/* eslint-disable prettier/prettier */

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Produtor} from '../../service';
import React, {useState} from 'react';

const ProdutorCard = (props: Produtor) => {
  const [quantidadeEstrelas, setQuantidadeEstrelas] = useState<number>(
    props.quantidadeEstrelas,
  );

  const getEstrela = (numero: number) => {
    return numero >= quantidadeEstrelas ? (
      <Image source={require('../../../public/images/estrelaCinza.png')} />
    ) : (
      <Image source={require('../../../public/images/estrela.png')} />
    );
  };

  const handleEstrelas = (numero: number) => {
    setQuantidadeEstrelas(numero + 1);
  };

  return (
    <View style={styles.produtorCard}>
      <View style={styles.logoProduto} id="logoProduto">
        <Image
          style={styles.image}
          source={require('../../../public/images/farm.png')}
        />
      </View>

      <View id="infoProdutor" style={styles.infoProduto}>
        <View style={styles.viewNomeEstrelas}>
          <Text style={styles.nomeProduto}>{props.nome}</Text>

          <View id="estrelas" style={styles.estrelas}>
            {[...Array(5).keys()].map(numero => (
              <TouchableOpacity
                onPress={() => handleEstrelas(numero)}
                key={numero}>
                {getEstrela(numero)}
              </TouchableOpacity>
            ))}
          </View>
          
        </View>

        <View>
          <Text style={styles.nomeProduto}>Distância </Text>
          <Text style={styles.distancia}>{props.distancia} Km </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  produtorCard: {
    height: 100,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    padding: 18,
    marginBottom: 10,
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewNomeEstrelas: {
    height: '90%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoProduto: {
    alignSelf: 'flex-start',
  },
  image: {
    height: 60,
    width: 60,
    marginRight: 5,
  },
  infoProduto: {
    width: '82%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  distancia: {
    top: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  estrelas: {
    flexDirection: 'row',
  },
});

export default ProdutorCard;
