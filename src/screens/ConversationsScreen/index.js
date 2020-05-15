import React from 'react';
import { object } from 'prop-types';
import { SafeAreaView, FlatList, Text } from 'react-native';
import { LOADING } from '@rootstrap/redux-tools';

import ConversationItem from 'components/ConversationItem';
import useGetConversations from 'hooks/useGetConversations';
import strings from 'locale';
import { CHAT_SCREEN } from 'constants/screens';
import commonStyles from 'constants/commonStyles';

const ConversationsScreen = ({ navigation }) => {
  const { conversations, status, error, requestConversations } = useGetConversations(navigation);

  return (
    <SafeAreaView style={commonStyles.screenContainer}>
      {error ? (
        <Text>{strings.CHAT.conversationsError}</Text>
      ) : (
        <FlatList
          data={conversations}
          keyExtractor={({ matchId }) => matchId.toString()}
          renderItem={({ item }) => (
            <ConversationItem
              conversation={item}
              onSelect={() =>
                navigation.navigate(CHAT_SCREEN, {
                  userName: item.user.fullName,
                  matchId: item.matchId,
                })
              }
            />
          )}
          onRefresh={requestConversations}
          refreshing={status === LOADING}
        />
      )}
    </SafeAreaView>
  );
};

ConversationsScreen.propTypes = {
  navigation: object.isRequired,
};

export default ConversationsScreen;
