import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  mainColor: '#2993FB',
  primaryColor: '#ECEEF0',
  secondaryColor: '#3B3B3B',
  thirdColor: '#D9F2E7',
  inputBox: '#F2F4F5',
  buttonBorder: '#B4B4B4',
  borderColor: '#989898',
  blackShaded: 'rgba(0,0,0,0.3)',
  ratingColor: '#EFD358',
  blue: '##3B9DFF',
  background: '#820263',
  progress: '#FDC233',
  yellow: '#F5CD49',

  black: '#000',

  greyDarkest: '#242424',
  greyDarker: '#707070',
  greyDark: '#8E8E93',
  grey: '#9e9e9e',
  greyLight: '#bdbdbd',
  greyLighter: '#F5F5F5',
  greyLightest: '#eeeeee',
  greyApp: '#77808A',

  white: '#fff',

  redDarkest: '#b71c1c',
  redDarker: '#c62828',
  redDark: '#d32f2f',
  red: '#f44336',
  redLight: '#ef5350',
  redLighter: '#e57373',
  redLightest: '#ef9a9a',

  //Mujtaba
  redView: '#D90368',
  blueView: '#3966CB',
  greenView: '#04A777',
  dividerColor: '#EFEDEE',

  blueDarkest: '#0d47a1',
  blueDarker: '#1565c0',
  blueDark: '#1976d2',
  blue: '#2196f3',
  blueLight: '#42a5f5',
  blueLighter: '#64b5f6',
  blueLightest: '#90caf9',

  purpleDarkest: '#4a148c',
  purpleDarker: '#6a1b9a',
  purpleDark: '#7b1fa2',
  purple: '#9c27b0',
  purpleLight: '#ab47bc',
  purpleLighter: '#ba68c8',
  purpleLightest: '#ce93d8',

  greenDarkest: '#1b5e20',
  greenDarker: '#2e7d32',
  greenDark: '#388e3c',
  green: '#42B029',
  greenLight: '#66bb6a',
  greenLighter: '#81c784',
  greenLightest: '#a5d6a7',

  googleGreen: '#33A853',
  facebookBlue: '#4D6FA9',

  peepBlue: '#53C7FC',

  fontFamilyBlack: 'NunitoSans-Black',
  fontFamilyBold: 'NunitoSans-Bold',
  fontFamilyExtraBold: 'NunitoSans-ExtraBold',
  fontFamilyLight: 'NunitoSans-Light',
  fontFamilyExtraLight: 'NunitoSans-ExtraLight',
  fontFamilyItalic: 'NunitoSans-Italic',
  fontFamilyMedium: 'NunitoSans-SemiBold',
  fontFamilyRegular: 'NunitoSans-Regular',

  width: width,
  height: height,

  widthPercentage: width / 100,
  heightPercentage: height / 100,

  hp: hp,
  wp: wp,
};
