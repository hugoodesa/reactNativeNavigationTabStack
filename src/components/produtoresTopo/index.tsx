/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, Text, View} from 'react-native';

const ProdutoresTopo = () => {
  return (
    <View style={styles.topo}>
      <View style={styles.viewLogo}>
        <Image
          source={require('../../../public/images/farm.png')}
          style={styles.logoEmpresa}
        />
        <Text style={styles.nomeEmpresa}>orgs</Text>
      </View>

      <Text style={styles.saudacao}>Olá Hugo</Text>
      <Text style={styles.mensagem}>Encontre os melhores produtos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  saudacao: {
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: 'bold',
    fontSize: 30,
  },
  mensagem: {
    paddingBottom: 0,
    fontSize: 20,
  },
  nomeEmpresa: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  logoEmpresa: {
    width: 50,
    height: 45,
    marginRight: 15,
  },
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProdutoresTopo;
