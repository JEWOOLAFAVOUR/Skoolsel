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

const ProductScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={['', '', '', '']}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={{marginBottom: SIZES.h2}}>
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
                <Image
                  source={images.image2}
                  style={{height: SIZES.height * 0.3, width: SIZES.width * 0.9}}
                />
                {/* DETAIL  */}
                <View>
                  <Text style={{...FONTS.body4, color: COLORS.black}}>
                    Fashion
                  </Text>
                  <Image
                    source={icons.bookmark}
                    style={{height: SIZES.h2, width: SIZES.h2}}
                  />
                </View>
              </View>
            </View>
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
