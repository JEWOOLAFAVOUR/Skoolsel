import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, icons, FONTS} from '../../../../constants';
import HeaderA from '../../../../components/Header/HeaderA';
import RangeSlider from 'react-native-range-slider';
import SliderScreen from '../../../../components/slider/src/screens/Slider';
import FormButton from '../../../../components/Button/FormButton';
import {useNavigation} from '@react-navigation/native';

const AddFilter = () => {
  const navigation = useNavigation();
  const [check, setCheck] = useState(false);
  const [checkBox, setCheckBox] = useState(true);

  const filterData = {
    low: 20000,
    high: 2000000,
  };

  const [selecteData, setSelectedData] = useState('');

  console.log('seeeee', selecteData);

  const typeData = [
    {
      id: 1,
      title: 'Condition',
      optionData: [
        {id: 1, title: 'New'},
        {id: 2, title: 'Used'},
      ],
    },
    {
      id: 2,
      title: 'Type',
      optionData: [
        {id: 1, title: 'Iphone XR'},
        {id: 2, title: 'Iphone 15 pro max'},
      ],
    },
  ];

  return (
    <View style={styles.page}>
      <View style={{flex: 1}}>
        <HeaderA title="Add filter" topCtn={true} topText="4 Filters applied" />
        <View style={{}}>
          <FlatList
            data={typeData}
            renderItem={({item}) => {
              return (
                <View style={{marginBottom: SIZES.h5}}>
                  {/* HEADER */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        ...FONTS.body4,
                        color: COLORS.black,
                        fontFamily: 'OpenSans-Medium',
                      }}>
                      {item.title}
                    </Text>
                    <TouchableOpacity onPress={() => setCheckBox(!checkBox)}>
                      <Image
                        source={checkBox ? icons.arrowdown2 : icons.arrowup}
                        style={{height: SIZES.h3 * 1.2, width: SIZES.h3 * 1.2}}
                      />
                    </TouchableOpacity>
                  </View>
                  {/* CHECKBOX */}
                  {checkBox === false && (
                    <View style={{marginTop: SIZES.base}}>
                      {item.optionData.map((data, index) => {
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginBottom: SIZES.h3,
                            }}>
                            <TouchableOpacity onPress={() => setCheck(!check)}>
                              <Image
                                source={
                                  check ? icons.checkbox2 : icons.checkbox1
                                }
                                style={{
                                  height: SIZES.h2,
                                  width: SIZES.h2,
                                  tintColor: check && COLORS.primary,
                                }}
                              />
                            </TouchableOpacity>
                            <Text
                              style={{
                                ...FONTS.body3c,
                                color: COLORS.black,
                                marginLeft: SIZES.base,
                              }}>
                              {data.title}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  )}
                </View>
              );
            }}
          />
          {/* PRICE RANGE */}
          <View style={{marginTop: SIZES.base}}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.black,
                marginBottom: SIZES.h4,
              }}>
              Price
            </Text>
            <SliderScreen
              slideLow={filterData.low}
              slideHigh={filterData.high}
              // selected={setSelectedData}
              selected={setSelectedData}
              onHighValueChange={highValue => setSelectedData(highValue)}
            />
          </View>
        </View>
      </View>
      <FormButton
        title="Apply filter"
        onPress={() => navigation.navigate('SearchScreen')}
      />
    </View>
  );
};

export default AddFilter;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h4,
    paddingBottom: SIZES.h4,
  },
});
