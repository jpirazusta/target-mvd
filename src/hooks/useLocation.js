import { useEffect } from 'react';
import RNLocation from 'react-native-location';
import { DELTA_COORDS } from 'constants/common';

const DISTANCE_FILTER = 10.0;
const PERMISSIONS = {
  ios: 'whenInUse',
  android: {
    detail: 'coarse',
  },
};
const TIMEOUT = 6000;

RNLocation.configure({
  distanceFilter: DISTANCE_FILTER,
});

const useLocation = setLocation => {
  useEffect(() => {
    async function requestLocation() {
      try {
        let granted = await RNLocation.checkPermission(PERMISSIONS);
        if (!granted) {
          granted = await RNLocation.requestPermission(PERMISSIONS);
        }
        if (granted) {
          const coords = await RNLocation.getLatestLocation({ timeout: TIMEOUT });
          if (coords) {
            const { latitude, longitude } = coords;
            setLocation({ latitude, longitude, ...DELTA_COORDS });
          }
        }
      } catch (error) {
        throw error;
      }
    }

    requestLocation();
  }, []);
};

export default useLocation;
