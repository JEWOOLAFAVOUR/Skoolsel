import {Image, StatusBar, StyleSheet, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {SIZES, images, COLORS, FONTS} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AppStack', {screen: 'Bottom'});
    }, 1000);
  }, []);

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Text style={{...FONTS.h1, color: COLORS.white}}>Skoolsel</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
