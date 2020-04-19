import React from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { array, func, bool, string, oneOfType } from 'prop-types';

import commonStyles from 'constants/commonStyles';
import { styles } from './styles';

const Dropdown = ({ label, items, onChangeText, error, invalid, showErrorMessage, ...props }) => {
  const dropdownStyles = invalid ? styles.inputError : styles.input;
  return (
    <>
      {label && <Text style={commonStyles.inputLabel}>{label}</Text>}
      <RNPickerSelect
        onValueChange={onChangeText}
        items={items}
        useNativeAndroidPickerStyle={false}
        Icon={() => null}
        textInputProps={{ style: dropdownStyles }}
        {...props}
      />
      {showErrorMessage && (
        <View style={styles.errorContainer}>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      )}
    </>
  );
};

Dropdown.propTypes = {
  label: string,
  items: array.isRequired,
  error: array,
  invalid: oneOfType([bool, string, array]),
  onChangeText: func.isRequired,
  showErrorMessage: bool,
};

Dropdown.defaultProps = {
  showErrorMessage: false,
};

export default Dropdown;
