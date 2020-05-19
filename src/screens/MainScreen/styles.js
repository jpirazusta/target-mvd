import { StyleSheet } from 'react-native';
import { YELLOW, LIGHT_YELLOW } from 'constants/colors';
import commonStyles from 'constants/commonStyles';

const styles = StyleSheet.create({
  container: commonStyles.screenContainer,
  mapContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
  },
  marker: {
    alignItems: 'center',
    zIndex: 2,
  },
  markerCircle: {
    bottom: 28,
    width: 51,
    height: 51,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: YELLOW,
    backgroundColor: LIGHT_YELLOW,
  },
  markerImage: {
    position: 'absolute',
    top: -50,
    zIndex: 1,
  },
});

export default styles;
