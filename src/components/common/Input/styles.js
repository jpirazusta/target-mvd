import { StyleSheet } from 'react-native';
import common from 'constants/commonStyles';
import typography from 'constants/typography';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    ...common.inputLabel,
  },
  input: {
    ...common.input,
  },
  inputBorderError: common.inputBorderError,
  errorContainer: {
    height: 17,
    justifyContent: 'center',
  },
  error: typography.inputError,
});

export default styles;
