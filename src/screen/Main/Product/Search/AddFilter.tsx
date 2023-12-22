import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../constants';
import HeaderA from '../../../../components/Header/HeaderA';

const AddFilter = () => {
  return (
    <View style={styles.page}>
      <HeaderA title="Add filter" />
    </View>
  );
};

export default AddFilter;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h4,
  },
});
