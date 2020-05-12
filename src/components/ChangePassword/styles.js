import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  done: {
    width: 157,
    backgroundColor: BLACK,
    marginBottom: 10,
  },
  okButton: {
    width: 114,
    backgroundColor: BLACK,
    marginBottom: 10,
  },
  success: {
    fontSize: 14,
    color: BLACK,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default styles;
