import React from 'react';
import { ActivityIndicator } from 'react-native';
import { string } from 'prop-types';
import { BLACK } from 'constants/colors';

const Loader = ({ size, color }) => <ActivityIndicator size={size} color={color} />;

Loader.propTypes = {
  size: string,
  color: string,
};

Loader.defaultProps = {
  size: 'large',
  color: BLACK,
};

export default Loader;
