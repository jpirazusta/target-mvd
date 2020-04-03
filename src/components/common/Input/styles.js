import { StyleSheet } from 'react-native';
import { BLACK, ERROR } from 'constants/colors';
import typography from 'constants/typography';

const styles = StyleSheet.create({
  label: {
    ...typography.inputLabel,
    textAlign: 'center',
    marginBottom: 4,
  },
  input: {
    height: 37,
    textAlign: 'center',
    borderColor: BLACK,
    borderWidth: 0.5,
    ...typography.input,
  },
  inputBorderError: {
    borderColor: ERROR,
    borderWidth: 1.5,
  },
});

export default styles;
