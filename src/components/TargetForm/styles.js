import { StyleSheet } from 'react-native';
import { BLACK, BACKGROUND } from 'constants/colors';
import typography from 'constants/typography';

const styles = StyleSheet.create({
  fullScreen: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  mainContainer: {
    position: 'absolute',
    backgroundColor: BACKGROUND,
    bottom: 0,
    left: 0,
    right: 0,
  },
  androidContainer: {
    position: 'absolute',
    backgroundColor: BACKGROUND,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 34,
    paddingTop: 15,
    paddingBottom: 26,
  },
  container: {
    backgroundColor: BACKGROUND,
    paddingHorizontal: 34,
    paddingTop: 15,
    paddingBottom: 26,
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
  buttonsContainer: {
    height: 37,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  createButton: {
    width: 157,
    backgroundColor: BLACK,
  },
  editButton: {
    width: 120,
    backgroundColor: BLACK,
  },
});

export default styles;
