import { StyleSheet } from 'react-native';
import { YELLOW, LIGHT_YELLOW } from 'constants/colors';
import commonStyles from 'constants/commonStyles';

const styles = StyleSheet.create({
  container: commonStyles.screenContainer,
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
