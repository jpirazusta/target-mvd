import { useSelector } from 'react-redux';
import find from 'lodash/find';

const useTopicIcon = topicId => {
  const topics = useSelector(({ target: { topics } }) => topics);
  const {
    topic: { icon },
  } = find(topics, ({ topic }) => topic.id === topicId);
  return icon;
};

export default useTopicIcon;
