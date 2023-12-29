import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import HeaderA from '../../../components/Header/HeaderA';
import ImageSliderComponent from '../../../components/utils/ImageSliderComponent';
import {images, icons, FONTS, COLORS, SIZES} from '../../../constants';
import {singleData} from '../../../components/utils/productDetailsData';

const ProductDetails = ({route}) => {
  const [toogle, setToogle] = useState(false);
  const productData = route?.params?.data || singleData;
  const [numOfLines, setNumOfLines] = useState(3);

  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.page}>
      {/* FOR HEADER CAN BE REUSABLE */}
      <HeaderA
        title="Product details"
        vertical={true}
        btnCtn={{paddingHorizontal: SIZES.width * 0.04}}
      />
      {/* IMAGE SLIDER */}
      <ScrollView>
        <ImageSliderComponent imgData={productData.productImage} />
        {/* DESCRIPTION AND OTHERS */}
        <View
          style={{paddingHorizontal: SIZES.width * 0.04, paddingTop: SIZES.h1}}>
          <View style={{marginBottom: SIZES.h4}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                // marginBottom: SIZES.base,
              }}>
              <Text
                style={{
                  ...FONTS.body4b,
                  fontFamily: 'OpenSans-Medium',
                  color: COLORS.chocolate,
                }}>
                {productData?.title}
              </Text>
              <TouchableOpacity onPress={() => setToogle(!toogle)}>
                <Image
                  source={icons.bookmark}
                  style={{height: SIZES.h1 * 0.9, width: SIZES.h1 * 0.9}}
                />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{...FONTS.h3, color: COLORS.black}}>
                ₦{productData?.price}
              </Text>
              <Text
                style={{
                  ...FONTS.body5,
                  color: COLORS.chocolate,
                  marginLeft: SIZES.h5,
                  marginBottom: SIZES.base * 0.5,
                }}>
                (234 View)
              </Text>
            </View>
            <Text
              style={{
                ...FONTS.body5,
                color: COLORS.chocolate,
                // marginTop: SIZES.base * 0.5,
              }}>
              {productData?.createdAt}
            </Text>
          </View>

          {/* BIO */}
          <View>
            <View
              style={{height: 1, backgroundColor: COLORS.chocolateBackground}}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: SIZES.base * 0.8,
              }}>
              <Image
                source={productData?.seller?.avatar || images.image1}
                style={{
                  height: SIZES.h1 * 1.4,
                  width: SIZES.h1 * 1.4,
                  borderRadius: 100,
                }}
              />
              <View style={{marginLeft: SIZES.h4}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{...FONTS.h4, color: COLORS.black}}>
                    @{productData?.seller?.username}
                  </Text>
                  <Image
                    source={icons.badge}
                    style={{
                      height: SIZES.h3,
                      width: SIZES.h3,
                      marginLeft: SIZES.base,
                    }}
                  />
                </View>
                <Text style={{...FONTS.body5a, color: COLORS.black}}>
                  {productData?.seller?.location}
                </Text>
              </View>
            </View>
            <View
              style={{height: 1, backgroundColor: COLORS.chocolateBackground}}
            />
          </View>

          {/* DESCRIPTION */}
          <View style={{marginTop: SIZES.h5}}>
            <Text style={{...FONTS.body4, color: COLORS.black}}>
              Description
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowMore(!showMore)}>
              <Text
                numberOfLines={showMore ? undefined : 3}
                style={{
                  ...FONTS.body5,
                  color: COLORS.chocolate,
                }}>
                {productData?.description}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: SIZES.base,
    backgroundColor: COLORS.white,
  },
});
