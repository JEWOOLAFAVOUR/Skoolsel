import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/Auth/Splash';
import VerificationScreen from '../screen/Auth/Verification/VerificationScreen';
import VerificationType from '../screen/Auth/Verification/VerificationType';
import UploadProfilePic from '../screen/Auth/Verification/UploadProfilePic';
import RegistrationDone from '../screen/Auth/Verification/RegistrationDone';
import AddFilter from '../screen/Main/Product/Search/AddFilter';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddFilter" component={AddFilter} />
      <Stack.Screen name="Splash" component={Splash} />
      {/* VERIFICATION  */}
      <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
      <Stack.Screen name="VerificationType" component={VerificationType} />
      <Stack.Screen name="UploadProfilePic" component={UploadProfilePic} />
      <Stack.Screen name="RegistrationDone" component={RegistrationDone} />
    </Stack.Navigator>
  );
};

export default AuthStack;
