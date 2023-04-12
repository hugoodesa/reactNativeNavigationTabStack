/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {Topo} from '../../components/topo';
import {Descricao} from '../../components/descricao';
import {Itens} from '../../components/items';
import {useNavigation} from '@react-navigation/native';
import {Cesta as CestaType, cestas} from '../../service';

export const Cesta = () => {
  const screenHeight = Dimensions.get('window').height;
  const navigate = useNavigation();

  const navegarHome = () => {
    const cesta: CestaType = cestas[0];
    navigate.navigate('Home', {...cesta});
  };

  return (
    <View style={{height: screenHeight}}>
      <Topo />
      <Descricao />

      <View id="botao_comprar">
        <TouchableOpacity
          style={{backgroundColor: 'green', width: 200, marginLeft: 20}}
          onPress={navegarHome}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              padding: 12,
              textAlign: 'center',
            }}>
            Comprar cesta
          </Text>
        </TouchableOpacity>
      </View>

      <View id="itens_cesta">
        <Itens />
      </View>
    </View>
  );
};
