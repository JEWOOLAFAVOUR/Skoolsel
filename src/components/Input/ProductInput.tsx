import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, icons} from '../../constants';

const ProductInput = ({placeholder, btnCtn, value, setValue}) => {
  return (
    <View style={[styles.container, btnCtn]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        placeholderTextColor={COLORS.chocolate}
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
