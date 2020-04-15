import { useEffect, useState } from 'react';
import RNLocation from 'react-native-location';

import parseError from 'utils/parseError';

const DISTANCE_FILTER = 5.0;
const INITIAL_COORDS = {
  latitude: 37.78825,
  longitude: -122.4324,
};
const PERMISSIONS = {
  ios: 'whenInUse',
  android: {
    detail: 'coarse',
  },
};
const TIMEOUT = 60000;

RNLocation.configure({
  distanceFilter: DISTANCE_FILTER,
});

const useLocation = () => {
  const [location, setLocation] = useState(INITIAL_COORDS);

  useEffect(() => {
    async function requestLocation() {
      try {
        let granted = await RNLocation.checkPermission(PERMISSIONS);
        if (!granted) {
          granted = await RNLocation.requestPermission(PERMISSIONS);
        }
        if (granted) {
          const { latitude, longitude } = await RNLocation.getLatestLocation({ timeout: TIMEOUT });
          setLocation({ latitude, longitude });
        }
      } catch (error) {
        throw parseError(error);
      }
    }
    requestLocation();
  }, []);

  return { location };
};

export default useLocation;
