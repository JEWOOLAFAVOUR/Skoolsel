import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, images, FONTS} from '../../../constants';
import FormButton from '../../../components/Button/FormButton';
import {useNavigation} from '@react-navigation/native';

const VerificationScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <View style={{flex: 1}}>
        <View>
          <Image
            source={icons.close}
            style={{height: SIZES.h1, width: SIZES.h1, alignSelf: 'flex-end'}}
          />
          <Image
            source={images.image3}
            style={{height: SIZES.height * 0.3, width: SIZES.width * 0.6}}
          />
        </View>
        <View>
          <Text style={{...FONTS.h2, color: COLORS.black}}>Verify</Text>
          <Text style={{...FONTS.h2, color: COLORS.black}}>your identity</Text>
          <Text style={{...FONTS.body4, color: COLORS.black}}>
            To ensure a trustworthy and secure marketlace, we require{' '}
            <Text style={{...FONTS.h4}}>account verification</Text> for posting
            products, prioritising for posting products, prioritising the safety
            and satisfaction of our users.
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
    paddingBottom: SIZES.h4,
  },
});
