import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Form from './Form.js';
import ListParcitipants from './ListParcitipants';
import ListWinners from './ListWinners';
import ListPitstops from './ListPitstops';
import DetailsParcitipant from './DetailsParcitipant';
import DetailsResult from './DetailsResult';
import DetailsPitstop from './DetailsPitstop';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Formularz" component={Form} />
        <Stack.Screen name="ListaUczestników" component={ListParcitipants} />
        <Stack.Screen name="ListaWyników" component={ListWinners} />
        <Stack.Screen name="ListaPitstopów" component={ListPitstops} />
        <Stack.Screen name="SzczegółyUczestnika" component={DetailsParcitipant} />
        <Stack.Screen name="SzczegółyWyniku" component={DetailsResult} />
        <Stack.Screen name="SzczegółyPitstopa" component={DetailsPitstop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}