import { StyleSheet } from 'react-native';
import { BLACK, GRAY_245_70, YELLOW_ALPHA, GRAY_161 } from 'constants/colors';

const styles = StyleSheet.create({
  text: {
    color: BLACK,
  },
  rightBubble: {
    backgroundColor: YELLOW_ALPHA,
    paddingVertical: 3,
  },
  leftBubble: {
    backgroundColor: GRAY_245_70,
    paddingVertical: 3,
  },
  time: {
    position: 'absolute',
    bottom: 3,
    fontSize: 9,
    color: GRAY_161,
  },
  left: {
    right: 10,
  },
  right: {
    left: 10,
  },
});

export default styles;
