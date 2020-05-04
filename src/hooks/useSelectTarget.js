import { useEffect, useCallback } from 'react';
import find from 'lodash/find';
import { DELTA_COORDS } from 'constants/common';

const useSelectTarget = (
  isMapRendered,
  selectedTarget,
  location,
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
      ...DELTA_COORDS,
    };
    isMapRendered && mapView.current.animateToRegion(region);
  }, [isMapRendered, location, mapView, selectedTarget]);

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
