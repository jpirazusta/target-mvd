import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/colors';
import fonts from 'constants/fonts';

const styles = StyleSheet.create({
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
