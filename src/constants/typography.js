import { StyleSheet } from 'react-native';
import fonts from './fonts';
import { ERROR, WHITE } from './colors';

export default StyleSheet.create({
  title: {
    ...fonts.bold,
    fontSize: 20,
    lineHeight: 27,
  },
  inputLabel: {
    ...fonts.semibold,
    fontSize: 11,
    lineHeight: 15,
  },
  input: {
    ...fonts.semibold,
    fontSize: 14,
    lineHeight: 19,
  },
  inputError: {
    ...fonts.semibold,
    fontSize: 10,
    lineHeight: 14,
    color: ERROR,
  },
  buttonTitle: {
    ...fonts.semibold,
    fontSize: 11,
    lineHeight: 15,
    color: WHITE,
  },
});
