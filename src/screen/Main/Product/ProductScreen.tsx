import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../../constants';
import ImageSliderComponent from '../../../components/utils/ImageSliderComponent';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Modal from 'react-native-modal';
import {productData} from '../../../components/utils/productDetailsData';

const ProductScreen = () => {
  const navigation = useNavigation();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const refRBSheet = useRef();
  const [product, setProduct] = useState([]);

  const openBottomSheet = () => {
    // setBottomSheetVisible(true);
    refRBSheet.current.open();
  };

  useEffect(() => {
    setTimeout(() => {
      setProduct(productData);
    }, 1000);
  }, []);

  const RenderEmpty = () => {
    return (
      <View style={{alignItems: 'center', marginTop: SIZES.height * 0.1}}>
        <Image
          source={icons.empty}
          style={{height: SIZES.height * 0.3, width: SIZES.width * 0.55}}
        />
        <Text
          style={{
            ...FONTS.body2,
            fontFamily: 'OpenSans-Medium',
            color: COLORS.black,
            marginTop: SIZES.h1 * 1.3,
          }}>
          No post yet
        </Text>
        <Text
          style={{
            ...FONTS.body4,
            color: COLORS.black,
            marginHorizontal: SIZES.h1 * 2,
            textAlign: 'center',
          }}>
          When you post products they will appears here.
        </Text>
        <TouchableOpacity
          style={[
            styles.modalBtn,
            {backgroundColor: COLORS.primary, width: SIZES.width * 0.8},
          ]}>
          <Text style={{...FONTS.body3, color: COLORS.white}}>
            Post a product
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <FlatList
        // data={productData}
        data={product}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={RenderEmpty}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetails', {data: item})
              }
              style={{marginBottom: SIZES.h2}}>
              <View style={{paddingHorizontal: SIZES.width * 0.03}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: SIZES.h5,
                  }}>
                  <Image
                    source={item.seller.avatar}
                    style={{
                      height: SIZES.h1 * 1.2,
                      width: SIZES.h1 * 1.2,
                      borderRadius: 100,
                    }}
                  />
                  <View style={{marginLeft: SIZES.base, flex: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text
                        style={{
                          fontSize: SIZES.h4,
                          color: COLORS.black,
                          fontFamily: 'OpenSans-Bold',
                        }}>
                        @{item.seller.username}
                      </Text>
                      <Image
                        source={item.seller.verified === true && icons.badge}
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
                      {item.seller.location}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => openBottomSheet()}>
                    <Image
                      source={icons.verticalmenu}
                      style={{height: SIZES.h3, width: SIZES.h3}}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  {/* SLIDER */}
                  <View>
                    <ImageSliderComponent imgData={item.productImage} />
                    <View style={styles.priceCtn}>
                      <Text style={{...FONTS.body4, color: COLORS.white}}>
                        ₦{item.price}
                      </Text>
                    </View>
                  </View>
                  {/* CATEGORY  */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: SIZES.h5,
                      marginBottom: SIZES.base,
                    }}>
                    <Text
                      style={{
                        ...FONTS.body4,
                        color: COLORS.black,
                        fontFamily: 'OpenSans-Medium',
                      }}>
                      {item.category}
                    </Text>
                    <TouchableOpacity>
                      <Image
                        source={icons.bookmark}
                        style={{height: SIZES.h2 * 1.1, width: SIZES.h2 * 1.1}}
                      />
                    </TouchableOpacity>
                  </View>
                  {/* DETAILS */}
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.black,
                      fontFamily: 'OpenSans-Medium',
                    }}>
                    {item.title}
                  </Text>
                  <Text style={{...FONTS.body4b, color: COLORS.black}}>
                    Introducing our sleek and versatile crossbody bag, perfect
                    for any occasion. With multiple compactment
                  </Text>
                  <Text style={{...FONTS.body5a, color: COLORS.black}}>
                    {item.createdAt}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: COLORS.chocolateBackground,
                  marginTop: SIZES.h4,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
      {/* BOTTOM SHEET  */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={SIZES.height * 0.3}
        customStyles={{
          container: {
            borderTopLeftRadius: SIZES.h3 * 1.1,
            borderTopRightRadius: SIZES.h3 * 1.1,
          },
        }}>
        <View
          style={{paddingHorizontal: SIZES.width * 0.05, paddingTop: SIZES.h4}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{...FONTS.body4, color: COLORS.chocolate}}>Menu</Text>
            <TouchableOpacity onPress={() => refRBSheet.current.close()}>
              <Image
                source={icons.close}
                style={{height: SIZES.h4 * 1.1, width: SIZES.h4 * 1.1}}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{marginTop: SIZES.h1}}>
            <Text style={styles.bottomText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(true);
              refRBSheet.current.close();
            }}
            style={{marginTop: SIZES.h2}}>
            <Text style={[styles.bottomText, {color: 'red'}]}>Delete</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
      {/* MODAL */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalCtn}>
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.black,
              fontFamily: 'OpenSans-Medium',
            }}>
            Delete Product
          </Text>
          <Text style={{...FONTS.body5, color: COLORS.black}}>
            Are you sure you want to delete this product?
          </Text>
          {/* PICTURE  */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: SIZES.h2,
            }}>
            <Image
              source={images.image1}
              style={{
                height: SIZES.h1 * 2,
                width: SIZES.h1 * 2,
                borderRadius: SIZES.base,
              }}
            />
            <View style={{marginLeft: SIZES.base}}>
              <Text
                style={{
                  ...FONTS.body5,
                  color: COLORS.black,
                  fontFamily: 'OpenSans-Medium',
                }}>
                Clean handbag for your simple walk.
              </Text>
              <Text style={{...FONTS.body5, color: COLORS.black}}>N20,000</Text>
            </View>
          </View>
          {/* BUTTONS */}
          <TouchableOpacity style={styles.modalBtn}>
            <Text style={{...FONTS.body4, color: COLORS.white}}>
              Yes, Delete
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.primary,
                textAlign: 'center',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: SIZES.h5,
  },
  bottomText: {
    color: COLORS.black,
    ...FONTS.body3,
  },
  modalCtn: {
    height: SIZES.height * 0.37,
    width: SIZES.width * 0.88,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderRadius: SIZES.h4,
    paddingHorizontal: SIZES.width * 0.04,
    justifyContent: 'center',
  },
  modalBtn: {
    height: SIZES.h1 * 1.7,
    backgroundColor: COLORS.orange,
    borderRadius: SIZES.h1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.h1,
    marginBottom: SIZES.h4,
  },
  priceCtn: {
    height: SIZES.h1,
    width: SIZES.h1 * 3.2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.h1,
    backgroundColor: COLORS.black,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: SIZES.h3,
    right: SIZES.h5,
  },
});
