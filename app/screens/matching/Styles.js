import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.black,
  },
  mainContainer: {
    flex: 1,
    marginTop: theme.hp('3%'),
    width: '95%',
    alignSelf: 'center',
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
    height: 100,
    padding: 5,
    backgroundColor: theme.greyLight,
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 30,
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
  details: {
    color: theme.white,
    fontFamily: theme.fontFamilyExtraBold,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Styles;
