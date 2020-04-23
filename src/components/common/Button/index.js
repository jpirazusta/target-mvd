import React from 'react';
import { string, func, arrayOf, bool, oneOfType, object } from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import strings from 'locale';
import styles from './styles';

const Button = ({ testID, handleOnPress, additionalStyles, title, isLoading }) => {
  const buttonTitle = isLoading ? strings.COMMON.loading : title;
  return (
    <TouchableOpacity
      testID={testID}
      onPress={handleOnPress}
      style={[styles.button, additionalStyles]}>
      <Text style={styles.buttonTitle}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  testID: string,
  handleOnPress: func.isRequired,
  additionalStyles: oneOfType([arrayOf(object), object]),
  title: string.isRequired,
  isLoading: bool,
};

export default Button;
