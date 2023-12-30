import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ImageSlider} from 'react-native-image-slider-banner';

const ImageSliderComponent = ({imgData, btnCtn}) => {
  return (
    <View>
      <ImageSlider
        preview={false}
        data={imgData}
        closeIconColor="#fff"
        caroselImageContainerStyle={[styles.container, btnCtn]}
        caroselImageStyle={{
          height: SIZES.height * 0.4,
          width: SIZES.width * 0.92,
          resizeMode: 'cover',
          marginRight: SIZES.base,
        }}
        activeIndicatorStyle={{
          backgroundColor: COLORS.secondary,
          width: 5.5,
          height: 5.5,
        }}
        inActiveIndicatorStyle={{
          backgroundColor: COLORS.chocolateBackground,
          width: 5.5,
          height: 5.5,
          borderRadius: SIZES.base,
        }}
        indicatorContainerStyle={{top: SIZES.h1 * 1.2}}
        autoplayInterval={10000}
      />
    </View>
  );
};

export default ImageSliderComponent;

const styles = StyleSheet.create({
  container: {
    height: SIZES.height * 0.4,
    width: SIZES.width * 0.92,
    top: SIZES.base,
    borderRadius: SIZES.h5,
    resizeMode: 'cover',
  },
});
