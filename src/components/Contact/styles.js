import { StyleSheet } from 'react-native';
import commonStyles from 'constants/commonStyles';
import typography from 'constants/typography';
import { BLACK, TRANSPARENT } from 'constants/colors';

const styles = StyleSheet.create({
  label: {
    ...commonStyles.inputLabel,
    ...commonStyles.center,
  },
  input: {
    minHeight: 120,
    padding: 10,
    borderColor: BLACK,
    borderWidth: 0.5,
    backgroundColor: TRANSPARENT,
    color: BLACK,
    width: 220,
    ...typography.input,
  },
  errorContainer: {
    height: 17,
    justifyContent: 'center',
  },
  error: typography.inputError,
  save: commonStyles.blackButton,
  okButton: {
    ...commonStyles.blackButton,
    width: 114,
  },
  textAlingVertical: {
    textAlignVertical: 'top',
  },
});

export default styles;
