import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, images} from '../../../../constants';
import HeaderA from '../../../../components/Header/HeaderA';
import FormButton from '../../../../components/Button/FormButton';

const UploadScreen = () => {
  return (
    <View style={styles.page}>
      <View style={{flex: 1}}>
        <HeaderA title="Add product" />
        <Text
          style={{
            ...FONTS.h1,
            fontSize: SIZES.h1 * 1.2,
            color: COLORS.black,
            fontFamily: 'OpenSans-Medium',
          }}>
          Let's start
        </Text>
        <Text
          style={{
            ...FONTS.h1,
            fontSize: SIZES.h1 * 1.2,
            color: COLORS.black,
            fontFamily: 'OpenSans-Medium',
            marginRight: SIZES.h1,
          }}>
          by adding photos of your product
        </Text>
        <TouchableOpacity style={{marginTop: SIZES.h1 * 1.4}}>
          <Image
            source={images.upload2}
            style={{height: SIZES.height * 0.2, width: SIZES.width * 0.9}}
          />
        </TouchableOpacity>
      </View>
      <FormButton title="Next" />
    </View>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.04,
    paddingTop: SIZES.h5,
    paddingBottom: SIZES.h5,
  },
});
