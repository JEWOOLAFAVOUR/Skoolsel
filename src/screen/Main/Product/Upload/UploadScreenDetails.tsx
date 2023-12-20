import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS} from '../../../../constants';
import HeaderA from '../../../../components/Header/HeaderA';
import FormButton from '../../../../components/Button/FormButton';
import {useNavigation} from '@react-navigation/native';
import ProductInput from '../../../../components/Input/ProductInput';

const UploadScreenDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <HeaderA title="Product details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductInput placeholder="Category" />
        <ProductInput placeholder="Select Category" />
        <ProductInput placeholder="Condition" />
        <ProductInput placeholder="₦ Enter amount" />
        <ProductInput
          placeholder="Product description"
          btnCtn={{height: SIZES.h1 * 5}}
        />
        {/* BUTTON */}
        <View style={{marginTop: SIZES.h2}}>
          <FormButton
            title="Post"
            onPress={() => navigation.replace('AppStack', {screen: 'Bottom'})}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.primary,
                textAlign: 'center',
              }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
