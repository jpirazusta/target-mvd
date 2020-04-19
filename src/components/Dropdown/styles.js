import { StyleSheet } from 'react-native';
import common from 'constants/commonStyles';
import typography from 'constants/typography';

export const styles = StyleSheet.create({
  errorContainer: {
    height: 17,
    justifyContent: 'center',
  },
  error: typography.inputError,
  input: {
    ...common.input,
  },
  inputError: {
    ...common.input,
    ...common.inputBorderError,
  },
});
