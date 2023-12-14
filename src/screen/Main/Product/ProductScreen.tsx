import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../constants';

const ProductScreen = () => {
  return (
    <View style={styles.page}>
      <Text>ProductScreen</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h5,
    paddingHorizontal: SIZES.width * 0.05,
  },
});
