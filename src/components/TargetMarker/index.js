import React from 'react';
import MarkerView from 'components/common/MarkerView';
import { number, func, string, bool } from 'prop-types';
import useTopicIcon from 'hooks/useTopicIcon';
import { Marker } from 'react-native-maps';

const TargetMarker = ({ id, lat, lng, topicId, onPress, selected }) => {
  const icon = useTopicIcon(topicId);
  return (
    <Marker
      identifier={id}
      onPress={onPress}
      coordinate={{
        latitude: lat,
        longitude: lng,
      }}>
      <MarkerView selected={selected} icon={icon} />
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
