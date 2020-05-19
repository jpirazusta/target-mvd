import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/colors';
import { OPEN_SANS_REGULAR, OPEN_SANS_SEMIBOLD, OPEN_SANS_BOLD } from 'constants/fonts';

const styles = StyleSheet.create({
  question: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: 13,
    color: BLACK,
  },
  marker: {
    marginVertical: 15,
  },
  targetTitle: {
    fontFamily: OPEN_SANS_SEMIBOLD,
    fontSize: 11,
    marginBottom: 25,
    color: BLACK,
  },
  reminder: {
    fontFamily: OPEN_SANS_REGULAR,
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
    fontFamily: OPEN_SANS_BOLD,
    fontSize: 12,
    color: BLACK,
    textAlign: 'center',
  },
});

export default styles;
