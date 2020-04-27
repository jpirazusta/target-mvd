import { StyleSheet } from 'react-native';
import { BLACK } from 'constants/colors';
import typography from 'constants/typography';

const styles = StyleSheet.create({
  imageContainer: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: BLACK,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  text: {
    ...typography.inputLabel,
    color: BLACK,
  },
});

export default styles;
