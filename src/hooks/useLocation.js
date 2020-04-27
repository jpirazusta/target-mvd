import { useEffect, useState } from 'react';
import RNLocation from 'react-native-location';

const DISTANCE_FILTER = 1.0;
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

RNLocation.configure({
  distanceFilter: DISTANCE_FILTER,
});

const useLocation = () => {
  const [location, setLocation] = useState(INITIAL_COORDS);

  useEffect(() => {
    let unsubscribe = () => null;
    async function requestLocation() {
      try {
        let granted = await RNLocation.checkPermission(PERMISSIONS);
        if (!granted) {
          granted = await RNLocation.requestPermission(PERMISSIONS);
        }
        if (granted) {
          unsubscribe = RNLocation.subscribeToLocationUpdates(location => {
            const { latitude, longitude } = location[location.length - 1];
            setLocation({ latitude, longitude });
          });
        }
      } catch (error) {
        throw error;
      }
    }
    requestLocation();
    return unsubscribe;
  }, []);

  return location;
};

export default useLocation;
