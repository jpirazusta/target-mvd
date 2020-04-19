import { StyleSheet } from 'react-native';
import common from 'constants/commonStyles';
import fonts from 'constants/fonts';
import { BLACK } from 'constants/colors';

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
  facebookButton: {
    height: 20,
    marginTop: 47,
  },
  facebookButtonText: {
    ...fonts.bold,
    fontSize: 12,
    lineHeight: 16,
    color: BLACK,
  },
});

export default styles;
