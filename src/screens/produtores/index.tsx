/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unstable-nested-components */

import ProdutoresLista from '../../components/produtoresLista';
import ProdutoresTopo from '../../components/produtoresTopo';
import {useRoute} from '@react-navigation/native';
import {Cesta} from '../../service';
import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const Produtores = () => {
  const route = useRoute();
  const params = route.params as Cesta;
  const [mostrarMSG, setMostrarMSG] = useState<boolean>(false);

  useEffect(() => {
    if (params != null) {
      console.log(JSON.stringify(params));

      setMostrarMSG(true);

      setTimeout(() => {
        setMostrarMSG(false);
      }, 3000);
    }
  }, [params]);

  const CompraRealizada = () => (
    <View style={{backgroundColor: '#55efc4', padding: 10, margin: 10}}>
      <Text style={{fontWeight: 'bold', color: 'white'}}>
        Compra realiza com sucesso !
      </Text>
    </View>
  );

  return (
    <>
      {mostrarMSG ? <CompraRealizada /> : <></>}
      <ProdutoresTopo />
      <ProdutoresLista />
    </>
  );
};

export default Produtores;
