import React from 'react';
import { string, func, number, shape, bool } from 'prop-types';
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
  additionalStyles: shape({
    width: number,
    backgroundColor: string,
  }),
  title: string.isRequired,
  isLoading: bool,
};

export default Button;
