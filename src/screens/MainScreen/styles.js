import { StyleSheet } from 'react-native';
import { BACKGROUND } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  map: {
    flex: 5,
  },
  newTarget: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
