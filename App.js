import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingsDetailScreen from "./app/components/ListingsDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";

const categories = [
  { label: "Vehicles", value: 1 },
  { label: "Equipement", value: 2 },
  { label: "Outfit", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <SignUpScreen />
    // <Screen>
    //   <AppPicker
    //     selectedItem={category}
    //     onSelectedItem={(item) => setCategory(item)}
    //     items={categories}
    //     icon="apps"
    //     placeholder="Category"
    //   />
    //   <AppTextInput icon="email" placeholder="Email" />
    // </Screen>
  );
}
