import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Dark Knight"
          subTitle="batman@email.com"
          image={require("../assets/batman.png")}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="My Listings"
          IconComponent={
            <Icon
              name="format-list-bulleted"
              backgroundColor={colors.primary}
            />
          }
        />
        <ListItemSeparator />
        <ListItem
          title="My Messages"
          IconComponent={
            <Icon name="email" backgroundColor={colors.secondary} />
          }
          onPress={() => navigation.navigate("Messages")}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
