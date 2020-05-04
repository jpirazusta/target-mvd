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
export const TARGET_SHAPE = shape({
  id: number,
  lat: number,
  lng: number,
  title: string,
  topicId: number,
  radius: number,
});

export const MATCH_SHAPE = shape({
  id: number.isRequired,
  email: string.isRequired,
  firstName: string,
  lastName: string,
  fullName: string,
  username: string,
  gender: string,
  avatar: shape({
    originalUrl: string,
    normalUrl: string,
    smallThumbUrl: string,
  }),
});

export const CONVERSATION_SHAPE = shape({
  id: number,
  topicId: number,
});

export const LOCATION_SHAPE = shape({
  latitude: number,
  longitude: number,
});
