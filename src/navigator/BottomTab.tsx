import React from 'react';
import {Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {icons, SIZES, COLORS, FONTS} from '../constants';
import ProductScreen from '../screen/Main/Product/ProductScreen';

type TabBarIconParams = {focused: boolean; size: number; colour: string};

const BottomTab: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: true,
        tabBarStyle: {
          ...FONTS.h5,
        },
        tabBarStyle: {
          height: SIZES.h1 * 2,
          backgroundColor: COLORS.white,
          borderTopWidth: 1,
        },
        tabBarLabel: ({focused}) => (
          <Text style={{...FONTS.body5, color: COLORS.black}}>
            {route.name}
          </Text>
        ),
        tabBarIcon: ({focused, size, colour}: TabBarIconParams) => {
          let iconName;
          if (route.name === 'My Products') {
            iconName = focused ? icons.product : icons.product;
            (size = focused ? SIZES.h3 : SIZES.h3),
              (colour = focused ? COLORS.black : COLORS.black);
          }
          return (
            <Image
              source={iconName}
              style={{
                height: SIZES.h2,
                width: SIZES.h2 * 1.14,
                tintColor: colour,
              }}
            />
          );
        },
        headerShown: false,
      })}>
      <Tab.Screen name="My Products" component={ProductScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
