import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../constants';

const SearchScreen = () => {
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
          <TextInput placeholder="search product" />
        </View>
        <TouchableOpacity style={styles.filterCtn}>
          <Image
            source={icons.filter}
            style={{height: SIZES.h2, width: SIZES.h2}}
          />
        </TouchableOpacity>
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
    height: SIZES.h1 * 1.7,
    width: SIZES.width * 0.71,
    borderRadius: SIZES.base * 0.6,
    paddingHorizontal: SIZES.base,
    backgroundColor: COLORS.cream,
  },
  filterCtn: {
    height: SIZES.h1 * 1.7,
    width: SIZES.h1 * 2,
    borderRadius: SIZES.base * 0.6,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
