import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Modal = ({ children }) => (
  <View style={styles.opacityLayer}>
    <View style={styles.container}>{children}</View>
  </View>
);

Modal.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Modal;
