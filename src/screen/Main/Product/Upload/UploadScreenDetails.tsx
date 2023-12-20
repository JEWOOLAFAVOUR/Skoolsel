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
import RNPickerSelect from 'react-native-picker-select';
import {CustomPicker} from '../../../../components/Button/productComponents';

const UploadScreenDetails = () => {
  const navigation = useNavigation();
  const pickerItems = [
    {label: 'Football', value: 'football'},
    {label: 'Baseball', value: 'baseball'},
    {label: 'Hockey', value: 'hockey'},
  ];
  return (
    <View style={styles.page}>
      <HeaderA title="Product details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomPicker
          onValueChange={value => console.log(value)}
          items={pickerItems}
          placeholder={'Category'}
        />
        <CustomPicker
          onValueChange={value => console.log(value)}
          items={pickerItems}
          placeholder={'Select category'}
        />
        <ProductInput placeholder="Title" />
        <CustomPicker
          onValueChange={value => console.log(value)}
          items={pickerItems}
          placeholder={'Condition'}
        />
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
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
