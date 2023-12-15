import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ImageSlider} from 'react-native-image-slider-banner';
import {icons} from '../../constants';

const ImageSliderComponent = ({imgData}) => {
  const A = () => {
    return <Text>AAAAAAAss</Text>;
  };
  return (
    <View>
      <ImageSlider
        preview={false}
        data={imgData}
        autoPlay={true}
        closeIconColor="#fff"
        caroselImageContainerStyle={{
          height: SIZES.height * 0.38,
          width: SIZES.width,
          alignItems: 'center',
          justifyContent: 'center',
          top: SIZES.base,
          borderRadius: SIZES.h5,
        }}
        caroselImageStyle={{
          borderRadius: SIZES.h5,
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
        autoplayInterval={4000}
        ImageComponent={A}
      />
    </View>
  );
};

export default ImageSliderComponent;

const styles = StyleSheet.create({});
