import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { arrayOf, func } from 'prop-types';

import TopicItem from 'components/TopicItem';
import { TOPIC_SHAPE_LONG } from 'constants/shapes';
import common from 'constants/commonStyles';
import styles from './styles';

const TopicPicker = ({ topics, onHide, onSelectTopic }) => (
  <>
    <TouchableOpacity style={styles.mainContainer} onPress={onHide} />
    <FlatList
      data={topics}
      ItemSeparatorComponent={() => <View style={common.separator} />}
      keyExtractor={({ topic: { id } }) => id.toString()}
      renderItem={({ item: { topic } }) => <TopicItem {...topic} onSelect={onSelectTopic} />}
      style={styles.list}
    />
  </>
);

TopicPicker.propTypes = {
  topics: arrayOf(TOPIC_SHAPE_LONG),
  onHide: func.isRequired,
  onSelectTopic: func.isRequired,
};

export default TopicPicker;
