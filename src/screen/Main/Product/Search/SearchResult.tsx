import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, FONTS, images} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import {searchResultData} from '../../../../components/utils/productDetailsData';

const SearchResult = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.page}>
      {/* SEARCH CONTAINER  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SearchScreen')}
          style={styles.container}>
          <Image
            source={icons.search}
            style={{
              height: SIZES.h3,
              width: SIZES.h3,
              marginRight: SIZES.base * 0.5,
            }}
          />
          <Text style={{...FONTS.body4, color: COLORS.black}}>
            search product
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('FilterScreen')}
          style={styles.filterCtn}>
          <Image
            source={icons.filter}
            style={{height: SIZES.h2, width: SIZES.h2}}
          />
        </TouchableOpacity>
      </View>
      {/* REALTIME SEARCH */}
      <View style={{marginTop: SIZES.h1, marginBottom: SIZES.h1 * 1.4}}>
        <FlatList
          data={searchResultData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={{marginBottom: SIZES.h4}}>
                <TouchableOpacity
                  //   onPress={() => navigation.navigate('SearchResult')}
                  style={styles.searchContainer}>
                  <Image
                    source={{uri: item.productImage}}
                    style={{
                      height: SIZES.h1 * 3.7,
                      width: SIZES.h1 * 3.7,
                      borderRadius: SIZES.base,
                    }}
                  />
                  <View style={{flex: 1, marginLeft: SIZES.h5}}>
                    <View style={{flex: 1}}>
                      <Text style={{...FONTS.h5, color: COLORS.black}}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: SIZES.body5,
                          fontFamily: 'OpenSans-Regular',
                          color: COLORS.black,
                        }}>
                        {item.description}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{
                          fontFamily: 'OpenSans-Bold',
                          fontSize: SIZES.h3 * 0.9,
                          color: COLORS.black,
                        }}>
                        ₦{item.price}
                      </Text>
                      <TouchableOpacity>
                        <Text style={{...FONTS.body5, color: COLORS.primary}}>
                          View details
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    height: 1.2,
                    backgroundColor: COLORS.chocolateBackground,
                    marginTop: SIZES.h4,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h3,
  },
  container: {
    height: SIZES.h1 * 1.5,
    width: SIZES.width * 0.71,
    borderRadius: SIZES.base * 0.6,
    paddingHorizontal: SIZES.h5,
    backgroundColor: COLORS.offwhite,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterCtn: {
    height: SIZES.h1 * 1.5,
    width: SIZES.h1 * 2.2,
    borderRadius: SIZES.base * 0.6,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
