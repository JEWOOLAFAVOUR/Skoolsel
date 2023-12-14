import React from 'react';
import {Image} from 'react-native';
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
        tabBarIcon: ({focused, size, colour}: TabBarIconParams) => {
          let iconName;
          if (route.name === 'Product') {
            iconName = focused ? icons.product : icons.product;
            (size = focused ? SIZES.h3 : SIZES.h3),
              (colour = focused ? COLORS.black : COLORS.black);
          }
          return (
            <Image
              source={iconName}
              style={{
                height: SIZES.h1 * 0.9,
                width: SIZES.h1 * 0.9,
                tintColor: colour,
              }}
            />
          );
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Product" component={ProductScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
