import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, images} from '../../../../constants';
import HeaderA from '../../../../components/Header/HeaderA';
import FormButton from '../../../../components/Button/FormButton';

const UploadScreen = () => {
  return (
    <View style={styles.page}>
      <HeaderA title="Add product" />
      <Text style={{...FONTS.h1, color: COLORS.black}}>
        Let's start by adding photos of your product
      </Text>
      <TouchableOpacity>
        <Image
          source={images.upload2}
          style={{height: SIZES.height * 0.3, width: SIZES.width * 0.92}}
        />
      </TouchableOpacity>
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
  },
});
