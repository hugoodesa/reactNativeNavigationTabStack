/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, Text, View} from 'react-native';

export const Topo = () => {
  return (
    <View id="topo">
      <Image
        source={require('../../../public/images/topo.jpg')}
        style={styles.topoImage}
      />
      <Text style={styles.titulo}>Detalhes da Cesta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topoImage: {
    width: '100%',
    height: 170,
    borderColor: 'red',
    borderBottomWidth: 2,
    position: 'relative',
  },
  titulo: {
    color: 'black',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    position: 'absolute',
    top: 110,
  },
});
