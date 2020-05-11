import { StyleSheet } from 'react-native';
import commonStyles from 'constants/commonStyles';
import fonts from 'constants/fonts';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  container: commonStyles.formContainer,
  welcome: {
    ...commonStyles.title,
    marginBottom: 68,
  },
  signupButton: commonStyles.linkButton,
  signupButtonText: commonStyles.linkButtonText,
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
