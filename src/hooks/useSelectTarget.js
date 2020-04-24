import { useEffect, useCallback } from 'react';
import find from 'lodash/find';

const useSelectTarget = (
  selectedTarget,
  location,
  coordsConstants,
  mapView,
  setSelectedTarget,
  animate,
  formPositionAnim,
) => {
  useEffect(() => {
    const coords = selectedTarget
      ? { latitude: selectedTarget.lat, longitude: selectedTarget.lng }
      : location;
    const region = {
      ...coords,
      ...coordsConstants,
    };
    mapView.current.animateToRegion(region);
  }, [coordsConstants, location, mapView, selectedTarget]);

  const onSelectTarget = useCallback(
    (id, targets) => {
      const { target } = find(targets, ({ target }) => target.id === id);
      setSelectedTarget(target);
      animate(formPositionAnim, 0);
    },
    [animate, formPositionAnim, setSelectedTarget],
  );

  return onSelectTarget;
};

export default useSelectTarget;
