import { Animated } from 'react-native';
import queryString from 'query-string';
import { ANIMATIONS_DURATION } from 'constants/common';

export const applyQueryParams = (url, params) => {
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};

export const getStringWithCondition = (condition, first, second) => {
  return condition ? first : second;
};

export const animate = (animatedValue, toValue) => {
  Animated.timing(animatedValue, {
    toValue,
    duration: ANIMATIONS_DURATION,
  }).start();
};
