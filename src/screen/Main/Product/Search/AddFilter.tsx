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

const AddFilter = () => {
  const [check, setCheck] = useState(false);
  const [checkBox, setCheckBox] = useState(true);

  const filterData = {
    low: 20000,
    high: 2000000,
  };

  const [selecteData, setSelectedData] = useState('');

  console.log('seeeee', selecteData);

  const typeData = [{id: 1}, {id: 2}];
  return (
    <View style={styles.page}>
      <HeaderA title="Add filter" />
      <View>
        <FlatList
          data={['', '']}
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
                  <Text style={{...FONTS.body4, color: COLORS.black}}>
                    Condition
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
                    {typeData.map((data, index) => {
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
                              source={check ? icons.checkbox2 : icons.checkbox1}
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
                            New
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
  );
};

export default AddFilter;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.05,
    paddingTop: SIZES.h4,
  },
});
