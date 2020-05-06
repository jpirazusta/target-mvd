import React from 'react';
import { TouchableOpacity, Image, ViewPropTypes } from 'react-native';
import { number, func } from 'prop-types';

const HeaderButton = ({ onPress, icon, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Image source={icon} />
  </TouchableOpacity>
);

HeaderButton.propTypes = {
  onPress: func.isRequired,
  icon: number.isRequired,
  style: ViewPropTypes.style,
};

export default HeaderButton;
