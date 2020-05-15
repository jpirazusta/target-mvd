import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';
import { View, Modal } from 'react-native';
import styles from './styles';

const ModalWrapper = ({ children }) => (
  <View style={styles.overlay}>
    <Modal animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.container}>{children}</View>
      </View>
    </Modal>
  </View>
);

ModalWrapper.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default ModalWrapper;
