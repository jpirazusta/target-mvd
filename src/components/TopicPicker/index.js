import React from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { arrayOf, func, number } from 'prop-types';

import TopicItem from 'components/TopicItem';
import { TOPIC_SHAPE_LONG } from 'constants/shapes';
import commonStyles from 'constants/commonStyles';
import styles from './styles';

const TopicPicker = ({ topics, onHide, onSelectTopic, paddingBottom }) => (
  <>
    <TouchableOpacity style={styles.mainContainer} onPress={onHide} />
    <FlatList
      data={topics}
      ItemSeparatorComponent={() => <View style={commonStyles.separator} />}
      keyExtractor={({ topic: { id } }) => id.toString()}
      renderItem={({ item: { topic } }) => <TopicItem {...topic} onSelect={onSelectTopic} />}
      style={[styles.list, { paddingBottom }]}
    />
  </>
);

TopicPicker.propTypes = {
  topics: arrayOf(TOPIC_SHAPE_LONG),
  onHide: func.isRequired,
  onSelectTopic: func.isRequired,
  paddingBottom: number,
};

TopicPicker.defaultProps = {
  paddingBottom: 0,
};

export default TopicPicker;
