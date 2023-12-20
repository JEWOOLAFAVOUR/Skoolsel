import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, images, FONTS} from '../../../constants';
import FormButton from '../../../components/Button/FormButton';
import {useNavigation} from '@react-navigation/native';

const VerificationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <View style={{flex: 1}}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.replace('AppStack', {screen: 'Bottom'})}>
            <Image
              source={icons.close}
              style={{
                height: SIZES.h2 * 0.8,
                width: SIZES.h2 * 0.8,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
          <Image
            source={images.image3}
            style={{
              height: SIZES.height * 0.307,
              width: SIZES.width * 0.76,
              marginTop: SIZES.h2,
            }}
          />
        </View>
        <View style={{marginTop: SIZES.h1 * 1.2}}>
          <Text
            style={{
              ...FONTS.h1,
              fontSize: SIZES.h1 * 1.3,
              color: COLORS.black,
              fontFamily: 'Quicksand-Bold',
            }}>
            Verify
          </Text>
          <Text
            style={{
              ...FONTS.h1,
              fontSize: SIZES.h1 * 1.3,
              color: COLORS.black,
              fontFamily: 'Quicksand-Bold',
            }}>
            your identity
          </Text>
          <Text
            style={{
              ...FONTS.body4,
              fontSize: SIZES.body4 * 0.98,
              color: '#181818',
              marginTop: SIZES.h1 * 1.2,
            }}>
            To ensure a trustworthy and secure marketplace, we require{' '}
            <Text style={{...FONTS.h4, color: COLORS.black}}>
              account verification
            </Text>{' '}
            for posting products, prioritising for posting products,
            prioritising the safety and satisfaction of our users.
          </Text>
        </View>
      </View>
      <FormButton
        title="Get started"
        onPress={() => navigation.navigate('VerificationType')}
      />
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h3,
    paddingBottom: SIZES.h1,
  },
});
