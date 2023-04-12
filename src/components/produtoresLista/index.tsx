/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

/* import ProdutorCard from '../produtoresCard'; */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Produtor, getProdutores} from '../../service';
import ProdutorCard from '../produtoresCard';
import {useNavigation} from '@react-navigation/native';

const ProdutoresLista = () => {
  const navigation = useNavigation();

  const navegar = (produtor: Produtor) => {
    const navegar: any = 'Produtor';
    navigation.navigate(navegar, {...produtor});
  };

  return (
    <View style={style.listaProdutos}>
      <Text style={style.textoProdutores}>Produtores</Text>

      <FlatList
        data={getProdutores}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navegar(item)}>
            <ProdutorCard {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={produtor => `${produtor.id}`}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listaProdutos: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
  textoProdutores: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProdutoresLista;
