import {StyleSheet} from 'react-native';
import {SIZES} from '../../../../../constants';

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
});
