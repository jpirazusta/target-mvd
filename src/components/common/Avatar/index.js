import React from 'react';
import { string } from 'prop-types';
import { Image, ViewPropTypes } from 'react-native';
import defaultAvatar from 'assets/images/defaultProfileImage.png';

const Avatar = ({ uri, style }) => <Image source={uri ? { uri } : defaultAvatar} style={style} />;

Avatar.propTypes = {
  uri: string,
  style: ViewPropTypes.style,
};

export default Avatar;
