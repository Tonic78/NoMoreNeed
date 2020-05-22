import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/ListItem";

const messages = [
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
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
