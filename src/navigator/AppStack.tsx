import {StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import ProductDetails from '../screen/Main/Product/ProductDetails';
import {COLORS} from '../constants';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={BottomTab} />
        {/* HOME */}
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
    </>
  );
};

export default AppStack;
