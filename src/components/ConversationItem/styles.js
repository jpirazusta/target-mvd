import { StyleSheet } from 'react-native';
import typography from 'constants/typography';
import { OPEN_SANS_SEMIBOLD, OPEN_SANS_REGULAR } from 'constants/fonts';
import { BLACK } from 'constants/colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 17,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: BLACK,
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 18,
    alignSelf: 'center',
    marginRight: 13,
  },
  name: {
    ...typography.conversations,
    fontFamily: OPEN_SANS_SEMIBOLD,
    marginBottom: 2,
  },
  lastMessage: {
    ...typography.conversations,
    fontFamily: OPEN_SANS_REGULAR,
    maxWidth: '80%',
  },
  topicIcon: {
    height: 25,
    width: 25,
  },
  badgePosition: {
    top: 5,
    right: 10,
  },
});

export default styles;
