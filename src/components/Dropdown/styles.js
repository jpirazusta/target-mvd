import { StyleSheet } from 'react-native';
import common from 'constants/commonStyles';
import { BLACK } from 'constants/colors';
import typography from 'constants/typography';

export const styles = StyleSheet.create({
  inputIOS: common.input,
  inputAndroid: common.input,
  placeholder: {
    ...typography.input,
    color: BLACK,
  },
});

export const errorStyles = StyleSheet.create({
  inputIOS: {
    ...common.input,
    ...common.inputBorderError,
  },
  inputAndroid: {
    ...common.input,
    ...common.inputBorderError,
  },
});

export const errorViewStyles = StyleSheet.create({
  errorContainer: {
    height: 17,
    justifyContent: 'center',
  },
  error: typography.inputError,
});
