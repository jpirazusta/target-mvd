import { Platform, Dimensions } from 'react-native';

export const FACEBOOK_PERMISSIONS = ['email'];
export const LATITUDE_DELTA = 0.0922;
export const LONGITUDE_DELTA = 0.0421;
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const HIDDEN_VIEWS_POSITION = SCREEN_HEIGHT * -1;
export const DELTA_COORDS = {
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
export const ANIMATIONS_DURATION = 500;
