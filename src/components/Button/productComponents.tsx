import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {COLORS, SIZES} from '../../constants';

export const CustomPicker = ({onValueChange, items, placeholder}) => {
  return (
    <View style={styles.container}>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        placeholder={{label: placeholder, value: null}}
        style={pickerSelectStyles}
        // You can customize additional props here if needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.h1 * 1.9,
    borderRadius: SIZES.base * 0.8,
    backgroundColor: COLORS.offwhite,
    marginBottom: SIZES.h3,
    paddingHorizontal: SIZES.h5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
