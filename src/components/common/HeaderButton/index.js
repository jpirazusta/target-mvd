import React from 'react';
import { TouchableOpacity, Image, ViewPropTypes, Text } from 'react-native';
import { number, func, string } from 'prop-types';
import commonStyles from 'constants/commonStyles';

const HeaderButton = ({ onPress, icon, title, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    {icon ? <Image source={icon} /> : <Text style={commonStyles.linkButtonText}>{title}</Text>}
  </TouchableOpacity>
);

HeaderButton.propTypes = {
  onPress: func.isRequired,
  icon: number,
  title: string,
  style: ViewPropTypes.style,
};

export default HeaderButton;
