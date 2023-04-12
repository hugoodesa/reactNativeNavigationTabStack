/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {
  FlatList,
  /* FlatList,  */
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {itens} from '../../mock/itens';

export const Itens = () => {
  return (
    <View style={styles.itens}>
      <Text style={styles.titulo}>Itens da Cesta</Text>

      <FlatList
        data={itens}
        renderItem={({item}) => (
          <View style={styles.itemCard} key={item.id}>
            <Text>{item.nome}</Text>
          </View>
        )}
        keyExtractor={({id}) => `${id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
  },
  itens: {
    margin: 23,
  },
  itemCard: {
    paddingVertical: 20,
    borderBottomWidth: 0.2,
  },
});
