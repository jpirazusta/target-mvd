import { shape, number, string } from 'prop-types';

export const TOPIC_SHAPE = shape({
  id: number,
  label: string,
});
export const TOPIC_SHAPE_LONG = shape({
  id: number,
  label: string,
  icon: string,
});
