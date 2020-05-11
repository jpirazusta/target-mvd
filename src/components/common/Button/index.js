import React from 'react';
import { string, func, bool } from 'prop-types';
import { TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import strings from 'locale';
import { WHITE } from 'constants/colors';
import styles from './styles';

const Button = ({ handleOnPress, additionalStyles, title, isLoading, titleColor }) => {
  const buttonTitle = isLoading ? strings.COMMON.loading : title;
  return (
    <TouchableOpacity onPress={handleOnPress} style={[styles.button, additionalStyles]}>
      <Text style={[styles.buttonTitle, { color: titleColor }]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  handleOnPress: func.isRequired,
  additionalStyles: ViewPropTypes.style,
  title: string.isRequired,
  isLoading: bool,
  titleColor: string,
};

Button.defaultProps = {
  isLoading: false,
  titleColor: WHITE,
};

export default Button;
