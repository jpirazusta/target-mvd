import { StyleSheet } from 'react-native';
import typography from 'constants/typography';
import fonts from 'constants/fonts';
import { YELLOW, WHITE } from 'constants/colors';

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
  unread: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 5,
    right: 5,
  },
  unreadNumber: {
    color: WHITE,
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
