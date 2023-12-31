import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, SIZES, icons, FONTS} from '../../../../constants';
import HeaderA from '../../../../components/Header/HeaderA';
import SliderScreen from '../../../../components/slider/src/screens/Slider';
import FormButton from '../../../../components/Button/FormButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addSearchFilter,
  removeSearchFilter,
} from '../../../../redux/actions/midAction';

const AddFilter = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.mid?.searchFilter);

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
        {id: 3, title: 'Iphone XR'},
        {id: 4, title: 'Iphone 15 pro max'},
        {id: 5, title: 'Iphone 14pro max'},
      ],
    },
    {
      id: 3,
      type: 'checkbox',
      title: 'Color',
      optionData: [
        {id: 6, title: 'Iphone XR'},
        {id: 7, title: 'Iphone 15 pro max'},
        {id: 8, title: 'Iphone 14pro max'},
      ],
    },
  ];

  const [checkBoxStates, setCheckBoxStates] = useState(
    typeData.map(() => true),
  );
  const [selectedOptionStates, setSelectedOptionStates] = useState(
    typeData.map(() => []),
  );

  const handleMultiSelect = (item, data) => {
    const isSelected = selectedOptionStates[item.id]?.includes(data.id);

    if (isSelected) {
      // Deselect
      setSelectedOptionStates(prevStates => {
        const newStates = {...prevStates};
        newStates[item.id] = newStates[item.id].filter(id => id !== data.id);
        return newStates;
      });
      dispatch(removeSearchFilter({id: data.id, title: data.title}));
    } else {
      // Select
      setSelectedOptionStates(prevStates => {
        const newStates = {...prevStates};
        newStates[item.id] = newStates[item.id]
          ? [...newStates[item.id], data.id]
          : [data.id];
        return newStates;
      });
      dispatch(addSearchFilter({id: data.id, title: data.title}));
    }
  };

  useEffect(() => {
    let totalFilters = 0;
    Object.keys(selectedOptionStates).forEach(itemId => {
      totalFilters += selectedOptionStates[itemId].length;
    });

    console.log('Total Filters:', totalFilters);
  }, [selectedOptionStates]);

  const [focusedRadio, setFocusedRadio] = useState(null);

  const handleRadioPress = radioId => {
    setFocusedRadio(radioId);
  };

  return (
    <View style={styles.page}>
      <View style={{paddingBottom: SIZES.h1}}>
        <HeaderA
          title="Add filter"
          topCtn={true}
          topText={`${searchQuery.length} Filters applied`}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={typeData}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={{marginBottom: SIZES.h5}}>
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
                    {/* DROP DOWN */}
                    <TouchableOpacity
                      onPress={() =>
                        setCheckBoxStates(prevStates => [
                          ...prevStates.slice(0, index),
                          !prevStates[index],
                          ...prevStates.slice(index + 1),
                        ])
                      }>
                      <Image
                        source={
                          checkBoxStates[index]
                            ? icons.arrowdown2
                            : icons.arrowup
                        }
                        style={{height: SIZES.h3 * 1.2, width: SIZES.h3 * 1.2}}
                      />
                    </TouchableOpacity>
                  </View>
                  {/* CHECKBOX */}
                  {checkBoxStates[index] === false && (
                    <View>
                      {item.type !== 'checkbox' ? (
                        <View style={{marginTop: SIZES.base}}>
                          {item.optionData.map((data, dataIndex) => {
                            const isSelected = selectedOptionStates[
                              index
                            ].includes(data?.id);
                            return (
                              <View
                                key={dataIndex}
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  marginBottom: SIZES.h3,
                                }}>
                                <TouchableOpacity
                                  onPress={() => {
                                    handleMultiSelect(item, data);
                                  }}>
                                  <Image
                                    source={
                                      selectedOptionStates[item.id]?.includes(
                                        data.id,
                                      )
                                        ? icons.checkbox2
                                        : icons.checkbox1
                                    }
                                    style={{
                                      height: SIZES.h2,
                                      width: SIZES.h2,
                                      tintColor:
                                        selectedOptionStates[item.id]?.includes(
                                          data.id,
                                        ) && COLORS.primary,
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
                      ) : (
                        <View style={{marginTop: SIZES.base}}>
                          {item.optionData.map((data, dataIndex) => {
                            return (
                              <View
                                key={dataIndex}
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  marginBottom: SIZES.h5,
                                }}>
                                <TouchableOpacity
                                  style={styles.radioBtnCtn}
                                  onPress={() => handleRadioPress(data.id)}>
                                  <View
                                    style={{
                                      height: SIZES.h4 * 0.9,
                                      width: SIZES.h4 * 0.9,
                                      backgroundColor:
                                        focusedRadio === data.id
                                          ? COLORS.primary
                                          : COLORS.white,
                                      borderRadius: 100,
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
          <FormButton
            title="Apply filter"
            onPress={() => navigation.navigate('SearchScreen')}
            btnStyle={{marginTop: SIZES.h1}}
          />
        </ScrollView>
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
    paddingBottom: SIZES.h4,
  },
  radioBtnCtn: {
    height: SIZES.h2 * 1.1,
    width: SIZES.h2 * 1.1,
    borderRadius: 100,
    borderWidth: 1.7,
    borderColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
