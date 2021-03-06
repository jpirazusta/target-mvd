import { StyleSheet } from 'react-native';
import typography from 'constants/typography';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: typography.inputError,
  height: {
    height: 26,
  },
  padding: {
    paddingVertical: 4,
  },
});

export default styles;
