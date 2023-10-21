import React from "react";
// import * as TalkRn from '@talkjs/react-native';
import { View, StyleSheet } from "react-native";
import * as TalkRn from "@talkjs/expo";
import { LinearGradient } from "expo-linear-gradient";
export default function ChatScreen(props) {
  const me = {
    id: "123456789",
    name: "Alice",
    email: "alice@example.com",
    photoUrl: "https://talkjs.com/images/avatar-1.jpg",
    welcomeMessage: "Hey there! How are you? :-)",
    role: "default",
  };

  const other = {
    id: "987654321",
    name: "Sebastian",
    email: "Sebastian@example.com",
    photoUrl: "https://talkjs.com/images/avatar-5.jpg",
    welcomeMessage: "Hey, how can I help? https://google.com",
    role: "default",
  };

  const conversationBuilder = TalkRn.getConversationBuilder(
    TalkRn.oneOnOneId(me, other)
  );

  conversationBuilder.setParticipant(me);
  conversationBuilder.setParticipant(other);

  return (
    <LinearGradient colors={["#bddded", "#D8D8D8"]} style={styles.container}>
      <View style={styles.container}>
        <TalkRn.Session appId="t8orPdLy" me={me}>
          <TalkRn.Chatbox conversationBuilder={conversationBuilder} />
        </TalkRn.Session>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    padding: 7,
  },
});
