import {Platform} from 'react-native';
import {
  getBuildNumber,
  getVersion,
  getUniqueId,
} from 'react-native-device-info';

const getDevideId = (): string => {
  let deviceID: string = '';

  getUniqueId().then(id => {
    deviceID = id;
  });
  return deviceID;
};

export const appConfig = {
  apiUrl: __DEV__ ? 'http://194.67.125.33:3001' : 'http://194.67.125.33:3001',
  deviceId: getDevideId(),
  version: `${getVersion()} (${getBuildNumber()})`,
  isIOS: Platform.OS === 'ios',
  adminPhone: '+89280649013',
};
