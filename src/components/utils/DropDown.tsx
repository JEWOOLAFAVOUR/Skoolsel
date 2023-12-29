import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS, FONTS, SIZES} from '../../constants';

const DropDown = ({placeholder, data, setData, onValueChange}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const handleValueChange = useCallback(
    newValue => {
      onValueChange(newValue);
    },
    [onValueChange],
  );

  return (
    <View style={{marginBottom: SIZES.h2}}>
      <View style={{flex: 1, zIndex: 1}}>
        <View
          style={{
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
            // zIndex: 1000,
          }}>
          <DropDownPicker
            open={open}
            value={value}
            items={data}
            setOpen={setOpen}
            setValue={() => handleValueChange(value)}
            setItems={setData}
            placeholder={placeholder}
            dropDownContainerStyle={
              {
                //   marginBottom: 100,
              }
            }
            // bottomOffset={1000}
            // zIndex={6000}
            // zIndexInverse={7000}
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
