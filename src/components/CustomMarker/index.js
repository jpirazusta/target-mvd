import React from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { number } from 'prop-types';
import { Marker } from 'react-native-maps';
import _ from 'lodash';

import styles from './styles';

const CustomMarker = ({ lat, lng, topicId }) => {
  const topics = useSelector(({ target: { topics } }) => topics);
  const {
    topic: { icon },
  } = _.find(topics, ({ topic }) => topic.id === topicId);
  return (
    <Marker
      coordinate={{
        latitude: lat,
        longitude: lng,
      }}>
      <View style={styles.marker}>
        <Image source={{ uri: icon }} style={styles.image} />
      </View>
    </Marker>
  );
};

CustomMarker.propTypes = {
  lat: number.isRequired,
  lng: number.isRequired,
  topicId: number.isRequired,
};

export default CustomMarker;
