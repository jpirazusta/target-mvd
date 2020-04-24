import { StyleSheet } from 'react-native';
import { YELLOW_MARKER, BLUE } from 'constants/colors';

const styles = StyleSheet.create({
  marker: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: YELLOW_MARKER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
  selected: {
    backgroundColor: BLUE,
  },
});

export default styles;
