import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, icons, FONTS, images} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';
import {searchResultData} from '../../../../components/utils/productDetailsData';

const SearchResult = () => {
  const navigation = useNavigation();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const realtimeSearchData = [
    {id: 1, title: 'Samsung', category: 'Phones'},
    {id: 2, title: 'Laptop', category: 'Phones and laptops'},
    {id: 3, title: 'Laptop', category: 'laptops'},
    {id: 4, title: 'Samsung', category: 'laptops'},
    {id: 5, title: 'Infinix', category: 'phones'},
    {id: 6, title: 'Infinix', category: 'phones'},
  ];

  const handleSearch = query => {
    setSearchQuery(query);
    setIsSearching(query.length >= 3);
    if (query.length >= 3) {
      const filteredItems = realtimeSearchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()),
      );
      setFilteredData(filteredItems);
    } else {
      setFilteredData([]);
    }
  };

  return (
    <View style={styles.page}>
      {/* SEARCH CONTAINER  */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {/*  <TouchableOpacity
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
          */}
        <View style={styles.container}>
          <Image
            source={icons.search}
            style={{
              height: SIZES.h3,
              width: SIZES.h3,
              marginRight: SIZES.base * 0.5,
            }}
          />
          <TextInput
            placeholder="Search product"
            placeholderTextColor={COLORS.chocolate}
            style={{...FONTS.body4, color: COLORS.black, flex: 1}}
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('FilterScreen')}
          style={styles.filterCtn}>
          <Image
            source={icons.filter}
            style={{height: SIZES.h2, width: SIZES.h2}}
          />
        </TouchableOpacity>
      </View>
      {/* REALTIME AMMENDMENT  */}
      <View style={{}}>
        {isSearching && filteredData.length === 0 ? (
          <Text style={{...FONTS.body4, color: COLORS.black}}>
            No Search Result
          </Text>
        ) : (
          <FlatList
            data={filteredData}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.replace('SearchResult')}
                style={{marginBottom: SIZES.h5}}>
                <Text style={{...FONTS.body4, color: COLORS.black}}>
                  {item.title} in{' '}
                  <Text style={{color: COLORS.primary}}>{item.category}</Text>
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>

      {/* REALTIME SEARCH  RESULT DISPLAY */}
      <View style={{marginTop: SIZES.h1, marginBottom: SIZES.h1 * 1.4}}>
        <FlatList
          data={searchResultData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={{marginBottom: SIZES.h4}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductDetails')}
                  activeOpacity={0.95}
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
                        numberOfLines={3}
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
                      <TouchableOpacity
                        onPress={() => navigation.navigate('ProductDetails')}>
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
