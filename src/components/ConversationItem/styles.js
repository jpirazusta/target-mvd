import { StyleSheet } from 'react-native';
import typography from 'constants/typography';
import fonts from 'constants/fonts';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    height: 35,
    width: 35,
    alignSelf: 'center',
    marginRight: 13,
  },
  name: {
    ...typography.conversations,
    ...fonts.semibold,
    marginBottom: 2,
  },
  lastMessage: {
    ...typography.conversations,
    ...fonts.regular,
  },
  topicIcon: {
    height: 25,
    width: 25,
  },
});

export default styles;
