import { StyleSheet } from 'react-native';
import commonStyles from 'constants/commonStyles';

const styles = StyleSheet.create({
  done: commonStyles.blackButton,
  okButton: {
    ...commonStyles.blackButton,
    width: 114,
  },
  success: commonStyles.successText,
});

export default styles;
