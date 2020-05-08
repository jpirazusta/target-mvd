import React from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import { number } from 'prop-types';
import styles from './styles';

const Badge = ({ number, position }) => (
  <View style={[styles.container, position]}>
    <Text style={styles.number}>{number}</Text>
  </View>
);

Badge.propTypes = {
  number: number.isRequired,
  position: ViewPropTypes.style,
};

export default Badge;
