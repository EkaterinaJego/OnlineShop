import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <View>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/background.jpg")}
          style={{ width: "100%", height: "100%" }}
        />

        <View style={styles.iconView}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.iconImage}
          />
          <Text
            style={{
              width: "50%",
              height: "20%",
            }}
          >
            Sell What You Don't Need
          </Text>
        </View>
        <View style={styles.twoButtonsView}>
          <View
            style={{
              width: "100%",
              height: "10%",
              backgroundColor: colors.primary,
            }}
          ></View>
          <View
            style={{
              width: "100%",
              height: "10%",
              backgroundColor: colors.secondary,
            }}
          ></View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  iconView: {
    position: "absolute",
    width: "100%",
    height: "60%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: "15%",
  },
  iconImage: {
    height: "25%",
    width: "40%",
    resizeMode: "contain",
  },

  twoButtonsView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
