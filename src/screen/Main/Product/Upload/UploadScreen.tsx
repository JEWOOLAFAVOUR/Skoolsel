import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, images, icons} from '../../../../constants';
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
            marginTop: SIZES.h1,
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
        <TouchableOpacity style={styles.uploadCtn}>
          <Image
            source={icons.camera}
            style={{
              height: SIZES.h1 * 1.2,
              width: SIZES.h1 * 1.42,
              marginBottom: SIZES.h5,
            }}
          />
          <Text
            style={{
              ...FONTS.body3a,
              color: COLORS.primary,
              fontFamily: 'OpenSans-Medium',
            }}>
            Upload photo
          </Text>
        </TouchableOpacity>
      </View>
      <FormButton title="Next" btnStyle={{backgroundColor: '#BDCDD6'}} />
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
  uploadCtn: {
    height: SIZES.height * 0.23,
    borderWidth: 1.3,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.cream,
    borderRadius: SIZES.base,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.h1 * 1.7,
  },
});
