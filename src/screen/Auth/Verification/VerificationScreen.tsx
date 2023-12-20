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
          <TouchableOpacity>
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
            style={{height: SIZES.height * 0.33, width: SIZES.width * 0.82}}
          />
        </View>
        <View>
          <Text
            style={{
              ...FONTS.h1,
              color: COLORS.black,
              fontFamily: 'OpenSans-Medium',
            }}>
            Verify
          </Text>
          <Text
            style={{
              ...FONTS.h1,
              color: COLORS.black,
              fontFamily: 'OpenSans-Medium',
            }}>
            your identity
          </Text>
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
    paddingTop: SIZES.h3,
    paddingBottom: SIZES.h3,
  },
});
