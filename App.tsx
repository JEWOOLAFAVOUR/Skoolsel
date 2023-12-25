import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigator/AuthStack';
import AppStack from './src/navigator/AppStack';
import {COLORS} from './src/constants';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './src/redux/store';

export const reduxPersistStore = persistStore(reduxStore);

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={reduxStore}>
      <PersistGate persistor={reduxPersistStore}>
        <NavigationContainer>
          <StatusBar
            backgroundColor={COLORS.primary}
            barStyle="light-content"
          />
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="AppStack" component={AppStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

// import { StatusBar, BackHandler } from 'react-native';
// import React, { useEffect, useRef } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { Provider } from 'react-redux'
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import constants from './src/redux/constants';
// import axios from 'axios';
// import AppStack from './navigator/AppStack';
// const { MyLightTheme, BASE_URL } = constants;
// import Toast from 'react-native-toast-message'
// import AuthStack from './navigator/AuthStack';
// import reduxStore from './src/redux/store';
// import { COLORS } from './src/constants';

// export const reduxPersistStore = persistStore(reduxStore);

// const App = () => {
//   const setUrlConfig = () => {
//     console.log('called setUrlConfig');
//     axios.defaults.baseURL = BASE_URL;
//   }
//   useEffect(() => {
//     setUrlConfig();
//   })
//   const Stack = createNativeStackNavigator();
//   return (
//     <>
//       <Provider store={reduxStore}>
//         <PersistGate persistor={reduxPersistStore}>
//           <StatusBar backgroundColor={COLORS.primary} barStyle='light-content' />
//           <NavigationContainer theme={MyLightTheme}>
//             <Stack.Navigator initialRouteName='AuthStack' screenOptions={{ headerShown: false }}>
//               <Stack.Screen name='AuthStack' component={AuthStack} />
//               <Stack.Screen name='Main' component={AppStack} />
//             </Stack.Navigator>
//           </NavigationContainer>
//         </PersistGate>
//       </Provider>
//       <Toast />
//     </>
//   )
// }

// export default App;

// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'
// // import About from './src/screens/Profile/Settings/About'

// // const App = () => {
// //   return (
// //     <View style={{ flex: 1 }}>
// //       <About />
// //     </View>
// //   )
// // }

// // export default App

// // const styles = StyleSheet.create({})
