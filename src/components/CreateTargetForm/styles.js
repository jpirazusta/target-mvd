import { StyleSheet } from 'react-native';
import { BLACK, BACKGROUND } from 'constants/colors';
import typography from 'constants/typography';

const styles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    position: 'absolute',
    backgroundColor: BACKGROUND,
    paddingHorizontal: 34,
    paddingTop: 15,
    paddingBottom: 26,
    bottom: 0,
    left: 0,
    right: 0,
  },
  inputContainer: {
    marginBottom: 11,
  },
  topic: {
    borderWidth: 0.5,
    borderColor: BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    height: 37,
  },
  topicInput: {
    ...typography.input,
    color: BLACK,
  },
  button: {
    width: 157,
    backgroundColor: BLACK,
  },
});

export default styles;
