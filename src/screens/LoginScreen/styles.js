import { StyleSheet } from 'react-native';
import typography from 'constants/typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 66,
  },
  welcome: {
    ...typography.title,
    textAlign: 'center',
    marginBottom: 68,
  },
});

export default styles;
