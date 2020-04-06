import { StyleSheet } from 'react-native';
import common from 'constants/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...common.formContainer,
  },
  welcome: {
    ...common.title,
    marginBottom: 25,
  },
  signinButton: {
    ...common.linkButton,
    marginTop: 19,
  },
  signinButtonText: {
    ...common.linkButtonText,
  },
});

export default styles;
