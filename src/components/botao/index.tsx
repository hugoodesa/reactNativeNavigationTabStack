/* eslint-disable prettier/prettier */
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';

type props = {
  children: string;
};

export const Botao = ({children}: props) => {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.corTextoBotao}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#2ecc71',
    paddingVertical: 10,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  corTextoBotao: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
