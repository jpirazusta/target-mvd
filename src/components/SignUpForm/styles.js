import { StyleSheet } from 'react-native';
import common from 'constants/commonStyles';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 240,
    alignItems: 'center',
  },
  button: {
    width: 114,
    backgroundColor: BLACK,
  },
  dropdown: {
    ...common.input,
  },
});

export default styles;
