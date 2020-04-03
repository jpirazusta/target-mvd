import { StyleSheet } from 'react-native';
import typography from 'constants/typography';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    borderWidth: 2,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: typography.buttonTitle,
});

export default styles;
