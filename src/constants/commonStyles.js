import { StyleSheet } from 'react-native';
import typography from './typography';
import { BLACK, ERROR, TRANSPARENT, BACKGROUND } from './colors';

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
    textAlign: 'center',
    marginBottom: 4,
  },
  input: {
    height: 37,
    textAlign: 'center',
    borderColor: BLACK,
    borderWidth: 0.5,
    backgroundColor: TRANSPARENT,
    ...typography.input,
  },
  inputBorderError: {
    borderColor: ERROR,
    borderWidth: 1.5,
  },
  shortInputWidth: {
    width: 220,
  },
});

export default styles;
