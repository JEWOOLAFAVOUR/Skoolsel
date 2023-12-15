import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../../constants';
import ImageSliderComponent from '../../../components/utils/ImageSliderComponent';
import {useNavigation} from '@react-navigation/native';

const ProductScreen = () => {
  const navigation = useNavigation();
  const sliderData = [
    {
      img: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      img: 'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      img: 'https://images.pexels.com/photos/15698292/pexels-photo-15698292/free-photo-of-close-up-of-classic-elegant-man-shoes-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <View style={styles.page}>
      <FlatList
        data={['', '', '', '']}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetails', {data: item})
              }
              style={{marginBottom: SIZES.h2}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: SIZES.h5,
                }}>
                <Image
                  source={icons.avatar}
                  style={{
                    height: SIZES.h1 * 1.2,
                    width: SIZES.h1 * 1.2,
                    borderRadius: 100,
                  }}
                />
                <View style={{marginLeft: SIZES.h5, flex: 1}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: SIZES.h4,
                        color: COLORS.black,
                        fontFamily: 'OpenSans-Bold',
                      }}>
                      @username
                    </Text>
                    <Image
                      source={icons.badge}
                      style={{
                        height: SIZES.h3,
                        width: SIZES.h3,
                        marginLeft: SIZES.base * 0.5,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: SIZES.body5 * 0.9,
                      color: COLORS.black,
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    Federal university of technology minna
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    source={icons.verticalmenu}
                    style={{height: SIZES.h3, width: SIZES.h3}}
                  />
                </TouchableOpacity>
              </View>
              <View>
                {/* SLIDER */}
                <ImageSliderComponent imgData={sliderData} />
                {/* DETAILS */}
                <Text>Clean handbag for your simple walk.</Text>
                <Text style={{...FONTS.body4, color: COLORS.black}}>
                  Introducing our sleek and versatile crossbody bag, perfect for
                  any occasion. With multiple compactment
                </Text>
                <Text style={{...FONTS.body4, color: COLORS.black}}>
                  2hrs ago
                </Text>
              </View>
              <View style={{height: 1, backgroundColor: COLORS.black}} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h5,
    paddingHorizontal: SIZES.width * 0.05,
  },
});
