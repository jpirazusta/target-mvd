import { StyleSheet, Dimensions } from 'react-native';
import typography from './typography';
import { BLACK, RED_ERROR, TRANSPARENT, WHITE } from './colors';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: WHITE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 66,
  },
  centerChilds: {
    justifyContent: 'center',
    alignItems: 'center',
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
    borderColor: RED_ERROR,
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
    zIndex: 3,
  },
  alignCenter: {
    alignItems: 'center',
  },
  separator: {
    height: 0.5,
    backgroundColor: BLACK,
  },
  row: {
    flexDirection: 'row',
  },
  headerButton: {
    width: 30,
    alignItems: 'center',
  },
  blackButton: {
    width: 157,
    backgroundColor: BLACK,
    marginBottom: 10,
  },
  successText: {
    fontSize: 14,
    color: BLACK,
    textAlign: 'center',
    marginBottom: 20,
  },
  leftButton: {
    marginLeft: 10,
  },
  borderTop: {
    borderTopColor: BLACK,
    borderTopWidth: 0.5,
  },
});

export default styles;
