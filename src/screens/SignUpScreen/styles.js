import { StyleSheet } from 'react-native';
import commonStyles from 'constants/commonStyles';

const styles = StyleSheet.create({
  container: commonStyles.formContainer,
  welcome: {
    ...commonStyles.title,
    marginBottom: 25,
  },
  signinButton: {
    ...commonStyles.linkButton,
    marginTop: 19,
  },
  signinButtonText: commonStyles.linkButtonText,
});

export default styles;
