import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/theme';
import icons from '../../constants/icons';
import {useNavigation} from '@react-navigation/native';

const HeaderA = ({title, vertical, btnCtn}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, btnCtn]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginRight: SIZES.h3}}>
          <Image
            source={icons.arrowleft}
            style={{height: SIZES.h1 * 0.9, width: SIZES.h1 * 0.9}}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...FONTS.h3,
            fontFamily: 'OpenSans-Medium',
            color: COLORS.black,
          }}>
          {title}
        </Text>
      </View>
      {vertical && (
        <TouchableOpacity>
          <Image
            source={icons.verticalmenu}
            style={{height: SIZES.h3, width: SIZES.h3 * 1.1}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeaderA;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: SIZES.h3,
    paddingTop: SIZES.base,
  },
});
