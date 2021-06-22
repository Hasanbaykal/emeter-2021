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
    alignItems: 'center',
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
  inputBox: {
    height: 45,
    padding: 5,
    backgroundColor: theme.black,
    color: theme.white,
    borderRadius: 10,
    marginBottom: 20,
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    borderRadius: 50,
    borderColor: theme.mainColor,
    borderWidth: 2,
  },
  label: {
    color: theme.black,
    fontFamily: theme.fontFamilyBold,
    marginBottom: 15,
    fontSize: 14,
    alignSelf: 'flex-start',
  },
});

export default Styles;
