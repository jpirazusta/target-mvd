import React from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { func } from 'prop-types';

import strings from 'locale';
import crosshair from 'assets/images/crosshair.png';
import common from 'constants/commonStyles';
import styles from './styles';

const CreateTargetButton = ({ onPress }) => (
  <TouchableOpacity style={common.alignCenter} onPress={onPress}>
    <View style={styles.imageContainer}>
      <Image source={crosshair} />
    </View>
    <Text style={styles.text}>{strings.TARGET.create}</Text>
  </TouchableOpacity>
);

CreateTargetButton.propTypes = {
  onPress: func.isRequired,
};

export default CreateTargetButton;
