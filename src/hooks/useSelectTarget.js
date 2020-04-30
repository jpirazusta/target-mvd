import { useEffect, useCallback } from 'react';
import find from 'lodash/find';

const useSelectTarget = (
  isMapRendered,
  selectedTarget,
  location,
  coordsConstants,
  mapView,
  setSelectedTarget,
  animate,
  formPositionAnim,
  setFormVisible,
) => {
  useEffect(() => {
    const coords = selectedTarget
      ? { latitude: selectedTarget.lat, longitude: selectedTarget.lng }
      : location;
    const region = {
      ...coords,
      ...coordsConstants,
    };
    if (isMapRendered) mapView.current.animateToRegion(region);
  }, [coordsConstants, isMapRendered, location, mapView, selectedTarget]);

  const onSelectTarget = useCallback(
    (id, targets) => {
      const { target } = find(targets, ({ target }) => target.id === id);
      setSelectedTarget(target);
      setFormVisible(true);
      animate(formPositionAnim, 0);
    },
    [animate, formPositionAnim, setFormVisible, setSelectedTarget],
  );

  return onSelectTarget;
};

export default useSelectTarget;
