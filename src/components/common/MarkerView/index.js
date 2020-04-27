import React from 'react';
import { View, Image } from 'react-native';
import { string, bool } from 'prop-types';

import styles from './styles';

const MarkerView = ({ selected, icon }) => (
  <View style={[styles.marker, selected && styles.selected]}>
    <Image source={{ uri: icon }} style={styles.image} />
  </View>
);

MarkerView.propTypes = {
  selected: bool,
  icon: string.isRequired,
};

MarkerView.defaultProps = {
  selected: false,
};

export default MarkerView;
