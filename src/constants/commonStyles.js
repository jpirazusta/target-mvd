import { StyleSheet, Dimensions } from 'react-native';
import typography from './typography';
import { BLACK, ERROR, TRANSPARENT, BACKGROUND } from './colors';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: BACKGROUND,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 66,
  },
  title: {
    ...typography.title,
    textAlign: 'center',
    color: BLACK,
  },
  linkButton: {
    marginTop: 54,
    borderTopWidth: 0.5,
    padding: 15,
    width: 121,
  },
  linkButtonText: {
    ...typography.buttonTitle,
    color: BLACK,
    textAlign: 'center',
  },
  inputLabel: {
    ...typography.inputLabel,
    marginBottom: 4,
    color: BLACK,
  },
  input: {
    height: 37,
    textAlign: 'center',
    borderColor: BLACK,
    borderWidth: 0.5,
    backgroundColor: TRANSPARENT,
    color: BLACK,
    width: '100%',
    ...typography.input,
  },
  inputBorderError: {
    borderColor: ERROR,
    borderWidth: 1.5,
  },
  shortInputWidth: {
    width: 220,
  },
  center: {
    textAlign: 'center',
  },
  leftPadding: {
    paddingLeft: 3,
  },
  animatedContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT,
  },
  alignCenter: {
    alignItems: 'center',
  },
});

export default styles;
