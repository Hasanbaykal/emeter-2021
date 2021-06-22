import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.white,
  },
  logo: {
    height: theme.hp('30%'),
    width: theme.wp('70%'),
    resizeMode: 'stretch',
  },
  mostGapCreator: {
    marginTop: theme.hp('5%'),
  },
  moreGapCreator: {
    marginTop: theme.hp('4%'),
  },
  gapCreator: {
    marginTop: theme.hp('3%'),
  },
  lessGapCreator: {
    marginTop: theme.hp('2%'),
  },
  lesserGapCreator: {
    marginTop: theme.hp('1%'),
  },
});

export default Styles;
