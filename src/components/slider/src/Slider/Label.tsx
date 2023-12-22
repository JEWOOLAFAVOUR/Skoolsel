import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SIZES} from '../../../../constants';

const Label = ({text, ...restProps}) => {
  return (
    <View style={styles.root} {...restProps}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#4499ff',
    borderRadius: 4,
  },
  text: {
    fontSize: SIZES.h3,
    color: '#fff',
  },
});

export default memo(Label);
