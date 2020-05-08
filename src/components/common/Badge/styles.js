import { StyleSheet } from 'react-native';
import { YELLOW, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  number: {
    color: WHITE,
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
