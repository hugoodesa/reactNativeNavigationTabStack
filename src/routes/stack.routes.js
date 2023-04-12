/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {Cesta} from '../screens/cesta';
import Produtores from '../screens/produtores';
import {ProdutorScreen} from '../screens/produtor';
const Stack = createNativeStackNavigator();

export const StackRouter = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Home" component={Produtores} />
    <Stack.Screen name="Cesta" component={Cesta} />
    <Stack.Screen name="Produtor" component={ProdutorScreen} />
  </Stack.Navigator>
);
