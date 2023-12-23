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
import {COLORS, SIZES, icons, FONTS} from '../../../../constants';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
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
        <View style={styles.container}>
          <Image
            source={icons.search}
            style={{
              height: SIZES.h3,
              width: SIZES.h3,
              marginRight: SIZES.base * 0.5,
            }}
          />
          {/* <TextInput
            placeholder="search product"
            placeholderTextColor={COLORS.chocolate}
            style={{...FONTS.body4, color: COLORS.black, flex: 1}}
          /> */}
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
      {/* REALTIME SEARCH */}
      <View style={{marginTop: SIZES.h3}}>
        {isSearching && filteredData.length === 0 ? (
          <Text style={{...FONTS.body4, color: COLORS.black}}>
            No Search Result
          </Text>
        ) : (
          <FlatList
            data={filteredData}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchResult')}
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
    </View>
  );
};

export default SearchScreen;

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
});
