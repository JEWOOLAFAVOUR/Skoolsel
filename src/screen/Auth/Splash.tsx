import {Image, StatusBar, StyleSheet, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {SIZES, images, COLORS, FONTS} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('AppStack', {screen: 'Bottom'});
      navigation.navigate('VerificationScreen');
    }, 1000);
  }, []);

  return (
    <View style={styles.page}>
      <Image
        source={images.logo}
        style={{height: SIZES.height * 0.071, width: SIZES.width * 0.7}}
      />
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
    paddingHorizontal: SIZES.width * 0.1,
  },
});
