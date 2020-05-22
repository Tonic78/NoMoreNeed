import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const messages = [
  // hard coded data to be replaced by dynamic data
  {
    id: 1,
    title: "Title 1",
    description: "Desc 1",
    image: require("../assets/avatar.jpeg"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Desc 2",
    image: require("../assets/avatar.jpeg"),
  },
  {
    id: 3,
    title: "Title 3",
    description: "Desc 3",
    image: require("../assets/avatar.jpeg"),
  },
];

function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
