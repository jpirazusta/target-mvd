import { StyleSheet } from 'react-native';
import typography from 'constants/typography';
import fonts from 'constants/fonts';
import { BLACK, YELLOW } from 'constants/colors';

const styles = StyleSheet.create({
  title: {
    ...typography.title,
    marginVertical: 15,
  },
  message: {
    ...fonts.semibold,
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    color: BLACK,
  },
  matchedUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 18,
    marginRight: 10,
  },
  name: {
    ...fonts.semibold,
    fontSize: 12,
    lineHeight: 16,
    color: BLACK,
  },
  chatButton: {
    backgroundColor: YELLOW,
    width: 157,
    marginBottom: 10,
  },
  skipButton: {
    width: 157,
    height: 30,
    alignItems: 'center',
  },
});

export default styles;
