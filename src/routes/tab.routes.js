/* eslint-disable prettier/prettier */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Produtores from '../screens/produtores';
import {Text, View} from 'react-native';
import {StackRouter} from './stack.routes';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export const TabNavegacao = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#27ae60',
      tabBarInactiveTintColor: '#95a5a6',
    }}>
    <Tab.Screen name="HomeProdutor" component={StackRouter} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);
