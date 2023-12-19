import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, icons} from '../../../constants';
import HeaderA from '../../../components/Header/HeaderA';

const VerificationType = () => {
  const verificationData = [
    {
      id: 1,
      title: 'International Passport',
    },
    {
      id: 2,
      title: 'Driving Licence',
    },
    {
      id: 3,
      title: 'Student ID',
    },
    {
      id: 4,
      title: 'NIN',
    },
  ];
  return (
    <View style={styles.page}>
      <HeaderA />
      <Text style={{...FONTS.h1, color: COLORS.black}}>Photo of your ID</Text>
      <Text style={{...FONTS.body3, color: COLORS.black}}>
        Choose which type of documents you're going to use.
      </Text>
      <View>
        <FlatList
          data={verificationData}
          renderItem={({item}) => {
            return (
              <View style={styles.container}>
                <Text style={{...FONTS.body3, color: COLORS.black}}>
                  {item.title}
                </Text>
                <Image
                  source={icons.arrowright}
                  style={{height: SIZES.h3, width: SIZES.h3}}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default VerificationType;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.04,
    paddingTop: SIZES.h5,
  },
  container: {
    height: SIZES.h1,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.base,
  },
});
