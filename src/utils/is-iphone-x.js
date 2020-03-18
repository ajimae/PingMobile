// is-iphone-x.js
import { Dimensions, Platform } from 'react-native';

const dimension = Dimensions.get('window');

export function isX() {
  return Platform.OS === 'ios' &&
    (dimension.height > 800 || dimension.width > 800)
    ? true
    : false;
}

export function isIphoneX() {
  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dimension) || isIPhoneXrSize(dimension))
  );
}

export function isIPhoneXSize(_dimension) {
  return _dimension.height === 812 || _dimension.width === 812;
}

export function isIPhoneXrSize(_dimension) {
  return _dimension.height === 896 || _dimension.width === 896;
}

// --- main.js Example

// import {isIphoneX} from './is-iphone-x'
// const HEADER_SIZE = isIphoneX() ? 130 : 100;
