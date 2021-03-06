import { StyleSheet } from 'react-native';
import { WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  list: {
    backgroundColor: WHITE,
    width: '100%',
    flexGrow: 0,
    bottom: 0,
    position: 'absolute',
  },
});

export default styles;
