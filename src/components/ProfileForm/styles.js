import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/colors';
import typography from 'constants/typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  saveButton: {
    backgroundColor: BLACK,
    width: 157,
  },
  success: {
    marginTop: 15,
    height: 26,
  },
  successText: {
    ...typography.inputError,
    color: BLACK,
  },
  logoutButton: {
    marginTop: 20,
    width: 114,
  },
});

export default styles;
