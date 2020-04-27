import React from 'react';
import { string, bool, oneOfType, array, object } from 'prop-types';
import { View, TextInput, Text } from 'react-native';

import common from 'constants/commonStyles';
import styles from './styles';

const Input = ({ label, invalid, error, showErrorMessage, short, additionalStyles, ...props }) => (
  <>
    {label && (
      <Text style={[styles.label, short ? common.center : common.leftPadding]}>{label}</Text>
    )}
    <View style={[styles.container, additionalStyles]}>
      <TextInput
        style={[styles.input, invalid && styles.inputBorderError, short && common.shortInputWidth]}
        {...props}
      />
      {showErrorMessage && (
        <View style={styles.errorContainer}>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      )}
    </View>
  </>
);

Input.propTypes = {
  label: string,
  error: array,
  invalid: oneOfType([bool, string, array]),
  showErrorMessage: bool,
  short: bool,
  additionalStyles: object,
};

Input.defaultProps = {
  showErrorMessage: false,
  short: true,
};

export default Input;
