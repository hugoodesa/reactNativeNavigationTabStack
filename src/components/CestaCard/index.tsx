/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import {Cesta} from '../../service';

export const CestaCard = (cesta: Cesta) => {
  return (
    <View style={styles.cesta}>
      <Text style={styles.tituloCesta}>{cesta.titulo}</Text>
      <Text>{cesta.descricao}</Text>
      <Text style={styles.preco}>R$ {cesta.valor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  preco: {
    color: '#27ae60',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
  },
  tituloCesta: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cesta: {
    display: 'flex',
    gap: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.2,
    marginBottom: 10,
  },
});
