import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.white,
  },
  mainContainer: {
    flex: 1,
    marginTop: theme.hp('3%'),
    width: '95%',
    alignSelf: 'center',
  },
  gapCreator: {
    marginTop: theme.hp('2%'),
  },
  lessGapCreator: {
    marginTop: theme.hp('2%'),
  },
  inputBox: {
    height: 45,
    borderWidth: 0.5,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    backgroundColor: 'white',
  },
  suggestions: {
    backgroundColor: 'white',
    padding: 5,
    fontSize: 18,
    borderWidth: 0.5,
    marginLeft: 10,
    marginRight: 10,
  },
  leftText: {
    fontFamily: theme.fontFamilyRegular,
    color: theme.greyDarker,
    fontSize: 14,
  },
});

export default Styles;
