import React from "react";
import { StyleSheet, Text, View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingsDetailScreen from "./app/components/ListingsDetailScreen";

export default function App() {
  return <ListingsDetailScreen />;
}
