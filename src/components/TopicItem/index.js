import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { number, string, func } from 'prop-types';
import styles from './styles';

const TopicItem = ({ id, label, icon, onSelect }) => (
  <TouchableOpacity style={styles.row} onPress={() => onSelect(id, label)}>
    <Image source={{ uri: icon }} style={styles.icon} />
    <Text style={styles.title}>{label}</Text>
  </TouchableOpacity>
);

TopicItem.propTypes = {
  id: number.isRequired,
  label: string.isRequired,
  icon: string.isRequired,
  onSelect: func.isRequired,
};

export default TopicItem;
