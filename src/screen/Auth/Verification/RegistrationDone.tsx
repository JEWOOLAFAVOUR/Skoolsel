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

const RegistrationDone = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.replace('AppStack', {screen: 'Bottom'});
  };

  return (
    <View style={styles.page}>
      <View style={{flex: 1}}>
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.black,
            fontFamily: 'Quicksand-Bold',
            marginRight: SIZES.h1 * 3,
          }}>
          Thank you, we're just checking your details...
        </Text>
        <Text
          style={{...FONTS.body3a, color: COLORS.black, marginTop: SIZES.h4}}>
          Our team are carrying out checks on the information you've given us.
        </Text>
        <Text
          style={{
            ...FONTS.body3a,
            color: COLORS.black,
            marginRight: SIZES.h1 * 2,
            marginTop: SIZES.h5,
          }}>
          We'll send you a notification when we need you to check back in on the
          app.
        </Text>
      </View>
      <FormButton title="Back to home" onPress={() => handleNext()} />
    </View>
  );
};

export default RegistrationDone;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h2,
    paddingBottom: SIZES.h1,
  },
});
