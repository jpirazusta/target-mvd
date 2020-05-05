import { StyleSheet } from 'react-native';
import { BACKGROUND, YELLOW, LIGHT_YELLOW } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },
  map: {
    flex: 1,
  },
  marker: {
    alignItems: 'center',
    zIndex: 2,
  },
  markerCircle: {
    bottom: 4,
    width: 51,
    height: 51,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: YELLOW,
    backgroundColor: LIGHT_YELLOW,
  },
  markerImage: {
    top: 25,
    zIndex: 1,
  },
});

export default styles;
