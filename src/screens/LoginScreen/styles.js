import { StyleSheet } from 'react-native';
import common from 'constants/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...common.formContainer,
  },
  welcome: {
    ...common.title,
    marginBottom: 68,
  },
  signupButton: {
    ...common.linkButton,
  },
  signupButtonText: {
    ...common.linkButtonText,
  },
});

export default styles;
