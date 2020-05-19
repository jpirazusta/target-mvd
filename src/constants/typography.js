import { StyleSheet } from 'react-native';
import { OPEN_SANS_BOLD, OPEN_SANS_SEMIBOLD } from './fonts';
import { RED_ERROR, WHITE, BLACK } from './colors';

export default StyleSheet.create({
  title: {
    fontFamily: OPEN_SANS_BOLD,
    fontSize: 20,
    lineHeight: 27,
    color: BLACK,
  },
  inputLabel: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: 11,
    lineHeight: 15,
  },
  input: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: 14,
    lineHeight: 19,
  },
  inputError: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: 10,
    lineHeight: 14,
    color: RED_ERROR,
    textAlign: 'center',
  },
  buttonTitle: {
    fontFamily: OPEN_SANS_SEMIBOLD,
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
