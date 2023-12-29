import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../../../constants';

export default StyleSheet.create({
  root: {
    alignItems: 'stretch',
    flex: 1,
    // marginRight: SIZES.h5,
  },
  slider: {},
  button: {},
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  valueText: {
    color: 'white',
    fontSize: 20,
  },
  inputCtn: {
    height: SIZES.h1 * 1.5,
    width: SIZES.h1 * 4.7,
    // borderWidth: 1,
    borderRadius: SIZES.base,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.offwhite,
  },
});
