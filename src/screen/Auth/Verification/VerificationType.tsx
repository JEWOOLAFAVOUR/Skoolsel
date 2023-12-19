import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, icons} from '../../../constants';
import HeaderA from '../../../components/Header/HeaderA';

const VerificationType = () => {
  return (
    <View style={styles.page}>
      <HeaderA />
      <Text>VerificationType</Text>
    </View>
  );
};

export default VerificationType;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h5,
  },
});
