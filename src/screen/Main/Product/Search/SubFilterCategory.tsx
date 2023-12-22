import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../constants';
import HeaderA from '../../../../components/Header/HeaderA';
import {useNavigation} from '@react-navigation/native';

const SubFilterCategory = () => {
  const navigation = useNavigation();
  const filterData = [
    {id: 1, title: 'Android phones'},
    {id: 2, title: 'Tablets'},
    {id: 3, title: 'Iphones'},
  ];
  return (
    <View style={styles.page}>
      <HeaderA title="Add filter" btnCtn={{marginLeft: SIZES.width * 0.02}} />
      <View>
        <FlatList
          data={filterData}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('AddFilter')}
                style={{marginBottom: SIZES.h3}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: SIZES.h4,
                    paddingHorizontal: SIZES.base * 0.8,
                  }}>
                  <Text>{item.title}</Text>
                  <Image
                    source={icons.arrowright2}
                    style={{
                      height: SIZES.h4 * 1.2,
                      width: SIZES.base * 1.2,
                    }}
                  />
                </View>
                <View
                  style={{
                    height: 1,
                    backgroundColor: COLORS.chocolateBackground,
                  }}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default SubFilterCategory;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.04,
    paddingTop: SIZES.h4,
  },
});
