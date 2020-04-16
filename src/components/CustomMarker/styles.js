import { StyleSheet } from 'react-native';
import { MARKER } from 'constants/colors';

const styles = StyleSheet.create({
  marker: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: MARKER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default styles;
