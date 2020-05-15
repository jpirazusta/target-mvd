import React from 'react';
import { string, func, bool } from 'prop-types';
import { TouchableOpacity, Text, ViewPropTypes } from 'react-native';
import strings from 'locale';
import { WHITE } from 'constants/colors';
import styles from './styles';

const CustomButton = ({ handleOnPress, additionalStyles, title, isLoading, titleColor }) => {
  const buttonTitle = isLoading ? strings.COMMON.loading : title;
  return (
    <TouchableOpacity onPress={handleOnPress} style={[styles.button, additionalStyles]}>
      <Text style={[styles.buttonTitle, { color: titleColor }]}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  handleOnPress: func.isRequired,
  additionalStyles: ViewPropTypes.style,
  title: string.isRequired,
  isLoading: bool,
  titleColor: string,
};

CustomButton.defaultProps = {
  isLoading: false,
  titleColor: WHITE,
};

export default CustomButton;
