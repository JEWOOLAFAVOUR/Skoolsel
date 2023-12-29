import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS, FONTS, SIZES} from '../../constants';

const DropDown = ({placeholder, data, setData, onValueChange}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  console.log('lllllllll', value);
  useEffect(() => {
    onValueChange = value;
  }, [value]);

  return (
    <View style={{marginBottom: SIZES.h2}}>
      <View style={{flex: 1, zIndex: 1}}>
        <View
          style={{
            flex: 1,
          }}>
          <DropDownPicker
            open={open}
            value={value}
            items={data}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setData}
            placeholder={placeholder}
            style={{
              backgroundColor: COLORS.offwhite,
              borderColor: COLORS.offwhite,
            }}
            labelStyle={{color: COLORS.chocolate, fontSize: SIZES.h4}}
            textStyle={{
              fontSize: SIZES.h4,
              color: COLORS.chocolate,
              marginLeft: SIZES.base * 0.7,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
