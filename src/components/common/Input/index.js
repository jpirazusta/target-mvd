import React from 'react';
import { string, bool, oneOfType, array } from 'prop-types';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const Input = ({ label, invalid, error, ...props }) => (
  <>
    {label && <Text style={styles.label}>{label}</Text>}
    <View>
      <TextInput style={[styles.input, invalid && styles.inputBorderError]} {...props} />
      {error && <Text>{error}</Text>}
    </View>
  </>
);

Input.propTypes = {
  label: string,
  error: string,
  invalid: oneOfType([bool, string, array]),
};

export default Input;
