import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, FONTS, icons} from '../../../../constants';
import HeaderA from '../../../../components/Header/HeaderA';
import FormButton from '../../../../components/Button/FormButton';
import {useNavigation} from '@react-navigation/native';
import ProductInput from '../../../../components/Input/ProductInput';
import RNPickerSelect from 'react-native-picker-select';
import {CustomPicker} from '../../../../components/Button/productComponents';
import {useDispatch} from 'react-redux';
import DropDown from '../../../../components/utils/DropDown';
import {postProduct} from '../../../../redux/actions/midAction';

const UploadScreenDetails = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [pickerItems, setPickerItems] = useState([
    {label: 'Fashion', value: 'Fashio'},
    {label: 'Books', value: 'Books'},
    {label: 'Shoe', value: 'Shoe'},
  ]);

  const [productData, setProductData] = useState({
    category: '',
    title: '',
    condition: '',
    price: '',
    description: '',
  });

  console.log('product data', productData);

  const handleSubmit = () => {
    console.log('product data', productData);
    const body = {
      ...productData,
      id: Math.random(),
      seller: {
        avatar: icons.avatar,
        username: 'username',
        verified: true,
        location: 'Federal University of Technology Minna',
      },
      createdAt: Date.now(),
      productImage: [
        {
          img: 'https://res.cloudinary.com/dr0nfchqe/image/upload/v1703860688/image5_sghbti.png',
        },
        {
          img: 'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585949/image1_gwseon.png',
        },
      ],
    };
    dispatch(postProduct(body));
    navigation.replace('AppStack', {screen: 'Bottom'});

    console.log('boddddddd', body);
  };

  return (
    <View style={styles.page}>
      <HeaderA title="Product details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DropDown
          placeholder="Category"
          data={pickerItems}
          setData={setPickerItems}
          onValueChange={value =>
            setProductData(prevData => ({...prevData, category: value}))
          }
        />
        <ProductInput
          placeholder="Title"
          value={productData.title}
          setValue={value =>
            setProductData(prevData => ({...prevData, title: value}))
          }
        />

        <ProductInput
          placeholder="₦ Enter amount"
          keyboardType="numeric"
          value={productData.price}
          setValue={value =>
            setProductData(prevData => ({...prevData, price: value}))
          }
        />
        <DropDown
          placeholder="Condition"
          data={pickerItems}
          setData={setPickerItems}
          onValueChange={value =>
            setProductData(prevData => ({...prevData, condition: value}))
          }
        />
        <ProductInput
          placeholder="Product description"
          value={productData.description}
          multiline={true}
          setValue={value =>
            setProductData(prevData => ({...prevData, description: value}))
          }
          btnCtn={{height: SIZES.h1 * 5}}
        />

        {/* BUTTON */}
        <View style={{marginTop: SIZES.h2}}>
          <FormButton title="Post" onPress={() => handleSubmit()} />
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
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

// <CustomPicker
// onValueChange={value => console.log(value)}
// items={pickerItems}
// placeholder={'Category'}
// />
// <CustomPicker
// onValueChange={value => console.log(value)}
// items={pickerItems}
// placeholder={'Select category'}
// />
