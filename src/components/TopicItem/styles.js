import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 17,
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 13,
    color: BLACK,
    marginLeft: 15,
  },
});

export default styles;
