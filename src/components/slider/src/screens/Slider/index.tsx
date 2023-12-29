import React, {useCallback, useState} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import Slider from 'rn-range-slider';

import Thumb from '../../Slider/Thumb';
import Rail from '../../Slider/Rail';
import RailSelected from '../../Slider/RailSelected';
import Notch from '../../Slider/Notch';
import Label from '../../Slider/Label';

import styles from './styles';
import {SIZES, COLORS, FONTS} from '../../../../../constants';

const SliderScreen = ({
  slideLow,
  slideHigh,
  selected,
  onHighValueChange,
  value,
  setValue,
}) => {
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [total, setTotal] = useState(100);
  const [min, setMin] = useState(slideLow);
  const [max, setMax] = useState(slideHigh);
  const [floatingLabel, setFloatingLabel] = useState(false);

  const renderThumb = useCallback(
    (name: 'high' | 'low') => <Thumb name={name} />,
    [],
  );
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((lowValue, highValue) => {
    setLow(lowValue);
    setHigh(highValue);
    onHighValueChange(highValue);
  }, []);

  return (
    <View style={{marginRight: SIZES.h2}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: -SIZES.h3,
        }}>
        <Text style={{...FONTS.body3c, color: COLORS.black}}>₦{low}</Text>
        <View style={styles.inputCtn}>
          <TextInput
            placeholder="0.00"
            placeholderTextColor={COLORS.black}
            keyboardType="numeric"
            value={value}
            onChangeText={setValue}
            style={{...FONTS.body4, color: COLORS.black}}
          />
        </View>
        <Text style={{...FONTS.body3c, color: COLORS.black}}>₦{slideHigh}</Text>
      </View>
      <Slider
        style={styles.slider}
        min={min}
        max={max}
        step={2}
        disableRange={rangeDisabled}
        floatingLabel={floatingLabel}
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
      <Text
        style={{
          ...FONTS.body3,
          color: COLORS.black,
          marginTop: SIZES.h4,
          fontFamily: 'OpenSans-Medium',
        }}>
        ₦{high}
      </Text>
    </View>
  );
};

export default SliderScreen;
