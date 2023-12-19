import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/Auth/Splash';
import VerificationScreen from '../screen/Auth/Verification/VerificationScreen';
import VerificationType from '../screen/Auth/Verification/VerificationType';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      {/* VERIFICATION  */}
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="VerificationType" component={VerificationType} />
    </Stack.Navigator>
  );
};

export default AuthStack;
