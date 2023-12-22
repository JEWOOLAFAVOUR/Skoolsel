import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../../constants';

const Rail = () => {
  return <View style={styles.root} />;
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // marginRight: SIZES.h5,
    height: 3,
    borderRadius: 2,
    backgroundColor: COLORS.offwhite,
  },
});
