import { shape, number, string, objectOf } from 'prop-types';

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

export const LOCATION_SHAPE = shape({
  latitude: number,
  longitude: number,
});

export const USER_SHAPE = shape({
  id: number.isRequired,
  fullName: string,
  avatar: objectOf(string),
});

export const CONVERSATION_SHAPE = shape({
  matchId: number.isRequired,
  topicIcon: string.isRequired,
  lastMessage: string,
  unreadMessages: number,
  user: USER_SHAPE,
});
