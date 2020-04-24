import { StyleSheet } from 'react-native';
import { BLACK_40_ALPHA, BACKGROUND, BLACK } from 'constants/colors';
import fonts from 'constants/fonts';

const styles = StyleSheet.create({
  opacityLayer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK_40_ALPHA,
  },
  container: {
    width: '80%',
    backgroundColor: BACKGROUND,
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 23,
  },
  question: {
    ...fonts.semibold,
    fontSize: 13,
    color: BLACK,
  },
  marker: {
    marginVertical: 15,
  },
  targetTitle: {
    ...fonts.semibold,
    fontSize: 11,
    marginBottom: 25,
    color: BLACK,
  },
  reminder: {
    ...fonts.regular,
    fontSize: 11,
    textAlign: 'center',
    color: BLACK,
  },
  deleteButton: {
    backgroundColor: BLACK,
    width: 157,
  },
  cancelButton: {
    width: 157,
    height: 37,
    marginTop: 25,
  },
  cancelText: {
    ...fonts.bold,
    fontSize: 12,
    color: BLACK,
    textAlign: 'center',
  },
});

export default styles;
