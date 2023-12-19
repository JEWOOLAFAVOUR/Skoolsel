import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../constants';

const ProductButton = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={{...FONTS.body3, color: COLORS.black}}
      />
    </View>
  );
};

export default ProductButton;

const styles = StyleSheet.create({
  container: {
    height: SIZES.h1,
    borderRadius: SIZES.base,
    borderWidth: 1,
  },
});
