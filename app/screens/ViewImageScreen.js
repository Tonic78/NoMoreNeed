import React from "react";
import { StyleSheet, Image, View } from "react-native";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 50,
    left: 20,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 50,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imageContainer: {
    backgroundColor: "#000",
    flex: 1,
  },
});

export default ViewImageScreen;
