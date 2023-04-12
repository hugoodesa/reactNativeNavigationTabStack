/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {TabNavegacao} from './src/routes/tab.routes';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <TabNavegacao />
      </NavigationContainer>
    </>
  );
}
