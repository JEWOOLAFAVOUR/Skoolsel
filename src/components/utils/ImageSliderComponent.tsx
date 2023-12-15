import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {ImageSlider} from 'react-native-image-slider-banner';
import {icons} from '../../constants';

const ImageSliderComponent = ({imgData}) => {
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
          backgroundColor: COLORS.black,
          width: 5.5,
          height: 5.5,
        }}
        inActiveIndicatorStyle={{
          backgroundColor: COLORS.primary,
          width: 5.5,
          height: 5.5,
          borderRadius: SIZES.base,
        }}
        indicatorContainerStyle={{top: SIZES.h1 * 1.2}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: SIZES.h5,
        }}>
        <Text style={{...FONTS.body4, color: COLORS.black}}>Fashion</Text>
        <Image
          source={icons.bookmark}
          style={{height: SIZES.h3, width: SIZES.h3}}
        />
      </View>
    </View>
  );
};

export default ImageSliderComponent;

const styles = StyleSheet.create({});
