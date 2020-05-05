import React from 'react';
import { object } from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { LOADING } from '@rootstrap/redux-tools';

import ConversationItem from 'components/ConversationItem';
import useGetConversations from 'hooks/useGetConversations';
import strings from 'locale';
import { CHAT_SCREEN } from 'constants/screens';
import common from 'constants/commonStyles';

const ConversationsScreen = ({ navigation }) => {
  const { conversations, status, error, requestConversations } = useGetConversations(navigation);

  return (
    <View style={common.screenContainer}>
      {error ? (
        <Text>{strings.CHAT.conversationsError}</Text>
      ) : (
        <FlatList
          data={conversations}
          ItemSeparatorComponent={() => <View style={common.separator} />}
          keyExtractor={({ matchId }) => matchId.toString()}
          renderItem={({ item }) => (
            <ConversationItem
              conversation={item}
              onSelect={() =>
                navigation.push(CHAT_SCREEN, {
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
    </View>
  );
};

ConversationsScreen.propTypes = {
  navigation: object.isRequired,
};

export default ConversationsScreen;
