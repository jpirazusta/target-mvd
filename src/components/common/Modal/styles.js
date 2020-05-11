import { StyleSheet } from 'react-native';
import { BLACK_40_ALPHA, WHITE } from 'constants/colors';

const styles = StyleSheet.create({
  opacityLayer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLACK_40_ALPHA,
  },
  container: {
    width: '80%',
    backgroundColor: WHITE,
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 23,
  },
});

export default styles;
