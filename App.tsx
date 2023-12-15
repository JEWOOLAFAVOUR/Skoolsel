import {StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigator/AuthStack';
import AppStack from './src/navigator/AppStack';
import {COLORS} from './src/constants';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
