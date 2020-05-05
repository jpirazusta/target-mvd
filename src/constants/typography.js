import { StyleSheet } from 'react-native';
import fonts from './fonts';
import { RED_ERROR, WHITE, BLACK } from './colors';

export default StyleSheet.create({
  title: {
    ...fonts.bold,
    fontSize: 20,
    lineHeight: 27,
    color: BLACK,
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
    color: RED_ERROR,
    textAlign: 'center',
  },
  buttonTitle: {
    ...fonts.semibold,
    fontSize: 11,
    lineHeight: 15,
    color: WHITE,
  },
  conversations: {
    fontSize: 12,
    lineHeight: 20,
    color: BLACK,
  },
});
