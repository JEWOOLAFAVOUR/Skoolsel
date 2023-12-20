import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../constants';

const ProductInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#666666"
        style={{...FONTS.body3c, color: COLORS.black}}
      />
    </View>
  );
};

export default ProductInput;

const styles = StyleSheet.create({
  container: {
    height: SIZES.h1 * 1.9,
    borderRadius: SIZES.base * 0.8,
    backgroundColor: COLORS.offwhite,
    marginBottom: SIZES.h3,
    paddingHorizontal: SIZES.h5,
  },
});
