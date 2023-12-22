import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {SIZES, COLORS} from '../../../../constants';

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const Thumb = ({name}) => {
  return <View style={name === 'high' ? styles.rootHigh : styles.rootLow} />;
};

const styles = StyleSheet.create({
  rootLow: {
    width: SIZES.base,
    height: SIZES.base,
    borderRadius: 100,
    // borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
  rootHigh: {
    width: SIZES.h2,
    height: SIZES.h2,
    borderRadius: 100,
    // marginRight: SIZES.h1,
    borderWidth: 2,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
  },
});

export default memo(Thumb);
