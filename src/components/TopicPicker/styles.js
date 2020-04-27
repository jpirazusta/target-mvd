import { StyleSheet } from 'react-native';
import { BLACK, BACKGROUND } from 'constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  separator: {
    height: 0.5,
    backgroundColor: BLACK,
  },
  list: {
    backgroundColor: BACKGROUND,
    width: '100%',
    flexGrow: 0,
    bottom: 0,
    position: 'absolute',
  },
});

export default styles;
