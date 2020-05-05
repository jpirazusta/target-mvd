import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStatus } from '@rootstrap/redux-tools';
import { getConversations } from 'actions/chatActions';

const useGetConversations = navigation => {
  const dispatch = useDispatch();
  const requestConversations = useCallback(() => {
    dispatch(getConversations());
  }, [dispatch]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      requestConversations();
    });

    return unsubscribe;
  }, []);

  const { error, status } = useStatus(getConversations);
  const conversations = useSelector(({ chat: { conversations } }) => conversations);

  return { conversations, status, error, requestConversations };
};

export default useGetConversations;
