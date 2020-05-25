import React from "react";

import Apptext from "./AppText";
import { StyleSheet } from "react-native";

function ErrorMessage({ error }) {
  if (!error) return null;

  return <Apptext style={styles.error}>{error}</Apptext>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
