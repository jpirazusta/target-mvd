import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { object } from 'prop-types';
import styles from './styles';

const ErrorView = ({ errors = {} }) => {
  const errorMessages = Object.values(errors)
    .filter(error => !!error)
    .reduce((acc, error) => {
      acc.push(error);
      return acc;
    }, []);
  const additionalStyles = errorMessages.length < 2 ? styles.height : styles.padding;

  return (
    <View style={[styles.container, additionalStyles]}>
      {errorMessages.map(error => (
        <Text key={error} accessibilityLabel="form-error" style={styles.error}>
          {error}
        </Text>
      ))}
    </View>
  );
};

ErrorView.propTypes = {
  errors: object,
};

ErrorView.defaultProps = {
  errors: {},
};

export default memo(ErrorView);
