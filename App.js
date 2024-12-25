import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MatchScreen from './src/screens/MatchScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Match" component={MatchScreen} options={{ title: 'Futsal Match' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
