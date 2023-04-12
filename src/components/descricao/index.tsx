/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, Text, View} from 'react-native';

export const Descricao = () => {
  return (
    <View id="conteudo" style={styles.conteudo}>
      <Text style={styles.tituloCesta}>Cesta Verduras</Text>

      <View style={styles.viewLogo}>
        <Image
          source={require('../../../public/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.nomeFazenda}>Jack's Farm</Text>
      </View>

      <Text id="descricao_fazenda" style={styles.descricaoCesta}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto
        para sua cozinha
      </Text>

      <Text id="valor_cesta" style={{...styles.valor}}>
        R$ 40,00
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tituloCesta: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto-Black',
  },
  valor: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'green',
  },
  conteudo: {
    margin: 23,
  },
  descricaoCesta: {
    width: '80%',
    paddingVertical: 10,
    fontFamily: 'Roboto',
  },
  nomeFazenda: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 10,
  },
  logo: {
    width: 50,
    height: 60,
  },
  viewLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
