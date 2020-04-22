import { Platform, Dimensions } from 'react-native';

export const FACEBOOK_PERMISSIONS = ['email'];
export const LATITUDE_DELTA = 0.0922;
export const LONGITUDE_DELTA = 0.0421;
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const SCREEN_HEIGHT = Dimensions.get('window').height;
