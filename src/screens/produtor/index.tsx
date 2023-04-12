/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Produtor} from '../../service';
import {CestaCard} from '../../components/CestaCard';

export const ProdutorScreen = () => {
  const route = useRoute();
  const produtor: Produtor = route.params as Produtor;
  const navigation = useNavigation();

  return (
    <View>
      <View id="imagemProdutor">
        <Image
          style={styles.imagemProduto}
          source={require('../../../public/images/topo.jpg')}
        />
        <View id="voltar">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.botaoVoltar}>
            <Text style={{textAlign: 'center', color: 'white'}}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.textoImagemProdutor}>Detalhes produto</Text>
        </View>
      </View>

      <View id="logoCesta" style={styles.logoCesta}>
        <View id="nomeLogoProdutor" style={styles.nomeLogoProdutor}>
          <Image
            style={styles.logo}
            source={require('../../../public/images/logo.png')}
          />
          <Text style={styles.nomeProdutor}>Produtor {produtor.nome}</Text>
        </View>

        <View id="cestas">
          <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>
            Cestas
          </Text>

          <FlatList
            data={produtor.cestas}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Cesta', {...item});
                }}>
                <CestaCard {...item} key={item.id} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imagemProduto: {
    width: '100%',
    height: 130,
    backgroundColor: 'red',
    position: 'absolute',
  },
  textoImagemProdutor: {
    textAlign: 'center',
    fontWeight: 'bold',
    flexDirection: 'row',
    color: 'white',
  },
  botaoVoltar: {
    paddingHorizontal: 10,
    top: 20,
    left: 5,
    textAlign: 'center',
    width: 70,
    padding: 5,
    color: 'white',
    backgroundColor: '#27ae60',
    borderRadius: 5,
  },
  logoCesta: {
    top: 60,
    marginHorizontal: 20,
  },
  logo: {
    height: 80,
    width: 80,
  },
  nomeProdutor: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  nomeLogoProdutor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
