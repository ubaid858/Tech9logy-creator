const { Dimensions } = require("react-native");

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const MOCKUP_WIDTH = 375;
//responsiveness
export const DP = (temp) => (SCREEN_WIDTH / (MOCKUP_WIDTH / temp));

let checkPlatform = (Platform.OS === 'android')
export const IS_ANDROID = checkPlatform;