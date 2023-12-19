import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../../../constants';
import HeaderA from '../../../../components/Header/HeaderA';
import ProductButton from '../../../../components/Button/ProductButton';
import FormButton from '../../../../components/Button/FormButton';
import {useNavigation} from '@react-navigation/native';

const UploadScreenDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <HeaderA title="Product details" />
      <View>
        <ProductButton placeholder="Title" />
        <ProductButton placeholder="Select Category" />
        <ProductButton placeholder="Condition" />
        <ProductButton placeholder="Enter amount" />
        <ProductButton placeholder="Product description" />
        {/* BUTTON */}
        <View>
          <FormButton title="Post" />
          <TouchableOpacity>
            <Text style={{...FONTS.body3, color: COLORS.primary}}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UploadScreenDetails;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.04,
  },
});
