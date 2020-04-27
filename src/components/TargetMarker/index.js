import React from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { number, func, string, bool } from 'prop-types';
import { Marker } from 'react-native-maps';
import find from 'lodash/find';

import styles from './styles';

const TargetMarker = ({ id, lat, lng, topicId, onPress, selected }) => {
  const topics = useSelector(({ target: { topics } }) => topics);
  const {
    topic: { icon },
  } = find(topics, ({ topic }) => topic.id === topicId);
  return (
    <Marker
      identifier={id}
      onPress={onPress}
      coordinate={{
        latitude: lat,
        longitude: lng,
      }}>
      <View style={[styles.marker, selected && styles.selected]}>
        <Image source={{ uri: icon }} style={styles.image} />
      </View>
    </Marker>
  );
};

TargetMarker.propTypes = {
  id: string.isRequired,
  lat: number.isRequired,
  lng: number.isRequired,
  topicId: number.isRequired,
  onPress: func.isRequired,
  selected: bool.isRequired,
};

export default TargetMarker;
