import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} />
      <View style={styles.deleteIcon} />

      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },

  closeIcon: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    top: 10,
    right: 30,
  },
  deleteIcon: {
    position: "absolute",
    width: 50,
    height: 50,
    top: 10,
    left: 30,
    backgroundColor: colors.secondary,
  },
});
