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
import FormButton from '../../../../components/Button/FormButton';

const FilterScreen = () => {
  const navigation = useNavigation();
  const filterData = [
    {id: 1, title: 'Phones'},
    {id: 2, title: 'Phones Accessories'},
    {id: 3, title: 'Laptop'},
    {id: 4, title: 'Laptop Accessories'},
    {id: 5, title: 'Clothes'},
    {id: 6, title: 'Shoes'},
    {id: 7, title: 'Beauty'},
    {id: 8, title: 'Apartets'},
    {id: 9, title: 'Home Accessories'},
    {id: 10, title: 'Furnitures'},
  ];
  return (
    <View style={styles.page}>
      <View style={{flex: 1, marginBottom: SIZES.h1 * 1.7}}>
        <HeaderA title="Add filter" btnCtn={{marginLeft: SIZES.width * 0.02}} />
        <View>
          <FlatList
            data={filterData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('SubFilterCategory')}
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
      <FormButton title="Clear filter" />
    </View>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.04,
    paddingTop: SIZES.h4,
  },
});
